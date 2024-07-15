"use client";

import { add } from "@/redux/products/productActions";
import { resetAddSuccess } from "@/redux/products/productSlice";
import { RootState } from "@/redux/rootReducer";
import { AppDispatch } from "@/redux/store";
import { Product } from "@/types/product";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddProductForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<Product>();

  const { errors } = formState;

  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, addSuccess } = useSelector(
    (state: RootState) => state.product
  );

  function onSubmit(data: Product) {
    dispatch(add(data));
  }

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 1500 });
    }

    if (addSuccess) {
      toast.success("Product added successfully.", {
        autoClose: 1500,
        onClose: () => dispatch(resetAddSuccess()),
      });

      reset();
    }
  }, [dispatch, addSuccess, error, reset]);

  return (
    <form
      className="mx-auto mt-16 max-w-xl sm:mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              {...register("name", {
                required: "Product name is required.",
              })}
            />
          </div>
          <p className="text-red-500 mt-2 ml-2">{errors.name?.message}</p>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="category"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Category
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="category"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              {...register("category", {
                required: "Category is required.",
              })}
            />
          </div>
          <p className="text-red-500 mt-2 ml-2">{errors.category?.message}</p>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="brand"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Brand
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="brand"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              {...register("brand", {
                required: "Brand name is required.",
              })}
            />
          </div>
          <p className="text-red-500 mt-2 ml-2">{errors.brand?.message}</p>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="price"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Price
          </label>
          <div className="mt-2.5">
            <input
              type="number"
              id="price"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              {...register("price", {
                required: "Price is required.",
              })}
            />
          </div>
          <p className="text-red-500 mt-2 ml-2">{errors.price?.message}</p>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
