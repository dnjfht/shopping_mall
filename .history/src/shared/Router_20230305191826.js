import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AllProducts from "../pages/AllProducts";
import Auth from "../pages/Auth";
import Home from "../pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/AllProducts" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}
