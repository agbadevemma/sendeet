import React from "react";
import logo from "../images/Logo.png";
import Image from "next/image";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <div className="h-screen bg-white border-[#D0D3D9] border w-[272px]">
        <div className="px-[24px] py-2">
          <Image src={logo} alt="logo" className="w-32" />
        </div>
        <div className="max-w-[240px] h-px bg-[#F0F1F3] mx-auto  w-full"></div>
      </div>
    </div>
  );
};

export default Sidebar;
