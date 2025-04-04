import { Product } from "@/model/Product";
import Link from "next/link";

export default async function ListProductsPage() {

    //api call to get the products
    const url = "http://localhost:9000/products";
    //const response = await fetch(url, {method: "GET"});
    const response = await fetch(url, {cache: "no-store"});
    const products = await response.json() as Product[];


    return (
        <div>
            <h3>List Products</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td><Link href={`/products/${product.id}`}> {product.name}</Link></td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            
        </div>
    )
}