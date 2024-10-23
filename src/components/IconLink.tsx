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
    href === "/dashboard" ? pathName === href : pathName.startsWith(href); // Updated to use startsWith

  return (
    <Link
      href={href}
      className={`w-full ${
        isActive
          ? "border border-solid border-primary-600 text-primary-600 bg-blue-50"
          : "hover:bg-grey-50 text-gray-500"
      } cursor-pointer rounded-lg gap-3 py-3 px-4 flex items-center`}
    >
      <IconComponent color={isActive ? "#00AAF7" : "#858D9D"} />
      <span className="text-sm">{label}</span>
    </Link>
  );
};
export default IconLink;
