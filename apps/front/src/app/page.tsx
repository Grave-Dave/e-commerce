import Hero from "@/components/Hero";
import Products from "@/components/Products";
import {fetchProducts} from "@/lib/actions/postActions";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export default async function Home({searchParams}: Props) {
    const {page} = await searchParams;
    const {products} = await fetchProducts(
        {
            page: page ? +page : undefined
        }
    )

    return (
        <main>
            <Hero/>
            <Products
                products={products}
                // currentPage={page ? +page : 1}
                // totalPages={Math.ceil(totalProducts / DEFAULT_PAGE_SIZE)}
            />
        </main>
    );
}
