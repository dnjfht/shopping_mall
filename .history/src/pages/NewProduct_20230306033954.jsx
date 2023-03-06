import React, { useState } from "react";

export default function NewProduct() {
  const [product, setProduct] = useState({});

  const handleSubmit = (event) => {
    event.defaultPrevent();
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    console.log(name, value, files);
    setProduct((product)=> {
      ...product , [name]:value
    })
  };

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
      </form>
    </section>
  );
}
