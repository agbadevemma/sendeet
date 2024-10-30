"use client";
import IconHolder from "@/components/IconHolder";
import React from "react";
import lock from "../../../images/icons/lock.svg";
import Button from "@/components/buttons/OnboardingButton";
import InputField from "@/components/InputField";
import mailicon from "../../../images/icons/mail.svg";
import arrowleft from "../../../images/icons/arrow-left.svg";
import Image from "next/image";
import Link from "next/link";
import { ForgotPasswordSchema } from "@/utils/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";


type Props = {};

const ForgotPassword = (props: Props) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      router.push("/checkmail")
    },
  });
  return (
    <div>
      <div className="pt-[96px] pb-[48px] px-[32px] min-h-screen">
        <div className="w-full max-w-[456px] mx-auto flex flex-col items-center">
          <IconHolder src={lock} className={``} />
          <p className=" mt-6 font-semibold text-display-xs  lg:text-display-md">
            Forgot password?
          </p>
          <p className="text-grey-500 mt-2 lg:mt-3 text-md">
            No worries, we’ll send you reset instructions.
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-[32px] flex flex-col gap-[24px] w-full"
          >
            <InputField
              inputType="email"
              label="Work Email Address"
              placeholder="example@companyname.com"
              iconSrc={mailicon}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              errorText={formik.errors.email}
            />
            <Button text="Reset Password" type="submit" />
          </form>
          <Link
            href={"login"}
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

export default ForgotPassword;
