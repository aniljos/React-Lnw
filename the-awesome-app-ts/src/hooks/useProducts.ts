import { useEffect, useState } from "react";
import { Product } from "../model/Product";
import axios from "axios";
export function useProducts(url: string){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetchProducts();

    }, [])
    async function fetchProducts() {

        try {
            const response = await axios.get<Product[]>(url);
            console.log(response.data);
            setProducts(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    return {products, setProducts};
}