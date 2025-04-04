import { Product } from "@/model/Product";
import Link from "next/link";

type ProductViewPageProps = {
    params: Promise<{id: number}>
}

export default async function ProductViewPage(props: ProductViewPageProps) {

    const {id} = await props.params;
    const url = "http://localhost:9000/products/" + id;
    const response = await fetch(url);
    const product = await response.json() as Product;

    return (
        <div>
            <h4>Product View: {id}</h4>
            <p>Id: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <br />
            <div>
                <Link href="/products">Back</Link>
            </div>
        </div>
    )
}
