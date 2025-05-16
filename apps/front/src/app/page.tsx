import Hero from "@/components/Hero";
import {fetchProducts} from "@/lib/actions/postActions";
import RandomProducts from "@/components/RandomProducts";

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
    
    // const session = await getSession()
    //
    // console.log({session})


    return (
        <main>
            <Hero/>
            <RandomProducts products={products}/>
        </main>
    );
}
