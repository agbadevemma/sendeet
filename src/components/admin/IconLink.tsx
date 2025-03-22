import ChevronDown from "@/icons/cheveron-down";
import ChevronUp from "@/icons/cheveron-up";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { usePathname } from "next/navigation";
import "react-tooltip/dist/react-tooltip.css";

const IconLink = ({
  href,
  IconComponent,
  label,
  onClick,
  route = true,
  subroute = false,
  notifyValue,
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
  notifyValue?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive =
    href === "/admin/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      data-tooltip-id="my-tooltip"
      data-tooltip-content={label}
      className={`w-full ${
        isActive && route
          ? " text-white bg-[#1D2739]"
          : " ease-in-out duration-500 text-gray-50"
      } cursor-pointer rounded-lg w-full  md:w-fit xl:w-full justify-between py-3 px-2 flex items-center text-white`}
    >
      <div className="gap-3 flex items-center">
        {" "}
        <IconComponent
          color={subroute ? "" : "#F0F1F3"}
          height={20}
          width={20}
        />
        <span className="text-[13px] md:hidden xl:block whitespace-nowrap">
          {label}
        </span>
        <Tooltip
        id="my-tooltip"
        place="bottom"
        className="!z-[1000] xl:hidden !px-1.5 !py-1.5 !absolute !text-[12px] !text-black !bg-white !rounded-lg"
      />
      </div>

      {Number(notifyValue) > 0 && (
        <div className="py-[2px] text-[#101928] text-xs px-1.5 flex items-center justify-center bg-[#E6F7FE] rounded-lg">
          {notifyValue}
        </div>
      )}
      {!route && (
        <div
          className={` md:hidden xl:block transition-transform duration-500 ${
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
