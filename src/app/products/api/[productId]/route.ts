import products from "../../data";

export async function GET(
  request: Request,
  context: { params: { productId: string } }
) {
  const product = products.find(
    (product) => product.id === context.params.productId
  );

  return Response.json(product);
}
