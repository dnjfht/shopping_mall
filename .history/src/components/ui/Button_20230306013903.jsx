import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button className="bg-brand" onClick={onClick}>
      {text}
    </button>
  );
}
