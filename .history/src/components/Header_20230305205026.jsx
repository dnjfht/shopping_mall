import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-gray-300">
      <Link to="/" className="flex items-center text-4xl">
        <FiShoppingBag />
        <h1>Shopping Mall</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
