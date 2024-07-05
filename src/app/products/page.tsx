import ProductsTable from "./_components/Table";

async function getAllProducts() {
  const products = await fetch("http://localhost:3000/products/api").then(
    (data) => data.json()
  );

  return products;
}

export default async function ProductPage() {
  const products = await getAllProducts();

  return (
    <div className="container">
      <ProductsTable products={products} />
    </div>
  );
}
