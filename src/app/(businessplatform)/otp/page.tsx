"use client"
import IconHolder from "@/components/IconHolder";
import React, { useState } from 'react';
import lock from "../../../images/icons/lock.svg";
import Button from "@/components/buttons/OnboardingButton";
import OtpFields from '@/components/OtpFields';
import Image from "next/image";
import Link from "next/link";
import arrowleft from "../../../images/icons/arrow-left.svg";
import secureLocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";

type Props = {};

const OTP = (props: Props) => {
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
    const router = useRouter()
    const [error, setError] = useState<boolean>(false);
    const handleSubmit = () => {

        if (otp.some(digit => digit.trim() === "")) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000)
            return;
        }
        setError(false);
        console.log("OTP submitted:", otp.join(""));
        secureLocalStorage.setItem('otp', otp);
        router.push("/createnewpassword")
    }

    return (
        <div>
            <div className="pt-[96px] pb-[48px] px-[32px] min-h-screen">
                <div className="w-full max-w-[456px] mx-auto flex flex-col items-center">
                    {/* Icon to indicate password change */}
                    <IconHolder src={lock} className={``} />

                    {/* Heading and instructions */}
                    <p className="mt-6 text-center font-semibold text-display-xs lg:text-display-md">
                        Enter OTP
                    </p>
                    <p className="text-grey-500 mt-2 lg:mt-3 text-md text-center">
                        Please enter the 4-digit code sent to your registered email address to continue with resetting your password.
                    </p>

                    {/* OTP input form */}
                    <div className="mt-[32px] flex flex-col gap-[24px] w-full">
                        <OtpFields setOtp={setOtp} otp={otp} />
                        <div className={`text-red-500 text-sm transition-opacity duration-500 ease-in-out ${error ? "opacity-100" : "opacity-0"
                            }`}>{"Please enter a complete 4-digit OTP."}</div>
                        <Button text="Verify & Reset Password" type="submit" onClick={() => handleSubmit()} />
                    </div>

                    {/* Navigation back to login */}
                    <Link
                        href={"login"}
                        className="flex items-center gap-[8px] mt-[32px] w-fit mx-auto"
                    >
                        <Image src={arrowleft} alt="Back to login" />
                        <span className="text-grey-500 font-medium text-sm">
                            Back to log in
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OTP;
