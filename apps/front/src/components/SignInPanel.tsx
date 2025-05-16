import Link from "next/link";

const SignInPanel = () => {
    return (
        <Link
            className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
            href={"/auth/signup"}>Sign Up</Link>
    );
};

export default SignInPanel;