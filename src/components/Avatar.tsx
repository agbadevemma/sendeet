"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import profile from "../images/dp.jpg";
import qrcode from "../images/qrcode.png";
import Building5 from "@/icons/building-5";
import Settings from "@/icons/settings";
import Logout from "@/icons/logout";
import { useLogoutMutation } from "@/lib/slices/authApi";
import SuccessToast2 from "./SuccessToast2";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useGetUserDetailsQuery } from "@/lib/slices/userApi";
import Link from "next/link";
import Button from "./buttons/Button";
import Multiply from "@/icons/multiply";
import User from "@/icons/user";
import MapMarker from "@/icons/map-marker";
import Call from "@/icons/call";
import Mail from "@/icons/mail";
import CalendarAlt from "@/icons/calender-alt";
import UserGroup from "@/icons/user-group";
import useLogout from "@/hooks/useLogout";
type Props = {};

const Avatar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [logout, { isLoading, isError, error }] = useLogoutMutation();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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

  const { handleLogout } = useLogout();
  const { data } = useGetUserDetailsQuery(undefined);
  console.log("data", data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {" "}
      <div className="relatives" ref={dropdownRef}>
        <Image
          src={data?.profilePicture ?? profile}
          alt="profile"
          height={50}
          width={50}
          className="rounded-full h-10 w-10 object-cover cursor-pointer"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div className="shadow-lg absolute w-[240px] rounded-lg flex-col right-2 mt-2 bg-white z-[80] cursor-pointer">
            <div className="flex w-full gap-4 px-4  py-[12px] border-b border-b-grey-50 ">
              <Image
                src={data?.profilePicture ?? profile}
                alt="profile"
                height={50}
                width={50}
                className="rounded-full h-10 w-10 object-cover cursor-pointer"
              />
              <div className="flex flex-col ">
                <p className="text-sm font-medium text-[#344054]">
                  {data?.firstName} {data?.lastName}
                </p>
                <p className="text-xs  text-[#667085]">{data?.email}</p>
              </div>
            </div>

            <div
              onClick={() => {
                setIsModalOpen(true);
                toggleDropdown();
              }}
              className="flex w-full gap-4 px-4  py-[12px] items-center "
            >
              <Building5 color="#858D9D" width={20} height={20} />
              <p className="text-sm text-grey-500">Business Profile</p>
            </div>
            <Link
              href={"/dashboard/settings"}
              onClick={toggleDropdown}
              className="flex w-full gap-4 px-4  py-[12px] items-center "
            >
              <Settings color="#858D9D" width={20} height={20} />
              <p className="text-sm text-grey-500">Settings</p>
            </Link>
            <div
              onClick={() => {
                toggleDropdown();
                handleLogout();
              }}
              className="flex w-full gap-4 px-4  border-t border-t-grey-50 py-[12px] items-center "
            >
              <Logout color="#858D9D" width={20} height={20} />
              <p className="text-sm text-grey-500">Log out</p>
            </div>
          </div>
        )}
      </div>
      {/* Business Profile */}
      <div
        onClick={() => setIsModalOpen(false)}
        className={`fixed w-full h-screen flex   items-start gap-3 justify-end  overflow-auto bg-black/20 top-0 left-0 z-[100]  p-4   transition-all duration-500 ${
          isModalOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex justify-end items-center mt-4  cursor-pointer">
          <div
            // onClick={() => setIsModalOpen(false)}
            className="flex items-center p-2 w-fit rounded-full bg-white   justify-center border border-[#E4E7EC]"
          >
            <Multiply color="#5D6679" />
          </div>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`h-full bg-white  max-w-[475px]   flex flex-col overflow-auto  py  w-full rounded-xl mt   transition-all duration-500 p-6   ${
            isModalOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* <div className="flex justify-end items-center   cursor-pointer">
            <div
              onClick={() => setIsModalOpen(false)}
              className="flex items-center p-2 w-fit rounded-lg  justify-center border border-[#E4E7EC]"
            >
              <Multiply color="#5D6679" />
            </div>
          </div> */}
          <div className="flex items-center gap-3">
            <Image
              src={data?.companyLogo ?? ""}
              alt="profile"
              height={500}
              width={500}
              className=" h-[57px] rounded-xl w-[57px] object-cover cursor-pointer"
            />

            <p className=" text-[17px] font-semibold">Organization Profile</p>
          </div>

          <div className="flex flex-col mt-6 gap-1">
            <div className="flex gap-2">
              <span className="text-base font-medium">
                {data?.business[0]?.companyName}
              </span>
              <span className="text-sm flex items-center justify-center rounded-2xl px-3 bg-[#E0F2FE] text-[#065986] font-medium">
                NGO
              </span>
              <span className="text-sm  flex items-center justify-center   rounded-2xl font-medium bg-success-50 text-success-700 px-3">
                Connected
              </span>
            </div>
            <div className="   mt-3 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <CalendarAlt height={20} width={20} color="#667085" />
                <span className="text-xs">Joined 22 October, 2023</span>
              </div>
              <div className="flex items-center gap-3">
                <UserGroup height={20} width={20} color="#667085" />
                <span className="text-xs">50-150</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mt-10">
            <p className="text-sm font-medium  text-grey-800">
              Contact Information
            </p>
            <div className="w-full bg-gray-50 p-4 flex flex-col gap-2  rounded-lg ">
              <div className="flex gap-2 items-center">
                <Mail color="#667085" height={15} width={15} />
                <div className="w-full text-grey-500 text-sm">
                  {data?.email}
                </div>
              </div>

              <div className="w-ful  flex gap-2   items-center ">
                <Call color="#667085" height={15} width={15} />
                <div className="w-full text-grey-500 text-sm">
                  +234 8143 21 9109
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mt-4">
            <p className="text-sm font-medium  text-grey-800">Location</p>
            <div className="w-full bg-gray-50 p-4 flex gap-2  rounded-lg ">
              <MapMarker color="#667085" height={15} width={15} />
              <div className="w-full text-grey-500 text-sm">
                Off Ladi Kwali Way before the mango tree at the junction with a
                yellow gate beside the house
              </div>
            </div>
          </div>
          <span className="text-grey-800 text-sm font-medium mt-4">
            QR Code (Scan to Subscribe)
          </span>
          <p className=" text-grey-500 text-sm text-start mt-1">
            Share this QR code with your audience to let them subscribe to your
            newsletters and campaigns effortlessly.
          </p>

          <div
            className="mx-auto border rounded-[9px] mt-6 border-[#D0D3D9] bg-white shadow-[0px_9px_12px_-3px_rgba(16,24,40,0.08),0px_3px_4.5px_-1.5px_rgba(16,24,40,0.03)]
 h-36 w-36"
          >
            <Image alt="" src={qrcode} className="rounded-lg w-full" />
          </div>

          <div className="flex items-center mt-10 justify-around gap-2">
            <Button
              text="Share "
              size="sm"
              onClick={() => setIsModalOpen(false)}
              className=" mb-0  !px-10    !py-3 !h-[40px]"
            />
            <Button
              text="SVG"
              size="sm"
              onClick={() => {
                setIsModalOpen(false);
                // setIsModalOpen2(true);
              }}
              className=" mb-0  !px-10    !py-3 !h-[40px]"
            />
            <Button
              text="PNG"
              size="sm"
              onClick={() => {
                setIsModalOpen(false);
                // setIsModalOpen2(true);
              }}
              className=" mb-0  !px-10    !py-3 !h-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
