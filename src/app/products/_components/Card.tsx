"use client";

import { Product } from "@/types/product";
import headphone from "@/assets/images/headphone.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { remove } from "@/redux/products/productActions";
import Modal from "@/components/Modal";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const ProductCard = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  function onClick(id?: string) {
    router.push(`/products/${id}`);
  }

  function onDeleteProduct() {
    setIsOpen(true);
  }

  function onConfirmDelete() {
    dispatch(remove(product.id ?? ""));
  }

  if (!product?.name) throw new Error("Product not found!");

  return (
    <div className="py-5 h-full border border-dashed border-gray-800">
      <div className="flex justify-center mb-5">
        <Image
          src={headphone}
          alt=""
          height={200}
          className=""
          title={product.name}
        />
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
          onClick={onDeleteProduct}
        >
          <FaTrash />
        </button>
        <Modal
          title="Are you sure?"
          content={`Are you sure you want to delete ${product.name}?`}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          actions={
            <>
              <button
                className="rounded py-1 px-3 bg-slate-700 text-white"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded py-1 px-3 bg-red-500 text-white"
                onClick={onConfirmDelete}
              >
                Delete
              </button>
            </>
          }
        />
      </div>
    </div>
  );
};

export default ProductCard;
