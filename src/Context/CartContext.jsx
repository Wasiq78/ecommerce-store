import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
          setCartItems(
            cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, quantity }]);
        }
      };

    return (
        <CartContext.Provider value={{cartItems, setCartItems, addToCart}}>{children}</CartContext.Provider>
    )
}