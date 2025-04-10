"use client";
import Image from "next/image";
import React from "react";
import image1 from "../images/logo3.svg";
import image2 from "../images/congrat.gif";
import Multiply from "@/icons/multiply";
import Button from "./buttons/Button";
import Link from "next/link";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const SubscriptionSuccess = ({ setIsOpen, isOpen }: Props) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed h-screen w-full  bg-black/35  top-0 left-0 z-[100] flex items-center justify-center lg:px-0 px-4 md:px-8 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {" "}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-[527px] bg-white   flex flex-col rounded-2xl transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full h-full bg-[#E6F7FE] rounded-t-2xl p-4 pb-8 pt-10 relative">
          <Image src={image1} alt="" className="mx-auto w-16" />
          <Image
            src={image2}
            alt=""
            className="mx-auto -mb-14 w-32 rotate-90"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 rounded-lg flex items-center justify-center right-4 bg-white border border-[#E4E7EC] p-1.5 mt-1"
          >
            <Multiply color="#101928" />
          </button>
        </div>
        <div className="w-full h-full bg-white rounded-b-2xl p-4 text-center mt-5 px-8 pb-8">
          <p className="font-semibold text-[20px] "> Upgrade Successful! 🎉</p>
          <p className="text-grey-600 text-[14.7px] mt-1">
            Your Sendeet subscription has been upgraded to Emerald. Enjoy up to
            100 free monthly credits!
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              text="Manage Subscription"
              className="!px-4"
              onClick={() => setIsOpen(false)}
            />
            <Link href={"/dashboard"}>
              <Button
                type="primary"
                text="Go to Dashboard"
                className="!px-4"
                onClick={() => setIsOpen(false)}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
