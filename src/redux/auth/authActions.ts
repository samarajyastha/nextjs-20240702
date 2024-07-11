import { login } from "@/api/auth";
import { LoginFormInput } from "@/types/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginFormInput, { rejectWithValue }) => {
    try {
      const response = await login(data);

      localStorage.setItem("authToken", response.data.token);

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

export { loginUser };
