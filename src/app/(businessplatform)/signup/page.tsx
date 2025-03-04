"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "../../../images/icons/chevron-white.svg";
import InputField from "@/components/InputField";
import mailicon from "../../../images/icons/mail.svg";
import passwordopenicon from "../../../images/icons/eye.svg";

import Link from "next/link";
import { validationSchema } from "@/utils/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/Button";
import ChevronRight from "@/icons/chevron-right";
import Eye from "@/icons/eye";
import EyeSlash from "@/icons/eye-slash";
import Message from "@/icons/message";
import Mail from "@/icons/mail";
import secureLocalStorage from "react-secure-storage";
import { useSignupMutation } from "@/lib/slices/authApi";
import { toast } from "react-toastify";
import ErrorToast from "@/components/ErrorToast";
import SuccessToast from "@/components/SuccessToast";
import SuccessToast2 from "@/components/SuccessToast2";

type Props = {};

const Signup = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [signup, { isLoading, isError, error }] = useSignupMutation();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const data = await signup({ ...values, role: "business" }).unwrap();
        console.log("value", data);
        toast.success(<SuccessToast2 message={"Success"} />, {
          style: {
            width: "100%",
            maxWidth: "",
          },
          className:
            "text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]",
          bodyClassName:
            "text-sm flex flex-col w-full max-w-[400px] !w-full !p-12",
          progressClassName: "bg-red-200",
          icon: false,
        });
        router.push("signup/verification");
      } catch (err: any) {
        console.error("Registration error:", err);
        toast.error(<ErrorToast message={err?.data.message} />, {
          style: {
            width: "100%", // Adjust width as needed
            maxWidth: "",
          },
          className:
            "text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]",
          bodyClassName:
            "text-sm flex flex-col w-full max-w-[400px] !w-full !p-12",
          progressClassName: "bg-red-200",
          icon: false,
          // closeButton: false, // Uncomment if you want to hide the close button
        });
      }
      // secureLocalStorage.setItem("email", values.email);
      console.log(values);
    },
  });

  const password = formik.values.password;
  const hasEightCharacters = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div>
      <div className=" py-[32px] px-[24px] lg:px-[28px]">
        <p className=" text-display-xs  lg:text-display-sm font-medium">
          Welcome to Sendeet!
        </p>
        <p className="lg:text-md text-sm font-normal text-grey-300 mt-[14px]">
          Let’s get your account set up. You’ll need your company mail and a few
          quick details. Ready to get started?
        </p>
        <form onSubmit={formik.handleSubmit} className="w-full">
          {" "}
          <div className="mt-[40px] flex flex-col gap-4">
            <InputField
              label="Work Email Address"
              icon={<Mail color="#667085" />}
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
                onClick={() => setPasswordVisible(!passwordVisible)}
                icon={
                  passwordVisible ? (
                    <Eye color="#667085" />
                  ) : (
                    <EyeSlash width={20} height={20} color="#667085" />
                  )
                }
                inputType={passwordVisible ? "text" : "password"}
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
                  className={`p-[6px] border-grey-100 border-[0.5px] rounded-lg text-sm  ${
                    hasEightCharacters
                      ? "border-success-500 text-success-500 bg-[#ECFDF3]"
                      : "border-grey-100 border-[0.5px]  "
                  }`}
                >
                  8 characters
                </div>
                <div
                  className={`p-[6px] border-grey-100 border-[0.5px] rounded-lg text-sm  ${
                    hasUppercase
                      ? "border-success-500 text-success-500 bg-[#ECFDF3]"
                      : "border-grey-100 border-[0.5px]  "
                  }`}
                >
                  1 uppercase letter
                </div>
                <div
                  className={`p-[6px] border-grey-100 border-[0.5px] rounded-lg text-sm ${
                    hasNumber
                      ? "border-success-500 text-success-500 bg-[#ECFDF3]"
                      : "border-grey-100 border-[0.5px]  "
                  }`}
                >
                  1 number
                </div>
                <div
                  className={`p-[6px] border-grey-100 border-[0.5px] rounded-lg text-sm  ${
                    hasSpecialChar
                      ? "border-success-500 text-success-500 bg-[#ECFDF3]"
                      : "border-grey-100 border-[0.5px]  "
                  }`}
                >
                  1 special character
                </div>
              </div>
            </div>
          </div>
          <Button
            text={isLoading ? "Registering..." : "Basic Info"}
            size="lg"
            type="primary"
            icon_style="trailing icon"
            iconComponent={<ChevronRight color="#fff" />}
            className="mt-[32px]"
          />
        </form>
        <div className="flex items-center mt-10 justify-center gap-1">
          <p className="text-grey-500  text-sm   ">Already registered?</p>
          <Link
            href={"login"}
            className="text-primary-600 text-sm  font-semibold"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
