import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AllRoutes from "./Routes/AppRoutes";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories/All";
import Kitchen from "./components/Categories/Kitchen";
import Furnitures from "./components/Categories/Furnitures";
import Electronics from "./components/Categories/Electronics";
import Lamps from "./components/Categories/Lamps";
import Chairs from "./components/Categories/Chairs";
import SkinCare from "./components/Categories/SkinCare";
import Product from "./pages/Product";

function App() {
  const location = useLocation();

  // Check if current path is "/"
  const showNavbar = location.pathname !== "/" && location.pathname !== "/signup";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
         {AllRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, childIndex) => (
              <Route key={childIndex} path={child.path} element={child.element}>
                {child.children?.map((subChild, subChildIndex) => (
                  <Route
                    key={subChildIndex}
                    path={subChild.path}
                    element={subChild.element}
                  />
                ))}
              </Route>
            ))}
          </Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
