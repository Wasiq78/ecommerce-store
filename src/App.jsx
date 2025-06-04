import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
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
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />}>
          <Route index element={<Navigate to="all" replace />} />
          <Route path="all" element={<All />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="skincare" element={<SkinCare />} />
        </Route>
        <Route path="/product/:productId" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
