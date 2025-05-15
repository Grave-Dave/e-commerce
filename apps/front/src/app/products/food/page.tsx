import {fetchProducts} from "@/lib/actions/postActions";
import Products from "@/components/Products";
import {DEFAULT_PAGE_COUNT} from "@/lib/constants";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
const FoodPage = async ({searchParams}: Props) => {
    const {page} = await searchParams;
    const {products, totalProducts} = await fetchProducts(
        {
            page: page ? +page : undefined,
            pageSize: undefined,
            category: 'Food'
        }
    )

    return (
        <Products
            products={products}
            currentPage={page ? +page : 1}
            totalPages={Math.ceil(totalProducts / DEFAULT_PAGE_COUNT)}
        />
    )
}

export default FoodPage

