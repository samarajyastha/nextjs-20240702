import React from "react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
};

type ProductsTableType = {
  products: Product[];
};

const ProductsTable = ({ products }: ProductsTableType) => {
  return (
    <table className="w-10/12 mx-auto mt-5 border rounded-2xl">
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
  );
};

export default ProductsTable;
