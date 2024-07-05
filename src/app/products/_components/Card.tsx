import React from "react";

type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  if (!product?.name) throw new Error("Product not found!");

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
