import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import ProductCard from "../_components/Card";
import { getProductById } from "@/api/product";

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
    <div className="container p-10">
      <ProductCard product={product} />
    </div>
  );
}
