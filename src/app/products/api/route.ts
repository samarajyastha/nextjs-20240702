import products from "../data";

export async function GET() {
  return Response.json(products);
}

export async function POST(request: Request) {
  const product = await request.json();

  products.push({ id: products.length + 1, ...product });

  return new Response(JSON.stringify(products), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
