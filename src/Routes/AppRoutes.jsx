import { Navigate } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../pages/Home";
import AdminHome from "../pages/Admin/AdminHome";
import Categories from "../pages/Categories";
import Product from "../pages/Product";
import All from "../components/Categories/All";
import Chairs from "../components/Categories/Chairs";
import Electronics from "../components/Categories/Electronics";
import Furnitures from "../components/Categories/Furnitures";
import Kitchen from "../components/Categories/Kitchen";
import Lamps from "../components/Categories/Lamps";
import SkinCare from "../components/Categories/SkinCare";

export const PublicRoutes = [
  {
    path: "/singup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Login />,
  },
];

const AdminRoutes = [
  {
    path: "/admin",
    element: <ProtectedRoutes allowedRoles={["Admin", "admin"]} />,
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
    ],
  },
];

const UserRoutes = [
  {
    path: "/user",
    element: <ProtectedRoutes allowedRoles={["user", "User"]} />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      { 
        path: "product/:productId",
        element: <Product />
      },
      {
        path: "categories",
        element: <Categories />,
        children: [
              { path: "", element: <Navigate to="all" replace /> }, // Redirect empty path to "all"
    { path: "all", element: <All /> },
          { path: "chairs", element: <Chairs /> },
          { path: "electronics", element: <Electronics /> },
          { path: "furnitures", element: <Furnitures /> },
          { path: "kitchen", element: <Kitchen /> },
          { path: "lamps", element: <Lamps /> },
          { path: "skin-care", element: <SkinCare /> },
        ],
      },
    ],
  },
];

const AllRoutes = [...PublicRoutes, ...UserRoutes, ...AdminRoutes];

export default AllRoutes;
