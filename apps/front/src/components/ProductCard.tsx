"use client"

import Link from "next/link";
import {OrderItem, Product} from "@/lib/types/modelTypes";
import {addItemsToCart, getImagePath, retrieveCartFromLocalStorage} from "@/lib/utils";
import {useEffect, useState} from "react";

type Props = Partial<Product>
const ProductCard = (
    {
        id,
        category,
        name,
        description,
        stock,
        price
    }: Props) => {

    const [cart, setCart] = useState<Partial<OrderItem>[]>([]);
    const product = {
        id,
        category,
        name,
        description,
        stock,
        price
    } as Product

    useEffect(() => {
        setCart(retrieveCartFromLocalStorage())
    }, []);

    useEffect(() => {
        if (cart.length) localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = () => {
        const newCart = addItemsToCart(product, cart)
        if (newCart) setCart(newCart)
    };

    return (
        <Link href={`/product/${id}`}>
            <div
                className="bg-white rounded-2xl shadow-md m-auto cursor-pointer hover:shadow-xl transition-shadow duration-300 p-4 w-full max-w-xs">
                <img
                    src={category ? getImagePath(category) : undefined}
                    alt={name}
                    className="rounded-xl w-full h-48 object-contain mb-4"
                />

                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {name}
                </h3>

                <p className="text-sm text-gray-600 h-10 overflow-hidden text-ellipsis line-clamp-3 mb-4">
                    {description}
                </p>

                <p className="text-sm text-green-600 font-medium mb-4">
                    {stock ? 'In Stock' : 'Out of stock'}
                </p>

                <p className="text-amber-600 font-bold text-lg mb-4">
                    {`${price} $`}
                </p>

                <button
                    onClick={addToCart}
                    className="w-full cursor-pointer bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </Link>
    )
}

export default ProductCard
