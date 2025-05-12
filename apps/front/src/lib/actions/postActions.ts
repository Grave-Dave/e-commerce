"use server"

import {print} from "graphql"
import {fetchGraphQL} from "@/lib/fetchGraphQL";
import {GET_PRODUCTS} from "@/lib/gqlQueries";
import {Product} from "@/lib/types/modelTypes";
import {transformTakeSkip} from "@/lib/helpers";

export const fetchProducts = async (
    {
        page,
        pageSize
    }: {
        page?: number,
        pageSize?: number
    }) => {
    const {skip, take} = transformTakeSkip({page, pageSize})
    const data = await fetchGraphQL(print(GET_PRODUCTS), {skip, take})
    return {
        products: data.products as Product[],
        totalProducts: data.productCount
    }
}
