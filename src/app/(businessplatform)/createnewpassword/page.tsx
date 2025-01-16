"use client";

import IconHolder from "@/components/IconHolder";
import React, { useState } from "react";
import lock from "../../../images/icons/lock.svg";
import Button from "@/components/buttons/OnboardingButton";
import InputField from "@/components/InputField";
import mailicon from "../../../images/icons/mail.svg";
import arrowleft from "../../../images/icons/arrow-left.svg";
import Image from "next/image";
import Link from "next/link";
import { changePasswordSchema, ForgotPasswordSchema } from "@/utils/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import passwordopenicon from "../../../images/icons/eye.svg";
import { useSetNewPasswordMutation } from "@/lib/slices/resetApi";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";
import ErrorToast from "@/components/ErrorToast";
import Eye from "@/icons/eye";
import EyeSlash from "@/icons/eye-slash";

const CreateNewPassword = () => {
  const [setNewPassword, { isLoading }] = useSetNewPasswordMutation();
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: { password: "" },
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
      try {
        const res = await setNewPassword({
          otp: secureLocalStorage.getItem("otp")?.toString().replace(/,/g, "") ?? "",
          newPassword: values.password,
        }).unwrap();
        router.push("/passwordreset");
      } catch (error: any) {
        toast.error(<ErrorToast message={error?.data?.message} />, {
          style: { width: "100%", maxWidth: "" },
          className: "text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]",
          bodyClassName: "text-sm flex flex-col w-full max-w-[400px] !w-full !p-12",
          progressClassName: "bg-red-200",
          icon: false,
        });
      }
    },
  });

  const password = formik.values.password;
  const hasEightCharacters = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);

  return (
    <div className="pt-[96px] pb-[48px] px-[32px] min-h-screen">
      <div className="w-full max-w-[456px] mx-auto flex flex-col items-center">
        <IconHolder src={lock} />
        <p className="mt-6 font-semibold text-display-xs lg:text-display-sm">Set new password</p>
        <p className="text-grey-500 mt-2 lg:mt-3 text-md text-center">
          Your new password must be different from previously used passwords.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-[32px] flex flex-col gap-[24px] w-full">
            <div className="flex flex-col">
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
                error={Boolean(formik.touched.password && formik.errors.password)}
                errorText={formik.errors.password}
                placeholder="*********"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 mt-2">
                <div
                  className={`p-[6px] border-grey-100 border-[0.5px] rounded-lg text-sm ${hasEightCharacters
                    ? "border-success-500 text-success-500 bg-[#ECFDF3]"
                    : "border-grey-100"}`}
                >
                  8 characters
                </div>
                <div
                  className={`p-[6px] border-grey-100 border-[0.5px] rounded-lg text-sm ${hasUppercase
                    ? "border-success-500 text-success-500 bg-[#ECFDF3]"
                    : "border-grey-100"}`}
                >
                  1 uppercase letter
                </div>
                <div
                  className={`p-[6px] border-grey-100 border-[0.5px] rounded-lg text-sm ${hasNumber
                    ? "border-success-500 text-success-500 bg-[#ECFDF3]"
                    : "border-grey-100"}`}
                >
                  1 number
                </div>
                <div
                  className={`p-[6px] -mr-2 border-grey-100 border-[0.5px] rounded-lg text-sm ${hasSpecialChar
                    ? "border-success-500 text-success-500 bg-[#ECFDF3]"
                    : "border-grey-100"}`}
                >
                  1 special character
                </div>
              </div>
            </div>
          </div>
          <Button text="Reset Password" type="submit" className="mt-[45px] lg:mt-[114px]" />
        </form>
        <Link href={"/login"} className="flex items-center gap-[8px] mt-[32px] w-fit mx-auto">
          <Image src={arrowleft} alt="arrow" />
          <span className="text-grey-500 font-medium text-sm">Back to log in</span>
        </Link>
      </div>
    </div>
  );
};

export default CreateNewPassword;
