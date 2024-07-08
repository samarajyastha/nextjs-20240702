"use client";

import { Product } from "@/types/product";
import React from "react";
import ProductCard from "./Card";
import { useRouter } from "next/navigation";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  const router = useRouter();

  function onClick(id: string) {
    router.push(`/products/${id}`);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onClick(product.id)}
          className="cursor-pointer"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
