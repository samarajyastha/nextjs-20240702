import { createSlice } from "@reduxjs/toolkit";
import { add, getAll, remove } from "./productActions";
import { Product } from "@/types/product";

type ProductState = {
  loading: boolean;
  error: string | null;
  products: Product[];
  deleteSuccess: boolean;
  addSuccess: boolean;
};

const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
  deleteSuccess: false,
  addSuccess: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetDeleteSuccess: (state) => {
      state.deleteSuccess = false;
    },
    resetAddSuccess: (state) => {
      state.addSuccess = false;
    },
  },
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
      })
      .addCase(remove.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteSuccess = true;
      })
      .addCase(remove.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(add.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(add.fulfilled, (state, action) => {
        state.loading = false;
        state.addSuccess = true;
      })
      .addCase(add.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetDeleteSuccess, resetAddSuccess } = productSlice.actions;

export default productSlice.reducer;
