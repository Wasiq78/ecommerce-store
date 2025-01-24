import React, { createContext, useState } from 'react';
import productsData from '../../data/products'; // Import your products data

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products] = useState(productsData); // Set initial state

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};
