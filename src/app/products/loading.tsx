import React from "react";
import ProductsLoadingCard from "./_components/LoadingCard";

export default function ProductsLoading() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
        <ProductsLoadingCard />
      </div>
    </div>
  );
}
