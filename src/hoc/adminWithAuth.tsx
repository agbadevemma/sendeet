"use client";

import useLogout from "@/hooks/useLogout";
import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

const adminWithAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent = (props: P) => {
    const currentPathname = usePathname();
    const { handleLogout } = useLogout({role:"admin"});
    const router = useRouter();

    useEffect(() => {
      const token = secureLocalStorage.getItem("adminToken");
      if (!token) {
        handleLogout();
      }
      if (token && currentPathname === "/admin/login") {
        router.push("/admin/dashboard");
      }
    }, [currentPathname]);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `WithAuth(${
    Component.displayName || Component.name
  })`;

  return WrappedComponent;
};

export default adminWithAuth;
