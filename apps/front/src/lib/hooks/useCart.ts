import {useState, useEffect, useCallback} from 'react';
import {OrderItem, Product} from "@/lib/types/modelTypes";

const LOCAL_STORAGE_KEY = 'cart';

const retrieveCartFromLocalStorage = (): Partial<OrderItem>[] => {
    try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error("Error loading cart from localStorage", e);
        return [];
    }
};

const storeCartInLocalStorage = (cart: Partial<OrderItem>[]) => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
        console.error("Error saving cart to localStorage", e);
    }
};

export const useCart = () => {
    const [cart, setCart] = useState<Partial<OrderItem>[]>([]);

    useEffect(() => {
        const storedCart = retrieveCartFromLocalStorage();
        setCart(Array.isArray(storedCart) ? storedCart : []);
    }, []);

    useEffect(() => {
        storeCartInLocalStorage(cart);
    }, [cart]);

    const addToCart = useCallback((product: Product, quantity = 1) => {
        const {id, stock, price} = product
        if (stock) {
            if (quantity > 0 && quantity <= stock) {
                alert(`${quantity} item(s) added to cart!`);
                setCart(prevCart => {
                    const existingItem = prevCart.find(item => item.product?.id === id);
                    if (existingItem) {
                        return prevCart.map(item =>
                            item.product?.id === id
                                ? {
                                    ...item,
                                    quantity: (item.quantity || quantity) + quantity
                                }
                                : item
                        );
                    }
                    return [...prevCart, {product, quantity, price}];
                });
            } else {
                alert('Please select a valid quantity.');
            }
        } else {
            alert('Out of stock.');
        }
    }, []);

    const decreaseQuantity = useCallback((productId: number) => {
        setCart(prevCart =>
            prevCart
                .map(item =>
                    item.product?.id === productId
                        ? {
                            ...item,
                            quantity: Math.max((item.quantity || 1) - 1, 1)
                        }
                        : item
                )
                .filter(item => item.quantity && item.quantity > 0)
        );
    }, []);

    const removeFromCart = useCallback((productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.product?.id !== productId));
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
    }, []);

    return {
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
    };
};
