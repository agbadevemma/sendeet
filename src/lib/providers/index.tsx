"use client";

import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "./ReactQueryProvider";
import { Provider as ReduxProvider } from "react-redux";
import { useRef } from "react";
import { AppStore, makeStore } from "../store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return (
    <ReactQueryProvider>
      <ReduxProvider store={storeRef.current}>{children}</ReduxProvider>
      <ToastContainer className="toast-body" />
    </ReactQueryProvider>
  );
};

export default Providers;
