import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import All from "./components/Categories/All";
import Kitchen from "./components/Categories/Kitchen";
import Furnitures from "./components/Categories/Furnitures";
import Electronics from "./components/Categories/Electronics";
import Lamps from "./components/Categories/Lamps";
import Chairs from "./components/Categories/Chairs";
import SkinCare from "./components/Categories/SkinCare";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="all" element={<All />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="skincare" element={<SkinCare />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
