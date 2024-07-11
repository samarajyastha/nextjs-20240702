"use client";

import { Product } from "@/types/product";
import React from "react";
import headphone from "@/assets/images/headphone.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { deleteProduct } from "@/api/product";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  function onClick(id?: string) {
    router.push(`/products/${id}`);
  }

  async function onDeleteProduct(id?: string) {
    try {
      await deleteProduct(id);

      toast("Product deleted successfully.", {
        autoClose: 1500,
        type: "success",
      });

      router.refresh();
    } catch (error) {
      toast(error?.response?.data, {
        autoClose: 1500,
        type: "error",
      });

      console.log(error);
    }
  }

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
      <div className="flex justify-around items-center mt-3">
        <button
          className="bg-black text-white px-3 py-1"
          onClick={() => onClick(product?.id)}
        >
          Buy Now
        </button>
        <button
          className="bg-red-500 p-2 rounded text-white"
          onClick={() => onDeleteProduct(product.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
