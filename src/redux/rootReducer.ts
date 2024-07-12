import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import productReducer from "./products/productSlice";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
