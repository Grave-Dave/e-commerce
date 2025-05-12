"use client"

import {useRef} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

import {Product} from "@/lib/types/modelTypes";
import ProductCard from "@/components/ProductCard";


type Props = {
    products: Product[]
}
export default function ProductCarousel({products}: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = 260 * 2;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full">
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white cursor-pointer shadow-md rounded-full p-2 hover:bg-gray-100"
            >
                <ChevronLeft className="w-6 h-6"/>
            </button>
            <div className="overflow-x-auto px-8 no-scrollbar" ref={scrollRef}>
                <div
                    className="flex gap-6 px-8 py-6 w-max scroll-smooth"
                >
                    {products.map((product, i) => (
                        <div key={`product ${i + 1}`} className="min-w-[240px]">
                            <ProductCard product={product}/>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white cursor-pointer shadow-md rounded-full p-2 hover:bg-gray-100"
            >
                <ChevronRight className="w-6 h-6"/>
            </button>
        </div>
    );
}