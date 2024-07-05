import React from "react";
import products from "../data";

const ProductCard = ({ id }: { id: string }) => {
  const product = products.find((product) => product.id === id);

  return (
    <div className="px-8 py-5 rounded-2xl shadow bg-slate-100 max-w-fit">
      <p>Name: {product?.name}</p>
      <p>Brand: {product?.brand}</p>
      <p>Category: {product?.category}</p>
      <p>Price: {product?.price}</p>
    </div>
  );
};

export default ProductCard;
