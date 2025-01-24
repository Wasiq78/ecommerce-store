import { ProductsProvider } from "./ProductsContex";

export const AppProvider = ({children}) => {
    return (
        <ProductsProvider>
            {children}
        </ProductsProvider>
    )
}