import axios from "axios";
import { useState, useCallback, useMemo } from "react";
import { Product } from "../model/Product";
import './ListProducts.css';
import { useNavigate } from "react-router-dom";
import ProductView from "./ProductView";
import { useTitle } from "../hooks/useTitle";
import { useProducts } from "../hooks/useProducts";

//const baseUrl = "http://localhost:9000/products";
const baseUrl = "http://localhost:9000/secure_products";
function ListProducts() {

    
    const {products, setProducts} = useProducts(baseUrl);
    const navigate = useNavigate();
    const [isMessageVisible, setMessageVisible] = useState(false);
    useTitle("Products");

    

    const deleteProduct = useCallback( async function deleteProduct(product: Product){

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

        } catch {

            alert("failed to delete product: " + product.id);
        }
    }, [products])

    const editProduct =  useCallback(function editProductImpl(product: Product){
        navigate(`/products/${product.id}`);
    }, [])

    const totalPrice = useMemo(() => {

        console.log("calculating prices...");
        let total = 0;
        products.forEach(p => {

            if(p.price)
                total += p.price;
        })

        return total

    }, [products])

    return (
        <div>
            <h3>Products</h3>
            <div>Total Price: {totalPrice}</div>
            {isMessageVisible ? 
                <div className="alert alert-info">Page to demonstarte component optimization</div>: null}

            <div>
                <button 
                    className="btn btn-info" 
                    onClick={() => setMessageVisible(isVisible => !isVisible)}>Hide/Show</button>
            </div>    


            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {
                    return (
                         <ProductView key={product.id} data={product} 
                                        onDelete={deleteProduct} onEdit={editProduct} />
                        
                        // <div key={product.id} className="product">
                        //     <p>Id: {product.id}</p>
                        //     <p>{product.name}</p>
                        //     <p>{product.description}</p>
                        //     <p>Price: {product.price}</p>
                        //     <div>
                        //         <button className="btn btn-warning" 
                        //                     onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                        //         <button className="btn btn-info" onClick={() => {editProduct(product)}}>Edit</button>
                        //     </div>
                        // </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProducts;