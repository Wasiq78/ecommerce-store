import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productsData from '../../data/products'; 

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products] = useState(productsData); 

    const navigate = useNavigate();
    const handleProductDetails = (productId) => {
            navigate(`/product/${productId}`)
    }

    return (
        <ProductsContext.Provider value={{ products, handleProductDetails }}>
            {children}
        </ProductsContext.Provider>
    );
};
