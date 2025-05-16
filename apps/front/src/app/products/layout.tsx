import {PropsWithChildren} from "react";

const ProductsLayout = ({children}: PropsWithChildren) => {
    return(
        <div className="min-h-screen bg-gray-50">
            {" "}
            {children}
        </div>
    )
}

export default ProductsLayout
