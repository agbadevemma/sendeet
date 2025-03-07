"use client";
import IconHolder from "@/components/IconHolder";
import React from "react";
import lock from "../../../images/icons/lock.svg";
import mail from "../../../images/icons/mail2.svg";
import Button from "@/components/buttons/OnboardingButton";
import InputField from "@/components/InputField";
import mailicon from "../../../images/icons/mail.svg";
import arrowleft from "../../../images/icons/arrow-left.svg";
import Image from "next/image";
import Link from "next/link";
import { ForgotPasswordSchema } from "@/utils/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";

type Props = {};

const Checkmail = (props: Props) => {
  console.log("sds", secureLocalStorage?.getItem("email"));

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      router.push("/passwordreset");
    },
  });
  return (
    <div>
      <div className="pt-[96px] pb-[48px] px-[32px] min-h-screen">
        <div className="w-full max-w-[456px] mx-auto flex flex-col items-center">
          <IconHolder src={mail} className={``} />
          <p className=" mt-6 font-semibold text-display-xs lg:text-display-sm">
            Check your email
          </p>
          <p className="text-grey-500  lg:mt-3 text-md text-center">
            <p className=""> We sent a password reset link to </p>
            <p className="font-medium ">{secureLocalStorage?.getItem("email")?.toString() ?? ""}</p>
          </p>

          <Link href={"/otp"} className="w-full mt-[32px]">
            <Button text="Enter OTP" type="button" className=" " />
          </Link>
          <div className=" flex items-center w-fit mx-auto mt-[32px] gap-[4px]">
            <span className="text-grey-500 text-sm">Didn’t receive the email?</span>
            <button className="text-primary-600 text-sm font-medium ">Click to resend</button>
          </div>
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

export default Checkmail;
