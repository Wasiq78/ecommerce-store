import { createContext, useEffect, useState } from "react";

export const AuthContext  = createContext();

export const AuthProvider = ({children}) => {
     const storedAuth = localStorage.getItem("authState");
     const initialAuthState = storedAuth?JSON.parse(storedAuth) : {
        isAuthenticated: false,
        role: ''
     };

     const [authState, setAuthState] = useState(initialAuthState);
     useEffect(()=>{
        localStorage.setItem("authState", JSON.stringify(authState))
     },[authState])

     return(
        <AuthContext.Provider value={{authState, setAuthState}}>
            {children}
        </AuthContext.Provider>
     )
}

