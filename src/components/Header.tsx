import React from "react";
import SearchInput from "./SearchInput";

import Button from "./buttons/Button";
import SearchIcon from "@/icons/search-icon";
import LightingBorderIcon from "@/icons/lighting-border";
import BellBorderIcon from "@/icons/bell-border";
import Image from "next/image";
import profile from "../images/profile.jpg";

type Props = {
  size?: "sm" | "lg";
  type?: "secondary";
};

const Header = (props: Props) => {
  return (
    <div>
      <div className="w-full  py-[14px] px-2 lg:px-[28px] flex items-center border-b border-grey-100 justify-between">
   
        <SearchInput
          placeholder="Search keyword..."
          className=""
          icon={<SearchIcon color={"#858D9D"} />}
        />
        <div className=" flex gap-1.5 lg:gap-3">
          <Button
            text="Getting Started"
            icon_style="icon-only"
            size="sm"
            iconComponent={<LightingBorderIcon color="black" />}
          />
          <Button
            icon_style="icon-only"
            size="sm"
            iconComponent={<BellBorderIcon color="black" />}
          />
          <Image
            src={profile}
            alt=""
            className="rounded-full h-10 w-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
