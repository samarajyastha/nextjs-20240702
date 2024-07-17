"use client";
import { RootState } from "@/redux/rootReducer";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import iphone from "@/assets/images/iphone.png";
import Link from "next/link";

const Hero = () => {
  const { loading, user } = useSelector((state: RootState) => state.auth);

  if (loading) return <>Loading...</>;

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        {/* <h1 className="text-center text-3xl font-semibold text-slate-700 mt-8">
        Welcome {user?.name}
      </h1> */}

        <div className="flex items-center justify-evenly py-28">
          <Image src={iphone} alt="iphone" />
          <div className="w-1/3">
            <span className="ml-2 text-gray-500">Black friday coming soon</span>
            <h1 className="text-7xl font-bold uppercase">Up to 50% off</h1>
            <p className="my-5 ml-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              iusto quisquam voluptas nemo. Nobis mollitia quaerat alias,
              distinctio
            </p>

            <div className="ml-2 pt-5">
              <Link
                href={"/products"}
                className="text-white bg-black uppercase px-5 py-2"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
