import React, { useState } from "react";

export default function NewProduct() {
  const [product, setProduct] = useState({});

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" name="file" />
      </form>
    </section>
  );
}
