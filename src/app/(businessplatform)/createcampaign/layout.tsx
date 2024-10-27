"use client";
import Image from "next/image";
import logo from "../../../images/Logo.png";
import Button from "@/components/buttons/Button";
import profile from "../../../images/profile.jpg";
import BellBorder from "@/icons/bell-border";
import ChevronLeft from "@/icons/chevron-left";
import Settings from "@/icons/settings";
import Settings2 from "@/icons/settings2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ChevronRight from "@/icons/chevron-right";
import PencilEdit from "@/icons/pencil-edit";
import CalendarAlt from "@/icons/calender-alt";
import Eye from "@/icons/eye";
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className=" w-full bg-[#FCFCFD] border-grey-100">
      {" "}
      <div className="flex justify-between items-center border-b w-full  border-grey-100 overflow-hidden">
        <div className="px-4 lg:px-6 py-2 border-r  border-grey-100 h-fit">
          <Image src={logo} alt="logo" className="w-32" />
        </div>
        <div className=" flex gap-1.5 lg:gap-7 px-7 items-center">
          <Button
            icon_style="icon-only"
            size="lg"
            iconComponent={<BellBorder color="black" />}
          />
          <Image
            src={profile}
            alt=""
            className="rounded-full h-10 w-10 object-cover"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 lg:gap-10 xl:gap-24 lg:flex-row  border py-[18px] px-4 lg:px-10 xl:px-10 border-grey-100 border-t-transparent ">
        <div className="flex   gap-5 items-start">
          <Link href={"/dashboard/campaigns"}>
            {" "}
            <Button
              icon_style="icon-only"
              size="sm"
              iconComponent={<ChevronLeft color="black" />}
            />
          </Link>
          <div className="flex flex-col gap-1 w-full text-nowrap">
            <p className="text-sm font-semibold">Create a campaign</p>
            <p className="text-grey-500 text-sm">Input your campaign details</p>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 w-full ">
          <div
            className={`px-3 py-2 items-center gap-2 rounded-3xl flex border ${
              pathname === "/createcampaign"
                ? "border-primary-500 bg-primary-50"
                : "border-grey-100"
            } `}
          >
            <Settings2
              color={pathname === "/createcampaign" ? "#0079AF" : "#383E49"}
            />
            <span
              className={`${
                pathname === "/createcampaign"
                  ? "text-primary-700"
                  : "text-grey-800"
              }`}
            >
              1. Setup
            </span>
          </div>
          <ChevronRight color="#989FAD" width={16} height={16} />
          <div
            className={`px-3 py-2 items-center gap-2 rounded-3xl flex border ${
              pathname === "/createcampaign/compose"
                ? "border-primary-500 bg-primary-50"
                : "border-grey-100"
            } `}
          >
            <PencilEdit
              color={
                pathname === "/createcampaign/compose" ? "#0079AF" : "#383E49"
              }
            />
            <span
              className={`${
                pathname === "/createcampaign/compose"
                  ? "text-primary-700"
                  : "text-grey-800"
              }`}
            >
              2. Compose
            </span>
          </div>
          <ChevronRight color="#989FAD" width={16} height={16} />
          <div
            className={`px-3 py-2 items-center gap-2 rounded-3xl flex border ${
              pathname === "/createcampaign/schedule"
                ? "border-primary-500 bg-primary-50"
                : "border-grey-100"
            } `}
          >
            <CalendarAlt
              color={
                pathname === "/createcampaign/schedule" ? "#0079AF" : "#383E49"
              }
            />
            <span
              className={`${
                pathname === "/createcampaign/schedule"
                  ? "text-primary-700"
                  : "text-grey-800"
              }`}
            >
              3. Schedule
            </span>
          </div>
          <ChevronRight color="#989FAD" width={16} height={16} />
          <div
            className={`px-3 py-2 items-center gap-2 rounded-3xl flex border ${
              pathname === "/createcampaign/review"
                ? "border-primary-500 bg-primary-50"
                : "border-grey-100"
            } `}
          >
            <Eye
              color={
                pathname === "/createcampaign/review" ? "#0079AF" : "#383E49"
              }
            />
            <span
              className={`${
                pathname === "/createcampaign/review"
                  ? "text-primary-700"
                  : "text-grey-800"
              }`}
            >
              4. Review
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
