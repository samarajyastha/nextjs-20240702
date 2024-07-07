export async function GET() {
  return new Response("<h1>Hello world</h1>", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
