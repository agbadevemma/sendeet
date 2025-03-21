"use client";
import React, { Dispatch, SetStateAction } from "react";

import SearchIcon from "@/icons/search-icon";
import LightingBorderIcon from "@/icons/lighting-border";
import BellBorder from "@/icons/bell-border";
import Image from "next/image";
import profile from "../images/profile.jpg";
import AlignJustify from "@/icons/align-justify";
import Building5 from "@/icons/building-5";
import Settings from "@/icons/settings";
import Logout from "@/icons/logout";
import Notifications from "../Notifications";
import SearchInput from "../SearchInput";
import Avatar from "../Avatar";
import AdminAvatar from "./AdminAvatar";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsOpen }: Props) => {
  return (
    <div>
      <div className="w-full  py-[14px] px-4 md:px-7 lg:px-[28px] flex   lg:gap-0 items-center border-b border-grey-100 justify-between">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="block md:hidden"
        >
          <AlignJustify color="black" />
        </div>
        <SearchInput
          placeholder="Search keyword..."
          className="hidden lg:block "
          icon={<SearchIcon color={"#858D9D"} />}
        />

        <div className=" flex gap-1.5 lg:gap-3 items-center ml-auto">
          {/* <Button
            text="Getting Started"
            icon_style="leading-icon"
            size="sm"
            iconComponent={<LightingBorderIcon color="black" />}
          /> */}
          <Notifications />
          {/* <Avatar /> */}
          <AdminAvatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
