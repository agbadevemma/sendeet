import React, { Dispatch, SetStateAction, useState } from "react";
import logo from "../../images/Logo.png";
import dashlogo from "../../images/dashlogo.svg";
import Image from "next/image";
import ChevronSelectorVertical from "@/icons/chevron-selector-vertical";
import Elements from "@/icons/elements";
import LoudSpeaker from "@/icons/loudspeaker";
import UserGroup from "@/icons/user-group";
import Money1 from "@/icons/money-1";
import BarChartv from "@/icons/bar-chart-v";
import Settings from "@/icons/settings";
import Messages from "@/icons/messages";
import logo2 from "../../images/logo.svg";
import BellBorder from "@/icons/bell-border";
import Users from "@/icons/users";
import NewsPaper from "@/icons/newspaper";
import IconLink from "./IconLink";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { setNotification } from "@/lib/slices/miscellaneousSlice";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const pathName = usePathname();
  const baseRoute: string = "/admin/dashboard/usermanagement/audience";
  // Check if the current pathname matches the base route
  const isUserManagementPage = pathName?.startsWith(baseRoute);
  const id = isUserManagementPage ? pathName.replace(baseRoute, "") : null;
  return (
    <div className="">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full bg-black/20 z-50 fixed md:static  transition-all duration-500  ${
          isOpen ? "visible " : "invisible  md:visible md:opacity-100"
        } `}
      >
        <div
          className={`h-screen overflow-y-auto sidebar  bg-[#101928] pb-4  lg:flex flex-col w-[60%] md:w-fit lg:w-full  xl:w-[240px] transition-all duration-500    ${
            isOpen ? "-translate-x-0" : "-translate-x-full md:translate-x-0"
          } `}
        >
          {/* 
          <hr className="  max-w-[200px] mt-4 bg-[#F0F1F3]  mx-auto  w-full" /> */}
          <div className="md:w-fit xl:w-full px-4 md:px-2.5  xl:px-4 mt-0">
            <div className="px-[24px] py-3.5  w-full border-b border-grey-50 pb-4 md:hidden xl:block">
              <Image src={logo} alt="logo" className="w-32" />
            </div>
            <div className=" py-3.5  mx-auto w-fit border-b xl:border-b md:border-none border-grey-50 pb-4 md:block hidden xl:hidden ">
              <Image src={logo2} alt="logo" className="w-10 object-contain" />
            </div>
            <hr className="h-px bg-grey-50 mt-5 hidden lg:block xl:hidden" />
            <div className="mt-7 md:w-fit xl:w-full">
              <p className="text-grey-100  text-sm  md:text-xs xl:text-sm font-medium  px-1 mt-1 md:text-center xl:text-start">
                MAIN MENU
              </p>
              <div className="mt-3 flex flex-col gap-1 md:items-center xl:items-start">
                <IconLink
                  href="/admin/dashboard"
                  IconComponent={Elements}
                  label="Dashboard"
                  onClick={() => setIsOpenDropDown(false)}
                />

                <IconLink
                  href="/admin/dashboard/analytics"
                  IconComponent={BarChartv}
                  label="Analytics"
                  onClick={() => setIsOpenDropDown(false)}
                />
                <IconLink
                  href="/admin/dashboard/notifications"
                  IconComponent={BellBorder}
                  label="Notifications"
                  notifyValue="0"
                  onClick={() => {
                    dispatch(setNotification(true));
                    setIsOpenDropDown(false);
                  }}
                />
              </div>
            </div>
            <hr className="h-px bg-grey-50 mt-5  hidden lg:block xl:hidden" />
            <div className="border-t pt-7  md:w-fit xl:w-full border-t-grey-50 md:border-t-0 xl:border-t xl:border-t-grey-50 mt-3 md:mt-0 xl:mt-3">
              <p className="text-grey-100 md:w-fit  xl:w-full text-sm  md:text-xs xl:text-sm mb-3  pl-3 pr-4 md:pl-0 md:pr-0 xl:pl-3 xl:pr-4  ">
                MANAGEMENT
              </p>
              <div className="flex flex-col gap-1  md:items-center xl:items-start">
                <IconLink
                  href={
                    pathName ===
                      "/admin/dashboard/usermanagement/organization" ||
                    "/admin/dashboard/usermanagement/audience"
                      ? ""
                      : "/admin/dashboard/usermanagement/organization"
                  }
                  route={false}
                  IconComponent={Users}
                  label="User Management"
                  onClick={() => setIsOpenDropDown((prev) => !prev)}
                  isOpenDropDown={isOpenDropDown}
                />
                <div className={`${isOpenDropDown ? "block" : "hidden"}`}>
                  <IconLink
                    href="/admin/dashboard/usermanagement/organization"
                    subroute={true}
                    IconComponent={Users}
                    label="Organization"
                  />
                  <IconLink
                    href="/admin/dashboard/usermanagement/audience"
                    subroute={true}
                    IconComponent={Users}
                    label="Audience"
                  />
                </div>

                <IconLink
                  href="/admin/dashboard/content"
                  IconComponent={NewsPaper}
                  label="Content"
                  onClick={() => setIsOpenDropDown(false)}
                />
                <IconLink
                  href="/admin/dashboard/credits"
                  IconComponent={Money1}
                  label="Credits"
                  onClick={() => setIsOpenDropDown(false)}
                />
              </div>
            </div>
            <hr className="h-px bg-grey-50 mt-5  hidden lg:block xl:hidden" />
            <div className="border-t pt-7 w-full md:w-fit xl:w-full mx-auto border-t-grey-50 md:border-t-0 xl:border-t xl:border-t-grey-50 mt-3 md:mt-0 xl:mt-3">
              <p className="text-grey-100 md:w-fit xl:w-full text-sm  md:text-xs xl:text-sm mb-3  pl-3 pr-4 md:pl-0 md:pr-0 xl:pl-3 xl:pr-4">
                SUPPORT
              </p>
              <div className="flex flex-col gap-1 md:items-center xl:items-start">
                <IconLink
                  href="/admin/dashboard/settings"
                  IconComponent={Settings}
                  label="Settings"
                  onClick={() => setIsOpenDropDown(false)}
                />
                <IconLink
                  href="/admin/dashboard/help-center"
                  IconComponent={Messages}
                  label="Help Center"
                  onClick={() => setIsOpenDropDown(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
