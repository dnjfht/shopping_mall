import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../firebase";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], () => getProducts());
  return <div></div>;
}
