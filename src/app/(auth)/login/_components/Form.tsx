"use client";

import { LoginFormInput } from "@/types/auth";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { loginUser } from "@/redux/auth/authActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<LoginFormInput>();
  const { errors } = formState;

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  async function onSubmit(data: LoginFormInput) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

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
        {loading ? "Submitting..." : "Login"}
      </button>
      {error ? <p className="text-red-500 mt-2 text-center">{error}</p> : null}
    </form>
  );
};

export default LoginForm;
