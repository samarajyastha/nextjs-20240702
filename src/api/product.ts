import config from "@/config";
import { Product } from "@/types/product";
import axios, { AxiosError, AxiosResponse } from "axios";

const getAllProducts = async () => {
  const products = await axios.get(`${config.apiUrl}/api/products?limit=50`);

  return products;
};

const getProductById = async (id: string) => {
  const product = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return product;
};

const addProduct = async (data: Product) => {
  const token = localStorage.getItem("authToken");

  const products = await axios.post(`${config.apiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return products;
};

const deleteProduct = async (id: string) => {
  const token = localStorage.getItem("authToken");

  const product = await axios.delete(`${config.apiUrl}/api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return product;
};

export { getAllProducts, getProductById, addProduct, deleteProduct };
