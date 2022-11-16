import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductDetails () {
    // Invoke hook
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <>
            <h1>
                About Product Details - {productId}
            </h1>
            <Link href='/product'>
                Back To Products Listing Page 
            </Link>
        </>
        
    )
}