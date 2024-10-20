import React from "react";
import SearchInput from "./SearchInput";

import SearchIcon from "@/icons/SearchIcon";
import Button from "./buttons/ButtonPrimary";

type Props = {
  size?: "sm" | "lg";
  type?: "secondary";
};

const Header = (props: Props) => {
  return (
    <div>
      <div className="w-full fixed py-[14px] px-[28px] flex items-center border-b border-grey-100 justify-between">
        <SearchInput
          placeholder="Search keyword..."
          className=""
          iconSrc={<SearchIcon color={"#858D9D"} />}
        />
        <Button />sdsds
      </div>
    </div>
  );
};

export default Header;
