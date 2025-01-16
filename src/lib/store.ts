import { configureStore } from "@reduxjs/toolkit";
import miscellaneousReducer from "../lib/slices/miscellaneousSlice";
import loadingReducer from "../lib/slices/loadingSlice";
import { authApi } from "./slices/authApi";
import { resetApi } from "./slices/resetApi";
import { campaignApi } from "./slices/campaign";
export const makeStore = () => {
  return configureStore({
    reducer: {
      miscellaneous: miscellaneousReducer,
      loading: loadingReducer,
      [authApi.reducerPath]: authApi.reducer,
      [resetApi.reducerPath]: resetApi.reducer,
      [campaignApi.reducerPath]: campaignApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware, resetApi.middleware, campaignApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
