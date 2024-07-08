import React from "react";
import Link from "next/link";
import { Product } from "@/types/product";

type ProductsTableType = {
  products: Product[];
};

const ProductsTable = ({ products }: ProductsTableType) => {
  return (
    <div className="w-10/12 mx-auto mt-5 px-8 py-5 border rounded-2xl">
      <table className="w-full">
        <thead>
          <tr>
            <th className="pt-3">Id</th>
            <th className="pt-3">Name</th>
            <th className="pt-3">Category</th>
            <th className="pt-3">Brand</th>
            <th className="pt-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="text-center px-3 py-1 hover:text-blue-500">
                <Link href={`/products/${product.id}`}>{product.id}</Link>
              </td>
              <td className="text-center px-3 py-1">{product.name}</td>
              <td className="text-center px-3 py-1">{product.category}</td>
              <td className="text-center px-3 py-1">{product.brand}</td>
              <td className="text-center px-3 py-1">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
