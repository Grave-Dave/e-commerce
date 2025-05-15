import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import first from "lodash/first";
import {Category, OrderItem, Product} from "@/lib/types/modelTypes";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getCategoryName = (products: Product[]) => {
    const firstProduct = first(products);
    if (!firstProduct || !firstProduct.category?.name) {
        return 'No products found';
    }

    const {name: categoryName} = firstProduct.category;

    if (['Beds', 'Leashes'].includes(categoryName)) {
        return 'Accessories';
    }

    return categoryName;
}

export const getImagePath = (category: Category) => (
    `/images/${category?.name}.jpg`
)

export const retrieveCartFromLocalStorage = () => {
    const stored = localStorage.getItem('cart') ?? '[]';
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (err) {
            console.error('Failed to load cart', err);
            return [];
        }
    }
}

export const addItemsToCart = (product: Product, cart: Partial<OrderItem>[], quantity = 1) => {
    const {id, stock, price} = product
    if (id && stock) {
        if (quantity > 0 && quantity <= stock) {
            alert(`${quantity} item(s) added to cart!`);
            return [...cart, {
                product,
                quantity,
                price
            }];
        } else {
            alert('Please select a valid quantity.');
        }
    }
}

