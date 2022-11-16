import Link from "next/link";

export default function Product () {
    return (
        <>
            <h1>
                <Link href='/product/1'>
                    Product One
                </Link>
            </h1>
            <h2>
                <Link href='/product/2'>
                    Product Two
                </Link>
            </h2>
            <h3>
                <Link href='/product/3' replace>
                    Product Three
                </Link>
            </h3>
        </>
    )
}