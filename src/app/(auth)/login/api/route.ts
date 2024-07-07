import { cookies } from "next/headers";

export async function POST(request: Request) {
  const response = { status: "OK" };

  cookies().set("role", "USER");

  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json",
      //   "Set-Cookie": "role=ADMIN",
    },
  });
}
