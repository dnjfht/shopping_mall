import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "../pages/AllProducts";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import NewProduct from "../pages/NewProduct";
import MyCart from "../pages/MyCart";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/carts" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
}
