import DashboardOrganizationLayout from "@/components/DashboardOrganizationLayout";
type LayoutProps = {
  children: React.ReactNode;
};
const layout: React.FC<LayoutProps> = ({ children }) => {
  return <DashboardOrganizationLayout>{children}</DashboardOrganizationLayout>;
};

export default layout;
