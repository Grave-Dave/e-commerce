import {PropsWithChildren} from "react";

const AuthLayout = ({children}: PropsWithChildren) => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            {" "}
            {children}
        </div>
    )
}

export default AuthLayout
