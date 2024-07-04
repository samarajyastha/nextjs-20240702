import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import ProductCard from "../_components/Card";

type ProductByIdType = { params: { productId: string } };

export const generateMetadata = (props: ProductByIdType): Metadata => {
  return {
    title: `Product ${props.params.productId}`,
  };
};

export default function ProductById(props: ProductByIdType) {
  // if (props.params.productId > 1000) {
  //   notFound();
  // }

  return (
    <div className="container p-10">
      <ProductCard id={props.params.productId} />
    </div>
  );
}
