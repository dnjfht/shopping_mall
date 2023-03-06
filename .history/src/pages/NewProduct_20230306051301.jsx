import React, { useState } from "react";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleSubmit = (event) => {
    event.defaultPrevent();
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  console.log(product, file);
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        {/* required를 반드시 true라고 하여 무언가를 입력했을 때만 submit가
        되도록 */}
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          required
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
