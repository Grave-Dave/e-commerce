"use client"

import {useEffect, useState} from "react";
import Image from 'next/image';

import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {getImagePath} from "@/lib/utils";
import {OrderItem, Product} from "@/lib/types/modelTypes";

type Props = {
    product: Product
}

const ProductPageContent = ({product}: Props) => {

    const {
        id,
        category,
        name,
        description,
        stock,
        price
    } = product;

    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState<Partial<OrderItem>[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            try {
                setCart(JSON.parse(stored));
            } catch (err) {
                console.error('Failed to load cart', err);
                setCart([]);
            }
        }
    }, []);

    useEffect(() => {
        cart.length && localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = () => {
        if (id && stock) {
            if (quantity > 0 && quantity <= stock) {
                setCart([...cart, {
                    product,
                    quantity,
                    price
                }]);
                alert(`${quantity} item(s) added to cart!`);
            } else {
                alert('Please select a valid quantity.');
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 pt-16 md:pt-20 bg-gray-50">
            <Card className="flex flex-col md:flex-row gap-6 p-6">
                <Image
                    src={category ? getImagePath(category) : ''}
                    alt={name ?? ''}
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover"
                />
                <CardContent className="flex flex-col justify-around itemsflex-1 space-y-4">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="text-gray-700">{description}</p>
                    <p className="text-2xl font-semibold">${price?.toFixed(2)}</p>

                    <div className="flex items-center gap-4">
                        <label htmlFor="quantity" className="text-sm font-medium">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            min={1}
                            max={stock}
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="w-20 border rounded-lg px-2 py-1"
                        />
                    </div>

                    <Button onClick={addToCart}
                            className="w-full bg-emerald-600 hover:bg-emerald-800 cursor-pointer md:w-auto">
                        Add to Cart
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
}

export default ProductPageContent
