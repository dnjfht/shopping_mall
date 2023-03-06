import React from "react";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return <li>{title}</li>;
}
