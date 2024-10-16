"use client";
import logo from "../../../images/Logo.png";
import bg from "../../../images/signup/bg.png";
import Image from "next/image";
import arrowactive from "../../../images/icons/chevron-right-active.svg";
import arrowinactive from "../../../images/icons/chevron-right-inactive.svg";
import { usePathname } from "next/navigation";
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
                <p className="flex items-center gap-[10px]">
                  
                  <p
                    className={`max-w-[67px] text-sm   w-full ${
                      pathname == "/user/signup"
                        ? "text-[#00AAF7]"
                        : "text-[#989FAD]"
                    }`}
                  >
                    Account
                  </p>
                  {pathname == "/user/signup" ? (
                    <Image src={arrowactive} alt="cool" />
                  ) : (
                    <Image src={arrowinactive} alt="cool" />
                  )}
                </p>
                <p className="flex items-center gap-[10px]">
                  <p
                    className={`max-w-[67px] text-sm   w-full ${
                      pathname == "/user/signup/basic-info"
                        ? "text-[#00AAF7]"
                        : "text-[#989FAD]"
                    }`}
                  >
                    Basic info
                  </p>
                  {pathname == "/user/signup/basic-info" ? (
                    <Image src={arrowactive} alt="cool" />
                  ) : (
                    <Image src={arrowinactive} alt="cool" />
                  )}
                </p>
                <p className="flex items-center gap-[10px]">
                  <p
                    className={`max-w-[67px] text-sm   w-full ${
                      pathname == "/user/signup/company"
                        ? "text-[#00AAF7]"
                        : "text-[#989FAD]"
                    }`}
                  >
                    {" "}
                    Company
                  </p>{" "}
                  {pathname == "/user/signup/company" ? (
                    <Image src={arrowactive} alt="cool" />
                  ) : (
                    <Image src={arrowinactive} alt="cool" />
                  )}{" "}
                </p>{" "}
               
                <p className={` text-sm    ${
                      pathname == "/user/signup/finish-setup"
                        ? "text-[#00AAF7]"
                        : "text-[#989FAD]"
                    }`}>
                  Finish setup
                </p>
              </div>

              {children}
            </div>
          </div>
        </div>
        <div className=" w-full lg:flex hidden py-[20px] pr-[20px] flex-row-reverse ">
          {" "}
          <Image src={bg} alt="logo" className="min-h-screen   flex-1  " />
        </div>
      </div>{" "}
    </section>
  );
}
