import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";
import { addNewProduct } from "../firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  // 업로드 중인지 아닌지
  const [success, setSuccess] = useState();
  // 업로드를 성공했을 때 메시지 띄우기

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsUploading(true);

    uploadImage(file)
      .then((url) => {
        console.log(url);
        addNewProduct(product, url).then(() => {
          setSuccess("성공적으로 제품이 추가되었습니다.");
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
        // Firebase에 새로운 제품을 추가함
        // 제품의 사진을 Cloudinary에 업로드하고 URL을 획득
      })
      .finally(() => setIsUploading(false));
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
    <section className="w-full text-center">
      <h2 className="text-xl font-bold">새로운 제품 등록</h2>

      {success && <p>💖{success}</p>}
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
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
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="옵션들(콤마(,)로 구분)"
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? "업로드중..." : "제품 등록하기"}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
