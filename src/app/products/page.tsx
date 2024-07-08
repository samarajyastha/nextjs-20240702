import { getAllProducts } from "@/api/product";
import ProductsTable from "./_components/Table";
import ProductsGrid from "./_components/Grid";

export default async function ProductPage() {
  const products = await getAllProducts();

  return (
    <div className="container mx-auto">
      {/* <ProductsTable products={products} /> */}
      <ProductsGrid products={products} />
    </div>
  );
}
