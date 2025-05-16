"use client"

import React from "react";
import Link from "next/link";
import {Product} from "@/lib/types/modelTypes";
import {getImagePath} from "@/lib/utils";
import {useCartContext} from "@/lib/CartContext";

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

    const product = {
        id,
        category,
        name,
        description,
        stock,
        price
    } as Product

    const {addToCart} = useCartContext();

    const addItemToCart =
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            e.preventDefault();
            addToCart(product)
        }

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
                    onClick={addItemToCart}
                    className="w-full cursor-pointer bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </Link>
    )
}

export default ProductCard
