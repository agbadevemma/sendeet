"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import profile from "../images/profile.jpg";

import Building5 from "@/icons/building-5";
import Settings from "@/icons/settings";
import Logout from "@/icons/logout";
type Props = {};

const Avatar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      {" "}
      <div className="relative" ref={dropdownRef}>
        <Image
          src={profile}
          alt=""
          className="rounded-full h-10 w-10 object-cover"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div   className="shadow-lg absolute w-[240px] rounded-lg flex-col right-0 mt-2 bg-white">
            <div className="flex w-full gap-4 px-4  py-[12px] border-b border-b-grey-50 ">
              <Image
                src={profile}
                alt=""
                className="rounded-full h-10 w-10 object-cover"
              />
              <div className="flex flex-col ">
                <p className="text-sm font-medium text-[#344054]">
                  Tunde Stark
                </p>
                <p className="text-xs  text-[#667085]">tunde@business.com</p>
              </div>
            </div>

            <div className="flex w-full gap-4 px-4  py-[12px] items-center ">
              <Building5 color="#858D9D" width={20} height={20} />
              <p className="text-sm text-grey-500">Business Profile</p>
            </div>
            <div className="flex w-full gap-4 px-4  py-[12px] items-center ">
              <Settings color="#858D9D" width={20} height={20} />
              <p className="text-sm text-grey-500">Settings</p>
            </div>
            <div className="flex w-full gap-4 px-4  border-t border-t-grey-50 py-[12px] items-center ">
              <Logout color="#858D9D" width={20} height={20} />
              <p className="text-sm text-grey-500">Log out</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
