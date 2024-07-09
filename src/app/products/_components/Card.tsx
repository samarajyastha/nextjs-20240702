import { Product } from "@/types/product";
import React from "react";
import headphone from "@/assets/images/headphone.jpg";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  if (!product?.name) throw new Error("Product not found!");

  return (
    <div className="py-5 h-full border border-dashed border-gray-800">
      <div className="flex justify-center mb-5">
        <Image src={headphone} alt="" height={200} className="" />
      </div>
      <p className="text-center font-semibold text-lg">$ {product?.price}</p>
      <p className="text-center font-semibold text-xl">{product?.name}</p>
      <p className="text-center">{product?.brand}</p>
      <p className="text-center">{product?.category}</p>
      <div className="text-center mt-3">
        <button className="bg-black text-white px-3 py-1 ">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
