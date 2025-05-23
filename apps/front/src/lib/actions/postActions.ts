"use server"

import {print} from "graphql"
import {fetchGraphQL} from "@/lib/fetchGraphQL";
import {GET_PRODUCT_BY_ID, GET_PRODUCTS} from "@/lib/gqlQueries";
import {Product} from "@/lib/types/modelTypes";
import {transformTakeSkip} from "@/lib/helpers";

export const fetchProducts = async (
    {
        page,
        pageSize,
        category
    }: {
        page?: number,
        pageSize?: number
        category?: string
    }) => {
    const {skip, take} = transformTakeSkip({page, pageSize})
    const data = await fetchGraphQL(print(GET_PRODUCTS), {skip, take, category})
    return {
        products: data.products as Product[],
        totalProducts: data.productCount
    }
}

export const fetchProductById = async (id: number) => {
    const data = await fetchGraphQL(print(GET_PRODUCT_BY_ID), {id});

    return data.getProductById as Product;
};
