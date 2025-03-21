import SuccessToast2 from "@/components/SuccessToast2";
import { useLogoutMutation } from "@/lib/slices/authApi";
import { useRouter } from "next/navigation";
import React from "react";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";

type Props = {
  role?: string;
};
const useLogout = ({ role = "" }: Props) => {
  const router = useRouter();
  const handleLogout = async () => {
    if (role == "admin") {
      secureLocalStorage.removeItem("adminToken");
      router.replace("/admin/login");
    } else {
      secureLocalStorage.removeItem("organizationToken");
      router.replace("/login");
    }
  };
  return {
    handleLogout,
  };
};

export default useLogout;
