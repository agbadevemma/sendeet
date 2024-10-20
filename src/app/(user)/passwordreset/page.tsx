"use client"
import Button from "@/components/buttons/OnboardingButton";
import IconHolder from "@/components/IconHolder";
import InputField from "@/components/InputField";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import arrowleft from "../../../images/icons/arrow-left.svg";
import shield from "../../../images/icons/shield-tick.svg";

type Props = {};

const PasswordReset = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <div className="pt-[96px] pb-[48px] px-[32px] min-h-screen">
        <div className="w-full max-w-[456px] mx-auto flex flex-col items-center">
          <IconHolder src={shield} className={`border-success-500  bg-grey-50`} />
          <p className=" mt-6 font-semibold  text-display-xs lg:text-display-md">
            Password reset
          </p>
          <p className="text-grey-500 mt-2 lg:mt-3 text-md text-center">
            Your password has been successfully reset. Click below to log in
            magically.
          </p>
          <Link href={"/login"} className="mt-[32px] flex flex-col gap-[24px] w-full">
            <Button text="Continue" type="submit" />
          </Link>
          <Link
            href={"/login"}
            className="flex items-center gap-[8px] mt-[32px] w-fit mx-auto"
          >
            <Image src={arrowleft} alt="arrow" />{" "}
            <span className="text-grey-500 font-medium  text-sm">
              Back to log in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PasswordReset;
