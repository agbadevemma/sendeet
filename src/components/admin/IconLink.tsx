import ChevronDown from "@/icons/cheveron-down";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    href === "/admin/dashboard" ? pathName === href : pathName.startsWith(href); // Updated to use startsWith

  return (
    <Link
      href={href}
      className={`w-full ${
        isActive
          ? " text-white bg-[#1D2739]"
          : "hover:bg-[#1D2739] ease-in-out duration-500 text-gray-50"
      } cursor-pointer rounded-lg gap-3 py-3 px-2 flex items-center text-white`}
    >
      <IconComponent color={"#F0F1F3"} />
      <span className="text-sm whitespace-nowrap">{label}</span>
      {href === "/admin/dashboard/usermanagement" && (
        <div className="ml-2 lg:ml-4 xl:ml-8">
          {" "}
          <ChevronDown color="#F0F1F3" height={20} width={20} />
        </div>
      )}
    </Link>
  );
};
export default IconLink;
