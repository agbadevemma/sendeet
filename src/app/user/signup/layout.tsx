"use client";
import logo from "../../../images/Logo.png";
import bg1 from "../../../images/signup/bg1.png";
import bg2 from "../../../images/signup/bg2.png";
import bg3 from "../../../images/signup/bg3.png";
import card from "../../../images/signup/card.png";
import Image from "next/image";
import arrowactive from "../../../images/icons/chevron-right-active.svg";
import arrowinactive from "../../../images/icons/chevron-right-inactive.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <section>
      {" "}
      <div className="w-full flex justify-between  min-h-screen   ">
        <div className="w-full">
          {" "}
          <div className=" w-full max-w-[525px] mx-auto mt-[96px]">
            <Image src={logo} alt="logo" className=" w-32 mx-auto lg:mx-0  " />
            <div className="lg:mt-[57.6px] mt-8">
              <div className="w-fit gap-4 mx-auto lg:mx-0 lg:pl-8 flex">
                <Link
                  href={"/user/signup"}
                  className="flex items-center gap-[10px]"
                >
                  <p
                    className={`max-w-[67px] text-xs lg:text-sm   w-full ${
                      pathname === "/user/signup"
                        ? "text-[#00AAF7]"
                        : "text-[#989FAD]"
                    }`}
                  >
                    Account
                  </p>
                  {pathname === "/user/signup" ? (
                    <Image src={arrowactive} alt="icon" />
                  ) : (
                    <Image src={arrowinactive} alt="icon" />
                  )}
                </Link>
                <Link
                  href={"/user/signup/basic-info"}
                  className="flex items-center gap-[10px]"
                >
                  <p
                    className={`max-w-[67px] text-xs lg:text-sm   w-full ${
                      pathname === "/user/signup/basic-info"
                        ? "text-[#00AAF7]"
                        : "text-[#989FAD]"
                    }`}
                  >
                    Basic info
                  </p>
                  {pathname === "/user/signup/basic-info" ? (
                    <Image src={arrowactive} alt="icon" />
                  ) : (
                    <Image src={arrowinactive} alt="icon" />
                  )}
                </Link>
                <Link
                  href={"/user/signup/company"}
                  className="flex items-center gap-[10px]"
                >
                  <p
                    className={`max-w-[67px] text-xs lg:text-sm   w-full ${
                      pathname === "/user/signup/company"
                        ? "text-[#00AAF7]"
                        : "text-[#989FAD]"
                    }`}
                  >
                    {" "}
                    Company
                  </p>{" "}
                  {pathname === "/user/signup/company" ? (
                    <Image src={arrowactive} alt="icon" />
                  ) : (
                    <Image src={arrowinactive} alt="icon" />
                  )}{" "}
                </Link>{" "}
                <p className={` text-xs lg:text-sm    ${"text-[#989FAD]"}`}>
                  Finish setup
                </p>
              </div>

              {children}
            </div>
          </div>
        </div>
        <div className=" relative w-full lg:flex hidden py-[20px]  pr-[20px] flex-row-reverse ">
          {pathname === "/user/signup" && (
            <Image src={bg1} alt="logo" className="min-h-screen   flex-1  " />
          )}
          {pathname === "/user/signup/basic-info" && (
            <Image src={bg1} alt="logo" className="min-h-screen   flex-1  " />
          )}
          {pathname === "/user/signup/company" && (
            <Image src={bg1} alt="logo" className="min-h-screen   flex-1  " />
          )}
          <div className="absolute  mx-auto flex flex-col gap-[80px] left-0 right-0">
            <Image
              src={card}
              alt="logo"
              className=" object-contain  left-0 right-0 mx-auto mt-[126px] "
            />
            <div className="mx-auto  flex flex-col gap-y-[14px] w-full max-w-[437px] text-white ">
              <p className=" text-center font-medium text-2xl">
                Engage Smarter, Notify Faster{" "}
              </p>
              <p className="text-center text-base font-medium">
                Effortlessly manage customer interactions and campaign analytics
                at a glance
              </p>
            </div>
            <div className="w-fit  gap-[4px] mx-auto  flex ">
              <div
                className={` ${
                  pathname === "/user/signup"
                    ? "bg-[#004768] rounded-[12px] w-[18px] h-[7px]"
                    : "bg-[#E6F7FE] w-[7px] h-[7px] rounded-full"
                } `}
              ></div>
              <div
                className={` ${
                  pathname === "/user/signup/basic-info"
                    ? "bg-[#004768] rounded-[12px] w-[18px] h-[7px]"
                    : "bg-[#E6F7FE] w-[7px] h-[7px] rounded-full"
                }  `}
              ></div>
              <div
                className={`  ${
                  pathname === "/user/signup/company"
                    ? "bg-[#004768] rounded-[12px] w-[18px] h-[7px]"
                    : "bg-[#E6F7FE] w-[7px] h-[7px] rounded-full"
                } 
                `}
              ></div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
