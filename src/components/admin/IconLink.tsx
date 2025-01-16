import ChevronDown from "@/icons/cheveron-down";
import ChevronUp from "@/icons/cheveron-up";
import Link from "next/link";
import { usePathname } from "next/navigation";

const IconLink = ({
  href,
  IconComponent,
  label,
  onClick,
  route = true,
  subroute = false,
  isOpenDropDown,
}: {
  href: string;
  IconComponent: React.ComponentType<{
    color: string;
    height: number;
    width: number;
  }>;
  label: string;
  route?: boolean;
  subroute?: boolean;
  isOpenDropDown?: boolean;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive =
    href === "/admin/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`w-full ${
        isActive && route
          ? " text-white bg-[#1D2739]"
          : " ease-in-out duration-500 text-gray-50"
      } cursor-pointer rounded-lg  justify-between py-3 px-2 flex items-center text-white`}
    >
      <div className="gap-3 flex items-center">
        {" "}
        <IconComponent
          color={subroute ? "" : "#F0F1F3"}
          height={20}
          width={20}
        />
        <span className="text-[13px] whitespace-nowrap">{label}</span>
      </div>
      {!route && (
        <div
          className={` transition-transform duration-500 ${
            isOpenDropDown ? "transform rotate-180" : ""
          } `}
        >
          <ChevronDown color="#F0F1F3" height={20} width={20} />  
        </div>
      )}
    </Link>
  );
};
export default IconLink;
