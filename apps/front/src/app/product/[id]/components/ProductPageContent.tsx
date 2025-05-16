"use client"

import {useState} from "react";
import Image from 'next/image';

import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {getImagePath} from "@/lib/utils";
import {Product} from "@/lib/types/modelTypes";
import {useCartContext} from "@/lib/CartContext";

type Props = {
    product: Product
}

const ProductPageContent = ({product}: Props) => {

    const {
        category,
        name,
        description,
        stock,
        price
    } = product;

    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCartContext();

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

                    <Button onClick={() => addToCart(product, quantity)}
                            className="w-full bg-emerald-600 hover:bg-emerald-800 cursor-pointer md:w-auto">
                        Add to Cart
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
}

export default ProductPageContent
