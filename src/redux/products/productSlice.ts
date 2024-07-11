import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "./productActions";
import { Product } from "@/types/product";

type ProductState = {
  loading: boolean;
  error: string | null;
  products: Product[];
};

const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
