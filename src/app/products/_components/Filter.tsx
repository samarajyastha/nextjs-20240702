"use client";

import { setFilters, setLimit, setSort } from "@/redux/products/productSlice";
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

  function selectSort(sortBy: string) {
    dispatch(setSort(sortBy));
  }

  function filterByName(value: string) {
    if (value) {
      dispatch(setFilters({ name: value }));
    } else {
      dispatch(setFilters({}));
    }
  }

  function filterByCategory(value: string) {
    if (value) {
      dispatch(setFilters({ category: value }));
    } else {
      dispatch(setFilters({}));
    }
  }

  return (
    <div className="p-5 my-5 border border-dashed rounded-xl flex justify-start">
      <div className="mx-5">
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
      <div className="mx-5">
        <label htmlFor="sort">Sort By:</label>
        <select
          name="sort"
          id="sort"
          className="ml-3 border"
          onChange={(e) => selectSort(e.target.value)}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ price: 1 })}>Price: Ascending</option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: Descending
          </option>
        </select>
      </div>
      <div className="mx-5">
        <label htmlFor="filterByName">Name:</label>
        <input
          type="text"
          id="filterByName"
          className="ml-3 border px-1"
          value={query.filters?.name}
          onChange={(e) => filterByName(e.target.value)}
        />
      </div>
      <div className="mx-5">
        <label htmlFor="filterByCategory">Category:</label>
        <input
          type="text"
          id="filterByCategory"
          className="ml-3 border px-1"
          value={query.filters?.category}
          onChange={(e) => filterByCategory(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProductsFilter;
