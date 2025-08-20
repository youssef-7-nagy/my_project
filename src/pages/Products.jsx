import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import "./Products.css"

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data); // API returns an array directly
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="products">
      <h1>Products List</h1>
      <div className="container">
        {products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
