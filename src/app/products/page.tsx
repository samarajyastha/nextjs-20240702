import ProductsGrid from "./_components/Grid";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default async function ProductPage() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-end my-3">
        <Link
          href={"/products/add"}
          className="bg-slate-700 text-white rounded px-3 py-1"
        >
          Add Product +
        </Link>
      </div>
      <ProductsGrid />
      <ToastContainer />
    </div>
  );
}
