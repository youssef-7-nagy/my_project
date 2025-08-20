import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
    const { products } = useSelector((state) => state.products);
  
    return (
        <div>
            {products.map((item, index) => {
                return <h1 key={index}>{item.title}</h1>
            })}
        </div>
    );
};
