import React from "react";
import AddProductForm from "./_components/Form";
import { ToastContainer } from "react-toastify";

export default function AddProduct() {
  return (
    <div className="container mx-auto">
      <AddProductForm />
      <ToastContainer />
    </div>
  );
}
