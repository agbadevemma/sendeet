"use client";
import Button from "@/components/buttons/Button";
import ErrorToast from "@/components/ErrorToast";
import OtpFields from "@/components/OtpFields";
import SuccessToast from "@/components/SuccessToast";
import SuccessToast2 from "@/components/SuccessToast2";
import { useAppDispatch } from "@/lib/hooks";
import { useResendOtpMutation, useVerifyOtpMutation } from "@/lib/slices/authApi";
import { toggleBasicInfo } from "@/lib/slices/miscellaneousSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";

type Props = {};

const Verification = () => {
  const [showOTPFields, setShowOTPFields] = useState(false);
  const [verifyOtp] =
    useVerifyOtpMutation();
  const [resendOtp] =
    useResendOtpMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [timer, setTimer] = useState(180);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  console.log(otp);
  useEffect(() => {
    secureLocalStorage.setItem("email", "olaimarnoel@gmail.com");
  }, [])



  const router = useRouter()
  const handleVerifyOTP = async () => {
    console.log(otp.join(""));
    if (otp.join("").length < 4) {
      setErrorMessage("Please enter a valid 4-digit code.");
      return;
    }
    try {
      const response = await verifyOtp(otp.join("")).unwrap();
      console.log("OTP Verified:", response);
      // dispatch(toggleBasicInfo(true));
      toast.success(
        <SuccessToast2
          message={"Success"}
          subMessage={response?.message}
        />,
        {
          icon: false, // Optional: Disable default icon
        }
      );
      router.push("/login")

    } catch (err: any) {
      // toast.error("Error verifying OTP");
      toast.error(
        <ErrorToast
          subMessage={err?.data?.error}
          message={"Error"}
        />,
        {
          icon: false, // Optional: Disable default icon
        }
      );
      // console.log("Error resending OTP:", err);

      console.log("Error verifying OTP:", err);
    }
  };
  const handleResendOtp = async () => {

    try {
      const response = await resendOtp(String(secureLocalStorage.getItem("email") || "")).unwrap();
      console.log("resent", response);
      // dispatch(toggleBasicInfo(true));
      toast.success(
        <SuccessToast2
          message={response.message}
        />,
        {
          icon: false, // Optional: Disable default icon
        }
      );
      setIsResendDisabled(true);
      setTimer(180);
      // router.push("/signup/company")

    } catch (err: any) {
      // toast.error("Error verifying OTP");

      toast.error(
        <ErrorToast
          subMessage={err?.data?.error}
          message={err?.data?.error}
        />,
        {
          icon: false, // Optional: Disable default icon
        }
      );
      console.log("Error resending OTP:", err);
    }
  };



  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

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
      <OtpFields setOtp={setOtp} otp={otp} />
      {errorMessage && (
        <div className="text-error-500 text-center text-xs mt-2">
          {errorMessage}
        </div>
      )}
      {/* 
      {showOTPFields ? (
        <Button
          className="mt-8"
          icon_style="txt"
          size="lg"
          type="primary"
          onClick={showOTPFields ? handleVerifyOTP : handleToggleOTPFields}
          text={showOTPFields ? "Verify Email" : "Enter Code Manually"}
        />
      ) : (
       
      )} */}
      <Button
        className="mt-8"
        icon_style="txt"
        size="lg"
        type="primary"
        onClick={handleVerifyOTP}
        text={"Verify Email"}
      />
      <div className="flex mt-8 items-center justify-center gap-1 text-center">
        <p className="text-grey-500 text-sm">Didn’t receive the email?</p>
        <button
          onClick={handleResendOtp}
          className={`text-primary-600   text-sm cursor-pointer ${isResendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isResendDisabled}>
          {isResendDisabled ? `Resend in ${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}` : "Click to resend"}
        </button>
      </div>
    </div>
  );
};

export default Verification;
