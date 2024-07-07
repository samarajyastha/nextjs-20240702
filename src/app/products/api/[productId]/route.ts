import { NextRequest } from "next/server";
import products from "../../data";

export async function GET(
  request: Request,
  context: { params: { productId: number } }
) {
  const product = products.find(
    (product) => product.id === context.params.productId
  );

  return Response.json(product);
}

export async function PUT(
  request: Request,
  context: { params: { productId: number } }
) {
  const index = products.findIndex(
    (product) => product.id == context.params.productId
  );

  const data = await request.json();

  products[index] = { id: context.params.productId, ...data };

  return Response.json(products);
}

export async function DELETE(
  request: NextRequest,
  context: { params: { productId: number } }
) {
  // const headers = new Headers(request.headers);
  // const role = headers.get("role");

  const role = request.cookies.get("role");

  if (role?.value != "ADMIN")
    return new Response("Unauthorized", {
      status: 401,
    });

  const index = products.findIndex(
    (product) => product.id == context.params.productId
  );

  products.splice(index, 1);

  return Response.json(products);
}
