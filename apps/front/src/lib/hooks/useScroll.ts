"use client"
import {useEffect, useState} from "react";

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const isScrollDown = scrollPosition > 10;

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return {
        isScrollDown
    };
}