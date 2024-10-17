"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "../../../images/icons/chevron-white.svg";
import InputField from "@/components/InputField";
import mailicon from "../../../images/icons/mail.svg";
import passwordopenicon from "../../../images/icons/eye.svg";
import Button from "@/components/Button";
import Link from "next/link";
import { validationSchema } from "@/app/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

type Props = {};

const Signup = (props: Props) => {
  const router=useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      router.push('/user/signup/basic-info')
      console.log(values);

    },
  });

  const password = formik.values.password;
  const hasEightCharacters = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);

  return (
    <div>
      <div className=" py-[32px] px-[24px] lg:px-[28px]">
        <p className="text-[#101928] text-[24px] lg:leading-[38px] lg:text-3xl font-medium">
          Welcome to Sendeet!
        </p>
        <p className="lg:text-base text-sm leading-[20px] font-normal text-[#989FAD] mt-[14px]">
          Let’s get your account set up. You’ll need your company mail and a few
          quick details. Ready to get started?
        </p>
        <form onSubmit={formik.handleSubmit} className="w-full">
          {" "}
          <div className="mt-[40px] flex flex-col gap-4">
            <InputField
              label="Work Email Address"
              iconSrc={mailicon}
              placeholder="email@company"
              inputType="email"
              id="email"
              name="email"
              error={Boolean(formik.touched.email && formik.errors.email)}
              errorText={formik.errors.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <div className="flex flex-col ">
              <InputField
                iconSrc={passwordopenicon}
                inputType="text"
                label="Password"
                name="password"
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                errorText={formik.errors.password}
                placeholder="*********"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <div className="flex  flex-wrap items-center gap-2 mt-2">
                <div
                  className={`p-[6px] border-[#D0D3D9] border-[0.5px] rounded-lg text-sm  ${
                    hasEightCharacters
                      ? "border-[#0F973D] text-[#0F973D] bg-[#ECFDF3]"
                      : "border-[#D0D3D9] border-[0.5px]  text-[#101928]"
                  }`}
                >
                  8 characters
                </div>
                <div
                  className={`p-[6px] border-[#D0D3D9] border-[0.5px] rounded-lg text-sm  ${
                    hasUppercase
                      ? "border-[#0F973D] text-[#0F973D] bg-[#ECFDF3]"
                      : "border-[#D0D3D9] border-[0.5px]  text-[#101928]"
                  }`}
                >
                  1 uppercase letter
                </div>
                <div
                  className={`p-[6px] border-[#D0D3D9] border-[0.5px] rounded-lg text-sm ${
                    hasNumber
                      ? "border-[#0F973D] text-[#0F973D] bg-[#ECFDF3]"
                      : "border-[#D0D3D9] border-[0.5px]  text-[#101928]"
                  }`}
                >
                  1 number
                </div>
                <div
                  className={`p-[6px] border-[#D0D3D9] border-[0.5px] rounded-lg text-sm  ${
                    hasSpecialChar
                      ? "border-[#0F973D] text-[#0F973D] bg-[#ECFDF3]"
                      : "border-[#D0D3D9] border-[0.5px]  text-[#101928]"
                  }`}
                >
                  1 special character
                </div>
              </div>
            </div>
          </div>
          <Button text="Basic Info" iconSrc={arrow} className="mt-[32px]" />
        </form>
        <div className="flex items-center mt-10 justify-center gap-1">
          <p className="text-[#667085]  text-sm leading-[20px]  lg:text-base  lg:leading-[20.3px]">
            Already registered?
          </p>
          <Link
            href={"/user/login"}
            className="text-[#009BE1] text-sm leading-[20px] lg:leading-[20.3px] lg:text-base font-semibold"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
