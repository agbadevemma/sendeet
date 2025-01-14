"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../../../images/Logo.png";
import bg1 from "../../../images/signup/bg1.png";
import bg2 from "../../../images/signup/bg2.png";
import bg3 from "../../../images/signup/bg3.png";
import card from "../../../images/signup/card2.svg";
import arrowactive from "../../../images/icons/chevron-right-active.svg";
import arrowinactive from "../../../images/icons/chevron-right-inactive.svg";
import ChevronRight from "@/icons/chevron-right";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const switchToBasicInfo = useAppSelector(
    (state) => state.miscellaneous.switchToBasicInfo
  );
  const backgrounds: StaticImageData[] = [bg1, bg2, bg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const renderNavLink = (href: string, text: string) => (
    <div className="flex items-center gap-[10px]">
      <p
        className={`max-w-[67px] text-xs lg:text-sm w-full ${
          pathname === href ? "text-primary-500" : "text-grey-300"
        }`}
      >
        {text}
      </p>
      <ChevronRight
        width={16}
        height={16}
        color={pathname === href ? "#00AAF7" : "#B9BDC7"}
      />
    </div>
  );

  return (
    <section>
      <div className="w-full flex justify-between min-h-screen">
        <div className="w-full">
          <div className="w-full max-w-[525px] mx-auto mt-[96px]">
            <Image src={logo} alt="logo" className="w-32 mx-auto lg:mx-0" />
            <div className="lg:mt-[57.6px] mt-8">
              <div className="w-fit gap-4 mx-auto lg:mx-0 lg:pl-0 flex">
                {renderNavLink("/signup", "Account")}
                {switchToBasicInfo
                  ? renderNavLink("/signup/basic-info", "Basic info")
                  : renderNavLink("/signup/verification", "Verification")}
                {renderNavLink("/signup/company", "Company")}
                <p className="text-xs lg:text-sm text-grey-300">Finish setup</p>
              </div>
              {children}
            </div>
          </div>
        </div>
        <div className="relative  w-full px-[20px] my-[20px] lg:flex hidden   flex-row-reverse overflow-hidden ">
          {backgrounds.map((bg, index) => (
            <Image
              key={index}
              src={bg}
              alt={`background ${index + 1}`}
              className={`w-full  h-full rounded-[24px] object-cover   min-h-screen  transition-opacity duration-1000 ${
                index === currentSlide ? "block" : "hidden"
              }`}
            />
          ))}

          <div className="absolute w-fit lg:px-14 xl:px-0 mx-auto flex flex-col gap-[80px] left-0 right-0 z-10">
            <Image
              src={card}
              alt="logo"
              className="object-contain lg: xl-full left-0 right-0 mx-auto mt-[126px]"
            />
            <div className="mx-auto flex flex-col gap-y-[14px] w-full max-w-[437px] text-white">
              <p className="text-center font-medium text-2xl">
                Engage Smarter, Notify Faster
              </p>
              <p className="text-center text-md font-medium">
                Effortlessly manage customer interactions and campaign analytics
                at a glance
              </p>
            </div>
            <div className="w-fit gap-[4px] mx-auto flex">
              {backgrounds.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-[#004768] rounded-[12px] w-[18px] h-[7px]"
                      : "bg-[#E6F7FE] w-[7px] h-[7px] rounded-full"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt"></div>
    </section>
  );
}
