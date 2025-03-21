"use client";

import useLogout from "@/hooks/useLogout";
import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

const organizationWithAuth = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WrappedComponent = (props: P) => {
    const currentPathname = usePathname();
    const { handleLogout } = useLogout({ role: "organization" });
    const router = useRouter();

    useEffect(() => {
      const token = secureLocalStorage.getItem("organizationToken");

      if (!token) {
        handleLogout();
      }
      if (token && currentPathname === "/login") {
        router.push("/dashboard");
      }
    }, [currentPathname]);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `WithAuth(${
    Component.displayName || Component.name
  })`;

  return WrappedComponent;
};

export default organizationWithAuth;
