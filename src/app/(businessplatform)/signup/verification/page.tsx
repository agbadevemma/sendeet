"use client";
import Button from "@/components/buttons/Button";
import OtpFields from "@/components/OtpFields";
import SuccessToast from "@/components/SuccessToast";
import SuccessToast2 from "@/components/SuccessToast2";
import { useAppDispatch } from "@/lib/hooks";
import { useVerifyOtpMutation } from "@/lib/slices/authApi";
import { toggleBasicInfo } from "@/lib/slices/miscellaneousSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";

type Props = {};

const Verification = () => {
  const [showOTPFields, setShowOTPFields] = useState(false);
  const [verifyOtp, { isLoading, isError, isSuccess, error }] =
    useVerifyOtpMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  console.log(otp);

  const dispatch = useAppDispatch();

  const handleToggleOTPFields = () => {
    setShowOTPFields((prev) => !prev);
  };
  const router = useRouter()
  const handleOnclick = async () => {
    console.log(otp.join(""));
    if (otp.join("").length < 4) {
      setErrorMessage("Please enter a valid 4-digit code.");
      return;
    }
    try {
      const response = await verifyOtp(otp.join("")).unwrap();
      // console.log("OTP Verified:", response);
      // dispatch(toggleBasicInfo(true));
      toast.success(
        <SuccessToast2
          message="Success"
        />,
        {
          icon: false, // Optional: Disable default icon
        }
      );
      router.push("/signup/company")

    } catch (err) {
      // toast.error("Error verifying OTP");

      console.log("Error verifying OTP:", err);
    }
  };


  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000); // Clear error after 5 seconds

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [errorMessage]);
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
          {String(secureLocalStorage.getItem("email") || "")}
        </span>
      </p>
      <div className="flex w-full justify-center items-center  mt-8 gap-10"></div>
      {showOTPFields && <OtpFields setOtp={setOtp} otp={otp} />}
      {errorMessage && (
        <div className="text-error-500 text-center text-xs mt-2">
          {errorMessage}
        </div>
      )}

      {showOTPFields ? (
        <Button
          className="mt-8"
          icon_style="txt"
          size="lg"
          type="primary"
          onClick={showOTPFields ? handleOnclick : handleToggleOTPFields}
          text={showOTPFields ? "Verify Email" : "Enter Code Manually"}
        />
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
