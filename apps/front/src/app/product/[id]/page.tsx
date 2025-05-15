import {fetchProductById} from "@/lib/actions/postActions";
import ProductPageContent from "@/app/product/[id]/components/ProductPageContent";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    params: { id: string }
}

const ProductPage = async ({params}: Props) => {
    const productId = (params).id
    const product = await fetchProductById(+productId)

    return (
        <ProductPageContent product={product}/>
    );
}

export default ProductPage
