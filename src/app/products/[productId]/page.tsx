import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import ProductCard from "../_components/Card";
import { getProductById } from "@/api/product";
import Image from "next/image";
import headphone from "@/assets/images/headphone.jpg";
import { FaStar, FaStarHalf } from "react-icons/fa";

type ProductByIdType = { params: { productId: string } };

export const generateMetadata = (props: ProductByIdType): Metadata => {
  return {
    title: `Product ${props.params.productId}`,
  };
};

export default async function ProductById(props: ProductByIdType) {
  // if (props.params.productId > 1000) {
  //   notFound();
  // }

  const product = await getProductById(props.params.productId);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center items-center">
        <div className="w-1/2 flex justify-center p-5">
          <Image src={headphone} alt="" className="w-2/3 h-auto border p-5" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.brand}</p>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo modi
            recusandae doloribus dolorum in et vitae tempore! Accusantium magni
            dolores recusandae dolorum quidem iure nemo cupiditate numquam
            consequatur, deserunt, ipsum incidunt vitae, exercitationem
            consectetur saepe cumque quod. Commodi accusantium aliquid, in
            nesciunt, maxime rerum illum earum nostrum atque quam suscipit.
          </p>
          <h3 className="text-3xl my-8 text-red-500">
            ${product.price}
            <span className="text-xl text-black ml-3 line-through">
              ${product.price / 0.8}
            </span>
          </h3>
          <hr />
          <div className="pt-8  flex">
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStarHalf className="text-xl text-yellow-500" />

            <p>| 215 Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
