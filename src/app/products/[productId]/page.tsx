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

async function getProductById(id: string) {
  const products = await fetch(`http://localhost:5000/api/products/${id}`).then(
    (data) => data.json()
  );

  return products;
}

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
