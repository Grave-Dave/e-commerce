import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <h1 className="text-emerald-700 text-3xl font-bold p-4 md:text-inherit md:p-2 md:transition md:duration-800">Pet e-shop</h1>
            <div
                className="md:ml-auto px-2 text-xl flex flex-col md:flex-row gap-2 md:items-center md:justify-center [&>a:hover]:bg-emerald-500 [&>a]:rounded-md [&>a]:transition [&>a]:duration-200 [&>a]:px-4 md:[&>a]:py-2 [&>a]:py-1 ">
                <Link href="/" className="inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    Home
                </Link>
                <Link href="#food" className="inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    Food
                </Link>
                <Link href="#toys" className="inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    Toys
                </Link>
                <Link href="#accessories" className="inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    Accessories
                </Link>
                <Link href="#contact" className="inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    Contact
                </Link>
            </div>
        </>
    )
}

export default Navbar
