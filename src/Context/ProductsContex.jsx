import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import productsData from '../../data/products'; 
import { AuthContext } from './AuthContext';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products] = useState(productsData); 
    const {authState} = useContext(AuthContext);
    const userRole = authState.role;

    const navigate = useNavigate();
    const handleProductDetails = (productId) => {
            navigate(`/${userRole}/product/${productId}`)
    }

    return (
        <ProductsContext.Provider value={{ products, handleProductDetails }}>
            {children}
        </ProductsContext.Provider>
    );
};
