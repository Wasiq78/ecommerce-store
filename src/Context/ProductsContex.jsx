import React, { createContext, useState } from 'react';
import productsData from '../../data/products'; 

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products] = useState(productsData); 

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};
