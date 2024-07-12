"use client";
import { RootState } from "@/redux/rootReducer";
import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const { loading, user } = useSelector((state: RootState) => state.auth);

  if (loading) return <>Loading...</>;

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-semibold text-slate-700 mt-8">
        Welcome {user?.name}
      </h1>
    </div>
  );
};

export default Hero;
