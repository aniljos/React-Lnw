import { Product } from "@/model/Product";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProductsPage(){

    await new Promise(resolve => setTimeout(resolve, 5000));
    return (
        <div>
            <h2>Products page</h2>
            <p>This is a server component with streaming ans suspense</p>

            <Suspense fallback={<div className="alert alert-warning">Loading products...</div>}>
                <ListProductsPage/>
            </Suspense>
           
        </div>
    )
}


async function ListProductsPage() {

    await new Promise(resolve => setTimeout(resolve, 10000));
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