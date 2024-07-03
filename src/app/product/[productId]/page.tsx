import { notFound } from "next/navigation";
import React from "react";

type ProductByIdType = { params: { productId: number } };

export default function ProductById(props: ProductByIdType) {
  if (props.params.productId > 1000) {
    notFound();
  }

  return <div>Product of id: {props.params.productId}</div>;
}
