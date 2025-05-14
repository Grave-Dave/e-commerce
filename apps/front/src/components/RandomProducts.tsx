import {Product} from "@/lib/types/modelTypes";
import ProductCarousel from "@/components/ProductCarousel";

type Props = {
    products: Product[]
}
const Products = (props: Props) => {

    return (
        <section>
            <h2 className="text-3xl font-bold text-center text-gray-500 leading-tight mt-2">
                Check out these products!
            </h2>
            <div
                className="h-1 mx-auto bg-gradient-to-r from-emerald-600 to-emerald-400 w-64 mt-2 mb-8 rounded-t-md"></div>
            <ProductCarousel products={props.products}/>
        </section>
    )
}

export default Products
