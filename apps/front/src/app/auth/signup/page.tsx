import Link from "next/link";
import SignUpForm from "@/app/auth/signup/components/SignUpForm";

const SignUpPage = () => {
    return(
        <div className="bg-white p-8 rounded-md shadow-md w-96 flex flex-col justify-center mt-16 md:mt-20">
            <h2 className="text-center text-2xl font-bold mb-4">Sign Up Page</h2>
            <SignUpForm />
            <div className="flex flex-col items-center pt-4">
                <p>Already have an account?</p>
                <Link className="underline" href={"/auth/signin"}>
                    Sign In
                </Link>
            </div>
        </div>
    )
}

export default SignUpPage
