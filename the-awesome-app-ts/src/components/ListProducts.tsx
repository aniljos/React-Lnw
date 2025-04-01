import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../model/Product";
import './ListProducts.css';

const baseUrl = "http://localhost:9000/products";
function ListProducts() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetchProducts();

    }, [])
    async function fetchProducts() {
        try {

            const response = await axios.get<Product[]>(baseUrl);
            console.log(response.data);
            setProducts(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    async function deleteProduct(product: Product){

        try {
            const url = baseUrl + "/" + product.id;
            await axios.delete(url);
            //await fetchProducts();
            //copy of products(state)
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index !== -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }

            alert("Deleted product: " + product.id);

        } catch (error) {

            alert("failed to delete product: " + product.id);
        }

    }

    return (
        <div>
            <h3>Products</h3>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {
                    return (
                        <div key={product.id} className="product">
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                            <div>
                                <button className="btn btn-warning" 
                                            onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                                <button className="btn btn-info">Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProducts;