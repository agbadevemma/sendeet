
import AdminOrganizationLayout from "@/components/admin/AdminOrganizationLayout";

type LayoutProps = {
  children: React.ReactNode;
};
const layout: React.FC<LayoutProps> = ({ children }) => {
  return <AdminOrganizationLayout>{children}</AdminOrganizationLayout>;
};

export default layout;

