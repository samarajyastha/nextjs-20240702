import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-slate-700 font-semibold text-3xl">
        Login
      </h1>
      <div className="flex justify-center">
        <form className="w-1/2 mt-10">
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email address"
              className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
            />
          </div>
          <button
            type="submit"
            className="
                  w-full
                  text-white
                  bg-slate-700
                  rounded
                  p-3
                  transition
                  hover:bg-opacity-90
                  "
          >
            Login
          </button>
        </form>
      </div>
      <div className="mt-5 text-center">
        Does not have an account?
        <Link href={"/register"} className="text-blue-700 ml-2">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
