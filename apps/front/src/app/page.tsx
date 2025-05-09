import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
    return (
        <main>
            <Hero/>
            <Products
                products={[]}
                // currentPage={page ? +page : 1}
                // totalPages={Math.ceil(totalProducts / DEFAULT_PAGE_SIZE)}
            />
        </main>
    );
}
