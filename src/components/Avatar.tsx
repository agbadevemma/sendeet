"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import profile from "../images/profile.jpg";

import Building5 from "@/icons/building-5";
import Settings from "@/icons/settings";
import Logout from "@/icons/logout";
import { useLogoutMutation } from "@/lib/slices/authApi";
import SuccessToast2 from "./SuccessToast2";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
type Props = {};

const Avatar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [logout, { isLoading, isError, error }] = useLogoutMutation();

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

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      toast.success(<SuccessToast2 message={"Logout successful!"} />, {
        style: {
          width: '100%', // Adjust width as needed
          maxWidth: '',
        },
        className:
          'text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]',
        bodyClassName:
          'text-sm flex flex-col w-full max-w-[400px] !w-full !p-12',
        progressClassName: 'bg-red-200',
        icon: false,
        // closeButton: false, // Uncomment if you want to hide the close button
      });
      router.push("/login")
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div>
      {" "}
      <div className="relative" ref={dropdownRef}>
        <Image
          src={profile}
          alt=""
          className="rounded-full h-10 w-10 object-cover cursor-pointer"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div className="shadow-lg absolute w-[240px] rounded-lg flex-col right-0 mt-2 bg-white z-[80] cursor-pointer">
            <div className="flex w-full gap-4 px-4  py-[12px] border-b border-b-grey-50 ">
              <Image
                src={profile}
                alt=""
                className="rounded-full h-10 w-10 object-cover cursor-pointer"
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
            <div onClick={() => { toggleDropdown();
               handleLogout() }} className="flex w-full gap-4 px-4  border-t border-t-grey-50 py-[12px] items-center ">
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
