import { Product} from "@/lib/types/modelTypes";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/pagination";
import {getCategoryName} from "@/lib/utils";

type Props = {
    products: Product[]
    currentPage: number;
    totalPages: number;
}
const Products = ({products, currentPage, totalPages}: Props) => {
    // todo: add sorting
    return (
        <section className="pb-4">
            <h2 className="text-3xl font-bold text-center text-gray-500 leading-tight pt-16 md:pt-24">
                {getCategoryName(products)}
            </h2>
            <div
                className="h-1 mx-auto bg-gradient-to-r from-emerald-600 to-emerald-400 w-32 mt-2 mb-8 rounded-t-md"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-6 mx-4">
                {products?.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
            <Pagination
                className="mt-6"
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </section>
    )
}

export default Products
