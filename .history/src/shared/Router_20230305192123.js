import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "../pages/AllProducts";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import AllProducts from "../pages/ProductDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
