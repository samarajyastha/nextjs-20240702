import { addProduct, deleteProduct, getAllProducts } from "@/api/product";
import { Product, ProductsQuery } from "@/types/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const getAll = createAsyncThunk(
  "products/all",
  async (query: ProductsQuery, { rejectWithValue }) => {
    try {
      const response = await getAllProducts(query);

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const remove = createAsyncThunk(
  "products/remove",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteProduct(id);

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const add = createAsyncThunk(
  "products/add",
  async (data: Product, { rejectWithValue }) => {
    try {
      const response = await addProduct(data);

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

export { getAll, remove, add };
