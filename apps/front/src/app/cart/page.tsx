'use client'

import Image from 'next/image';
import {Minus, Plus, Trash2} from 'lucide-react';
import {getImagePath} from "@/lib/utils";
import {Product} from "@/lib/types/modelTypes";
import {useCartContext} from "@/lib/CartContext";
import cartImage from "../../../public/images/empty-cart.png"

const CartPage = () => {

    const {cart, addToCart, decreaseQuantity, removeFromCart} = useCartContext();

    const subtotal = cart.reduce((acc, item) => {
        const price = item.price ?? 0;
        const quantity = item.quantity ?? 0;
        return acc + price * quantity;
    }, 0);

    return (
        <div className="max-w-5xl mx-auto px-4 py-4 pt-16 md:pt-28">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            {cart.length
                ? <div className="space-y-6">
                    {cart.map((item, i) => (
                        <div
                            key={`item ${i + 1}`}
                            className="flex items-start gap-6 border-b pb-6"
                        >
                            <Image
                                src={item.product?.category ? getImagePath(item.product.category) : ''}
                                alt={item.product?.name ?? ''}
                                width={100}
                                height={100}
                                className="rounded-xl object-cover"
                            />
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{item.product?.name}</h2>
                                <p className="text-gray-600">${item.product?.price.toFixed(2)}</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <button
                                        onClick={() => decreaseQuantity(item.product?.id as number)}
                                        className="p-1 cursor-pointer border rounded hover:bg-gray-100">
                                        <Minus size={16}/>
                                    </button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => addToCart(item.product as Product)}
                                        className="p-1 cursor-pointer border rounded hover:bg-gray-100">
                                        <Plus size={16}/>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-end justify-start h-full gap-3 p-2">
                                <button
                                    className="text-red-500 cursor-pointer hover:text-red-700"
                                    onClick={() => removeFromCart(item.product?.id as number)}>
                                    <Trash2 size={18}/>
                                </button>
                                <p className="font-semibold">
                                    ${((item.product?.price || 0) * (item.quantity ?? 0)).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                : <div className="flex flex-col justify-center items-center">
                    <div className="text-lg font-medium">Cart is empty</div>
                    <Image
                        src={cartImage}
                        alt={'empty-cart'}
                        width={300}
                        height={300}
                        className="rounded-xl object-cover"
                    />
                </div>
            }

            <div className="mt-10 border-t pt-6 flex justify-between items-center">
                <div className="text-lg font-medium">Subtotal</div>
                <div className="text-2xl font-bold">${subtotal.toFixed(2)}</div>
            </div>

            <div className="mt-6 text-right">
                {/*todo: implement PaymentPage */}
                <button
                    onClick={() => alert('Payment will be added soon.')}
                    className="bg-emerald-600 cursor-pointer text-white px-6 py-3 rounded-xl hover:bg-emerald-800 transition">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
