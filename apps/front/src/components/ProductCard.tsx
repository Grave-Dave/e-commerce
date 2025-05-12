import {Product} from "@/lib/types/modelTypes";

type Props = {
    product: Product
}
const ProductCard = ({product}: Props) => {
    const imagePath = `/images/${product.category.name}.jpg`;
    return (
        <div
            className="bg-white rounded-2xl shadow-md m-auto cursor-pointer hover:shadow-xl transition-shadow duration-300 p-4 w-full max-w-xs">
            <img
                src={imagePath}
                alt={product.name}
                className="rounded-xl w-full h-48 object-contain mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {product.name}
            </h3>

            <p className="text-sm text-gray-500 mb-2">
                {product.description}
            </p>

            <p className="text-sm text-green-600 font-medium mb-4">
                {product.stock ? 'In Stock' : 'Out of stock'}
            </p>

            <p className="text-amber-600 font-bold text-lg mb-4">
                {`${product.price} $`}
            </p>

            <button
                className="w-full cursor-pointer bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard
