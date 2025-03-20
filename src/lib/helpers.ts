export const getOrganizationAccessToken = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("organization_access_token")) {
      try {
        return localStorage.getItem("organization_access_token");
      } catch (error) {
        return undefined;
      }
    }
  }
};


export const getAdminAccessToken = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("admin_access_token")) {
      try {
        return localStorage.getItem("admin_access_token");
      } catch (error) {
        return undefined;
      }
    }
  }
};


export const adminLogOut = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_access_token");
    window.location.href = "/";
  }
};



export const organizationLogOut = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("organization_access_token");
    window.location.href = "/";
  }
};
