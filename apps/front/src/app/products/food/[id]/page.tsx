import {fetchProducts} from "@/lib/actions/postActions";
import Products from "@/components/Products";
import {DEFAULT_PAGE_COUNT} from "@/lib/constants";

type Props = {
    params: {
        id: string
    }
}
const FoodProductPage = async ({params}: Props) => {
    const productId = (await params).id

    return (<></>
        // <Products
        //     products={products}
        //     currentPage={page ? +page : 1}
        //     totalPages={Math.ceil(totalProducts / DEFAULT_PAGE_COUNT)}
        // />
    )
}

export default FoodProductPage

