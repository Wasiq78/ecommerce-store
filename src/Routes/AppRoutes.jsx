import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../pages/Home";
import AdminHome from "../pages/Admin/AdminHome";

export const PublicRoutes = [
    {
        path: "/singup",
        element: <SignUp />
    },
    {
        path: "/",
        element: <Login />
    }
]

const AdminRoutes = [
    {
        path: "/admin",
        element: <ProtectedRoutes allowedRoles={["Admin", "admin"]} />,
        children: [
            {
            path: "home",
            element: <AdminHome />
            }
        ]
    }
]

const UserRoutes = [
    {
        path: "/user",
        element: <ProtectedRoutes allowedRoles={["user", "User"]} />,
        children: [
            {
                path: "home",
                element: <Home />
            }
        ]
    }
]

const AllRoutes = [
    ...PublicRoutes,
    ...UserRoutes,
    ...AdminRoutes
]

export default AllRoutes;