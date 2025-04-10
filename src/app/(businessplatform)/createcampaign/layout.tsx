"use client";
import Image from "next/image";
import logo from "../../../images/Logo.png";
import Button from "@/components/buttons/Button";
import profile from "../../../images/dp.jpg";
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
import secureLocalStorage from "react-secure-storage";
import CheckCircle from "@/icons/check-circle";
import Notification from "@/components/Notification";
import Avatar from "@/components/Avatar";
import Notifications from "@/components/Notifications";
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log("print", secureLocalStorage.getItem("step1"));

  return (
    <div className=" w-full bg-[#FCFCFD] border-grey-100">
      {" "}
      <div className="flex justify-between items-center border-b w-full  border-grey-100 overflow-hidden">
        <div className="px-4 lg:px-6 py-2 border-r  border-grey-100 h-fit">
          <Image src={logo} alt="logo" className="w-32" />
        </div>
        <div className=" flex gap-1.5 lg:gap-7 px-7 items-center">
        <Notifications />
        <Avatar />
        </div>
      </div>
      <div className="w-full flex flex-col   lg:flex-row    border-grey-100 border-t-0 border-r-0 ">
        <div className="flex py-[15px]  border-b h-fit border-grey-100   gap-5 items-start   lg:pl-10">
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

        <div className="flex flex-col w-full  justify-start items-start ">
          <div
            className={`w-full flex  border-b border-b-[#D0D3D9] py-0.5  px-4 lg:px-0 
            ${pathname === "/createcampaign/review" ? "lg:pl-[8%]   " : "lg:pl-[14%] "}
            `}
          >
            {" "}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 w-fit  py-4   ">
              <div
                className={`px-3 py-2 items-center gap-2 rounded-3xl flex border ${
                  pathname === "/createcampaign"
                    ? "border-primary-500 bg-primary-50"
                    : "border-grey-100"
                } `}
              >
                {Object.keys(
                  (secureLocalStorage.getItem("step1") as Record<
                    string,
                    unknown
                  >) || {}
                ).length === 0 ? (
                  <Settings2
                    color={
                      pathname === "/createcampaign" ? "#0079AF" : "#383E49"
                    }
                  />
                ) : (
                  <CheckCircle color="#0079AF" />
                )}

                <span
                  className={` font-medium text-sm ${
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
                className={`px-3 py-2 items-center gap-2 text-sm rounded-3xl flex border ${
                  pathname === "/createcampaign/compose"
                    ? "border-primary-500 bg-primary-50"
                    : "border-grey-100"
                } `}
              >
                {secureLocalStorage.getItem("step2") ? (
                  <CheckCircle color={"#0079AF"} />
                ) : (
                  <PencilEdit
                    color={
                      pathname === "/createcampaign/compose"
                        ? "#0079AF"
                        : "#383E49"
                    }
                  />
                )}
                <span
                  className={` font-medium  text-sm ${
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
                className={`px-3 py-2 items-center gap-2 rounded-3xl flex border text-sm ${
                  pathname === "/createcampaign/schedule"
                    ? "border-primary-500 bg-primary-50"
                    : "border-grey-100"
                } `}
              >
                {secureLocalStorage.getItem("step3") ? (
                  <CheckCircle color={"#0079AF"} />
                ) : (
                  <CalendarAlt
                    color={
                      pathname === "/createcampaign/schedule"
                        ? "#0079AF"
                        : "#383E49"
                    }
                  />
                )}
                <span
                  className={` font-medium text-sm ${
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
                {secureLocalStorage.getItem("step4") ? (
                  <CheckCircle color={"#0079AF"} />
                ) : (
                  <Eye
                    color={
                      pathname === "/createcampaign/review"
                        ? "#0079AF"
                        : "#383E49"
                    }
                  />
                )}
                <span
                  className={` font-medium text-sm ${
                    pathname === "/createcampaign/review"
                      ? "text-primary-700"
                      : "text-grey-800"
                  }`}
                >
                  4. Review
                </span>
              </div>
            </div>
          </div>{" "}
          <div
            className={` w-full mt-8 bg-[#FCFCFD] min-h-screen  `}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// pathname !== "/createcampaign/review"
// ? "max-w-[640px] lg:ml-[14%]  w-full  "
// : ${
//   "lg:ml-[8%]"
// }