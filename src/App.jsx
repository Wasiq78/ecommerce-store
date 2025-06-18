import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AllRoutes from "./Routes/AppRoutes";

function App() {
  const location = useLocation();

  // Don't show Navbar on "/", "/signup", or any path that starts with "/admin"
  const hideNavbarPaths = ["/", "/signup"];
  const isAdminRoute = location.pathname.startsWith("/admin");
  const showNavbar = !hideNavbarPaths.includes(location.pathname) && !isAdminRoute;

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
