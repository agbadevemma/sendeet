import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { usePathname } from "next/navigation";
// import "react-tooltip/dist/react-tooltip.css";

const IconLink = ({
  href,
  IconComponent,
  label,
}: {
  href: string;
  IconComponent: React.ComponentType<{ color: string }>;
  label: string;
}) => {
  const pathName = usePathname();
  const isActive =
    href === "/dashboard" ? pathName === href : pathName.startsWith(href); // Updated to use startsWith

  return (
    <Link
      href={href}
      data-tooltip-id="my-tooltip"
      data-tooltip-content={label}
      className={`w-full ${
        isActive
          ? "border border-solid border-primary-600 text-primary-600 bg-blue-50"
          : "hover:bg-[#f4f4f4] text-gray-500 duration-500  ease-in-out"
      } cursor-pointer rounded-lg gap-3 py-3 px-4 flex items-center md:w-fit xl:w-full`}
    >
      <IconComponent color={isActive ? "#00AAF7" : "#858D9D"} />
      <span className="text-sm md:hidden xl:block">{label}</span>
      <Tooltip id="my-tooltip"  place="bottom"   className="!z-[1000] xl:!hidden !px-1.5 !py-1.5 !absolute !text-[13px] !bg-[#101828] !rounded-lg"/>
    </Link>
  );
};
export default IconLink;
