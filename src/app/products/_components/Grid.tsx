"use client";
import React, { useEffect } from "react";
import ProductCard from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "@/redux/products/productActions";
import { AppDispatch } from "@/redux/store";
import ProductsLoading from "../loading";
import { toast, ToastContainer } from "react-toastify";
import { resetDeleteSuccess } from "@/redux/products/productSlice";
import { RootState } from "@/redux/rootReducer";

const ProductsGrid = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, products, error, deleteSuccess } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch, deleteSuccess]);

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 1500 });
    }

    if (deleteSuccess) {
      toast.success("Product deleted successfully.", {
        autoClose: 1500,
        onClose: () => dispatch(resetDeleteSuccess()),
      });
    }
  }, [error, deleteSuccess, dispatch]);

  if (loading) <ProductsLoading />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <ToastContainer />
    </div>
  );
};

export default ProductsGrid;
