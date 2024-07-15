import ProductsGrid from "./_components/Grid";
import Link from "next/link";
import AuthLayout from "../../layouts/AuthLayout";
import ProductsFilter from "./_components/Filter";

export default async function ProductPage() {
  return (
    <AuthLayout>
      <div className="container mx-auto">
        <div className="flex justify-end my-3">
          <Link
            href={"/products/add"}
            className="bg-slate-700 text-white rounded px-3 py-1"
          >
            Add Product +
          </Link>
        </div>
        <ProductsFilter />
        <ProductsGrid />
      </div>
    </AuthLayout>
  );
}
