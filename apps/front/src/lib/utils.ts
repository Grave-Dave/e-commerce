import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import first from "lodash/first";
import {Category, Product} from "@/lib/types/modelTypes";

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
