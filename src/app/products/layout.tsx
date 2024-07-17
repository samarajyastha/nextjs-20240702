import React from "react";
import iphone from "@/assets/images/iphone.png";
import Image from "next/image";

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
      <div className="container mx-auto">
        <div className="bg-black h-52 my-5 px-10 flex items-center justify-evenly">
          <h2 className="text-white text-3xl font-semibold">
            Save upto <span className="text-5xl">60%</span>
            <p>
              <span className="text-white text-lg mr-3">Buy More</span>
              <span className="text-yellow-500 text-lg">Save More</span>
            </p>
          </h2>
          <Image src={iphone} alt="" height={200} className="" />
        </div>
      </div>
      {children}
    </>
  );
}
