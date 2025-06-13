import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

function ProtectedRoutes ({allowedRoles}){
    const {authState} = useContext(AuthContext);
    if(!authState?.isAuthenticated){
         return <Navigate to="/" />
    }
    if(!allowedRoles.includes(authState.role)){
        return <Navigate to="/unauthorized" />
    }

    return <Outlet />
}
export default ProtectedRoutes