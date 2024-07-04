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
      <div>Product page</div>
      {children}
    </>
  );
}
