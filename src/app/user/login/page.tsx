import InputField from "@/components/InputField";
import logo from "../../../images/Logo.png";
import Image from "next/image";
import mailicon from "../../../images/icons/mail-icon.svg";
import passwordopenicon from "../../../images/icons/passwordopen-icon.svg";
import Button from "@/components/Button";
import Link from "next/link";
type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div>
      <div className="w-full pt-[106px] lg:pt-24 flex flex-col gap-4 lg:gap-[57.2px] lg:mb-[242px]">
        <Image src={logo} alt="logo" className="mx-auto w-32" />
        <div className="relative w-full min-h-[582px] lg:max-w-[535px] h-56 lg:rounded-[16px] mx-auto lg:px-[1px] lg:py-[1px]">
          <div className="absolute lg:block hidden inset-0 p-[0px] lg:rounded-[16px] bg-gradient-to-r from-[#00E9C4]  to-[#00AAF7]"></div>
          <div className="relative w-full h-full lg:py-4 bg-white lg:rounded-[16px] px-[24px] md:px-[92px] lg:px-[28px]">
            <div className="lg:py-8 py-3 h-full">
              <p className=" text-[24px] lg:text-[30px] font-semibold leading-[32px] lg:leading-[38px]">
                Login to your account
              </p>
              <p className=" text-sm lg:text-base text-[#989FAD] mt-[14px]">
                Welcome back! Let’s get you into Sendeet
              </p>
              <div className="flex flex-col mt-10 gap-4">
                <InputField
                  iconSrc={mailicon}
                  inputType="email"
                  label="Work Email Address"
                  placeholder="example@companyname.com"
                />
                <InputField
                  iconSrc={passwordopenicon}
                  inputType="email"
                  label="Password"
                  placeholder="*********"
                />
              </div>
              <div className="flex text-[#009BE1] items-end justify-end w-full mt-[8px]">
                <Link
                  href={"/"}
                  className="text-right font-medium leading-5 text-sm"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="mt-8">
                <Button />
              </div>
              <div className="flex items-center mt-10 justify-center gap-1">
                <p className="text-[#667085]  text-sm leading-[20px]  lg:text-base  lg:leading-[20.3px]">Are you new here?</p>
                <Link
                  href={"/"}
                  className="text-[#009BE1] text-sm leading-[20px] lg:leading-[20.3px] lg:text-base font-semibold"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
