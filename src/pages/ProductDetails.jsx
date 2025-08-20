import axios from "axios";
import ProductCard from "../component/ProductCard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const { id } = useParams();
   const[product,setProduct] =useState({});
    // 'https://dummyjson.com/products/1'

    useEffect(() => {
        async function fetchSingleProductByID() {
            try {
                const response = await axios.get(
                 `https://fakestoreapi.com/products/${id}`

                );
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleProductByID();
    }, [id]);

    return <div><ProductCard product={product} />
</div>;
};
export default ProductDetails;