"use client";
import Button from "@/components/buttons/Button";
import OtpFields from "@/components/OtpFields";
import { useAppDispatch } from "@/lib/hooks";
import { toggleBasicInfo } from "@/lib/slices/miscellaneousSlice";
import Link from "next/link";
import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";

type Props = {};

const Verification = () => {
  const [showOTPFields, setShowOTPFields] = useState(false);
  const dispatch = useAppDispatch();

  const handleToggleOTPFields = () => {
    setShowOTPFields((prev) => !prev);
  };
  const handleOnclick = () => {
    dispatch(toggleBasicInfo(true));
  };

  return (
    <div>
      <p className="text-display-xs lg:text-display-sm font-semibold mt-8">
        Check your email
      </p>
      <p className="lg:text-md text-sm font-normal text-grey-300 mt-3.5">
        {showOTPFields
          ? "Enter the 4-digit code sent to "
          : "We sent a verification link to "}
        <span className="font-medium">
          {String(secureLocalStorage.getItem("email")||"")}
        </span>
      </p>
      <div className="flex w-full justify-center items-center  mt-8 gap-10"></div>
      {showOTPFields && <OtpFields />}
      {showOTPFields ? (
        <Link href={"basic-info"} replace={true}>
          {" "}
          <Button
            className="mt-8"
            icon_style="txt"
            size="lg"
            type="primary"
            onClick={showOTPFields ? handleOnclick : handleToggleOTPFields}
            text={showOTPFields ? "Verify Email" : "Enter Code Manually"}
          />
        </Link>
      ) : (
        <Button
          className="mt-8"
          icon_style="txt"
          size="lg"
          type="primary"
          onClick={showOTPFields ? handleOnclick : handleToggleOTPFields}
          text={showOTPFields ? "Verify Email" : "Enter Code Manually"}
        />
      )}
      <div className="flex mt-8 items-center justify-center gap-1 text-center">
        <p className="text-grey-500 text-sm">Didn’t receive the email?</p>
        <p className="text-primary-600 text-sm cursor-pointer">
          Click to resend
        </p>
      </div>
    </div>
  );
};

export default Verification;
