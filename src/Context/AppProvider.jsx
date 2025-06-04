import { ProductsProvider } from "./ProductsContex";
import { CartProvider } from "./CartContext";

export const AppProvider = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};
