import Link from "next/link";
import React from "react";
import LoginForm from "./_components/Form";

export default function Login() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-slate-700 font-semibold text-3xl">
        Login
      </h1>
      <div className="flex justify-center">
        <LoginForm />
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
