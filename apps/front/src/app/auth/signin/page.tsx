import Link from "next/link";
import SignInForm from "@/app/auth/signin/components/SignInForm";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
    return (
        <div
            className=" bg-white p-8 border rounded-md gap-3 shadow-md w-96 flex flex-col justify-center mt-16 md:mt-20">
            <h1 className="text-center text-2xl font-bold mb-4">Sign In Page</h1>
            <SignInForm/>
            <Link className="flex justify-center pt-4 pb-2 underline" href={"/auth/signup"}>Don't have an account? Sign Up here</Link>
            <p className="flex justify-center">or</p>
            <Button
                className="text-white cursor-pointer font-semibold px-4 my-4 rounded-xl bg-gradient-to-r from-[#FBBC05] via-[#4285F4] to-[#34A853] hover:opacity-90 transition">
                <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`}>Sign In With Google</a>
            </Button>
        </div>
    );
};

export default SignInPage;