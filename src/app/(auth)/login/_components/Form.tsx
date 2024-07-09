"use client";

import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { LoginFormInput } from "@/types/auth";
import { login } from "@/api/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [error, setError] = useState<string>();

  const { register, handleSubmit, formState } = useForm<LoginFormInput>();
  const { errors } = formState;

  const router = useRouter();

  async function onSubmit(data: LoginFormInput) {
    try {
      const response = await login(data);

      localStorage.setItem("authToken", response.data.token);

      router.push("/");
    } catch (error) {
      const resError = error as unknown as AxiosError;

      setError(resError.response?.data as string);
    }
  }

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    const isAuthenticated = authToken ? true : false;

    if (isAuthenticated) router.push("/");
  }, [router]);

  return (
    <form className="w-1/2 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded py-3 px-3 border"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required.",
            },
          })}
        />
        <p className="text-red-500 mt-2 ml-2">{errors.email?.message}</p>
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded py-3 px-3 border"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required.",
            },
          })}
        />
        <p className="text-red-500 mt-2 ml-2">{errors.password?.message}</p>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-slate-700 rounded p-3 transition hover:bg-opacity-90"
      >
        Login
      </button>
      {error ? <p className="text-red-500 mt-2 text-center">{error}</p> : null}
    </form>
  );
};

export default LoginForm;
