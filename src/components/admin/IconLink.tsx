import ChevronDown from "@/icons/cheveron-down";
import ChevronUp from "@/icons/cheveron-up";
import Link from "next/link";
import { usePathname } from "next/navigation";

const IconLink = ({
  href,
  IconComponent,
  label,
  onClick,
  isOpenDropDown,
}: {
  href: string;
  IconComponent: React.ComponentType<{
    color: string;
    height: number;
    width: number;
  }>;
  label: string;
  isOpenDropDown?: boolean;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive =
    href === "/admin/dashboard"
      ? pathname === href
      : href === "/admin/dashboard/usermanagement"
      ? pathname.startsWith(href)
      : ""; // Updated to use startsWith
  // Base route for User Management
  const baseRoute: string = "/admin/dashboard/usermanagement/audience";
  // Check if the current pathname matches the base route
  const isUserManagementPage = pathname?.startsWith(baseRoute);

  const isUserManagementWithId =
    pathname?.startsWith("/admin/dashboard/usermanagement/audience") &&
    pathname !== "/admin/dashboard/usermanagement/audience";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`w-full ${
        isActive 
          ? " text-white bg-[#1D2739]"
          : "hover:bg-[#1D2739] ease-in-out duration-500 text-gray-50"
      } cursor-pointer rounded-lg  justify-between py-3 px-2 flex items-center text-white`}
    >
      <div className="gap-3 flex items-center">
        {" "}
        <IconComponent
          color={isUserManagementWithId ? "" : "#F0F1F3"}
          height={20}
          width={20}
        />
        <span className="text-[13px] whitespace-nowrap">{label}</span>
      </div>
      {href === "/admin/dashboard/usermanagement" && (
        <div className="">
          {" "}
          {isOpenDropDown ? (
            <ChevronUp color="#F0F1F3" height={20} width={20} />
          ) : (
            <ChevronDown color="#F0F1F3" height={20} width={20} />
          )}
        </div>
      )}
    </Link>
  );
};
export default IconLink;
