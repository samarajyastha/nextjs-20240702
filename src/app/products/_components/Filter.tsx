"use client";

import { setLimit } from "@/redux/products/productSlice";
import { RootState } from "@/redux/rootReducer";
import { AppDispatch } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ProductsFilter = () => {
  const { query } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch<AppDispatch>();

  function selectLimit(limit: string) {
    dispatch(setLimit(limit));
  }

  return (
    <div className="p-5 my-5 border border-dashed rounded-xl">
      <div>
        <label htmlFor="limit">Limit:</label>
        <select
          name="limit"
          id="limit"
          className="ml-3 border"
          value={query.limit}
          onChange={(e) => selectLimit(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsFilter;
