import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
   const storedUser = localStorage.getItem("userState");
   const initialUserState = storedUser? JSON.parse(storedUser) : {
     userId : '',
     name : '',
     email : '',
     role: ''
   }

   const [userState, setUserState] = useState(initialUserState);
   useEffect(()=> {
    localStorage.setItem("userState", JSON.stringify(userState))
   },[userState])

   return(
    <UserContext.Provider value={{userState, setUserState}}>
        {children}
    </UserContext.Provider>
   )
}

