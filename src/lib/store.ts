import { configureStore } from "@reduxjs/toolkit";
import miscellaneousReducer from "../lib/slices/miscellaneousSlice";
import { authApi } from "./slices/authApi";
export const makeStore = () => {
  return configureStore({
    reducer: {
      miscellaneous: miscellaneousReducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
