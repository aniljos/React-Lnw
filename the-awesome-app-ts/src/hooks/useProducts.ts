import { useEffect, useState } from "react";
import { Product } from "../model/Product";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { useNavigate } from "react-router-dom";

export function useProducts(url: string){

    const [products, setProducts] = useState<Product[]>([]);
    const auth = useSelector((state: AppState) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {

        fetchProducts();

    }, [])
    async function fetchProducts() {

        try {
            if(!auth.isAuthenticated){
                navigate("/login");
                return;
            }
            const headers = { "Authorization": `Bearer ${auth.accessToken}` };
            const response = await axios.get<Product[]>(url, {headers});
            console.log(response.data);
            setProducts(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    return {products, setProducts};
}