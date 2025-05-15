import {use} from "react";
import {fetchProductById} from "@/lib/actions/postActions";
import ProductPageContent from "@/app/product/[id]/components/ProductPageContent";

type Props = {
    params: Promise<{ id: string }>
}

const ProductPage = async ({params}: Props) => {
    const { id } = await params;
    const product = await fetchProductById(+id)

    return (
        <ProductPageContent product={product}/>
    );
}

export default ProductPage
