import React from "react";

export const metadata = {
  title: "Product Page",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="text-center text-5xl my-8">Product page</div>
      {children}
    </>
  );
}
