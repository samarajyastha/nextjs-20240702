import { Product } from "@/types/product";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  if (!product?.name) throw new Error("Product not found!");

  return (
    <div className="px-8 py-5 rounded-2xl shadow bg-slate-100 h-full">
      <p>Name: {product?.name}</p>
      <p>Brand: {product?.brand}</p>
      <p>Category: {product?.category}</p>
      <p>Price: {product?.price}</p>
    </div>
  );
};

export default ProductCard;
