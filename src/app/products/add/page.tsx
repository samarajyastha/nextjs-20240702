import React from "react";
import AddProductForm from "./_components/Form";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

export default function AddProduct() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center my-10">Add Product</h2>
      <div className="pb-32">
        <AddProductForm />
      </div>
      <ToastContainer />
    </div>
  );
}
