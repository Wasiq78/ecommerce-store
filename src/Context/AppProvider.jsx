import { ProductsProvider } from "./ProductsContex";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";

export const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>{children}</CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </UserProvider>
  );
};
