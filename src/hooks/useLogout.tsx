import SuccessToast2 from "@/components/SuccessToast2";
import { useLogoutMutation } from "@/lib/slices/authApi";
import { useRouter } from "next/navigation";
import React from "react";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";

const useLogout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    secureLocalStorage.removeItem("")
    router.push("/login");
  };
  return {
    handleLogout,
  };
};

export default useLogout;
