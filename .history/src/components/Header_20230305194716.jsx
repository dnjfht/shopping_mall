import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <FiShoppingBag />
        <h1>Shopping Mall</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
      </nav>
    </header>
  );
}
