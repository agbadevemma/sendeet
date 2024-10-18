"use client";
import IconHolder from "@/components/IconHolder";
import React from "react";
import lock from "../../../images/icons/lock.svg";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import mailicon from "../../../images/icons/mail.svg";
import arrowleft from "../../../images/icons/arrow-left.svg";
import Image from "next/image";
import Link from "next/link";
import { ForgotPasswordSchema } from "@/app/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import passwordopenicon from "../../../images/icons/eye.svg";

type Props = {};

const CreateNewPassword = (props: Props) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      router.push("/user/checkmail");
    },
  });

  const password = formik.values.password;
  const hasEightCharacters = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  return (
    <div>
      <div className="pt-[96px] pb-[48px] px-[32px] min-h-screen">
        <div className="w-full max-w-[456px] mx-auto flex flex-col items-center">
          <IconHolder src={lock} className={``} />
          <p className="text-[#101928] mt-6 font-semibold lg:leading-[38px] text-2xl lg:text-[30px]">
            Set new password
          </p>
          <p className="text-[#667085] mt-2 lg:mt-3 text-base text-center">
            Your new password must be different to previously used passwords.
          </p>
          <form action="" onSubmit={formik.handleSubmit}>
            {" "}
            <div className="mt-[32px] flex flex-col gap-[24px] w-full">
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
                <div className="flex  flex-wrap lg:flex-nowrap items-center gap-2 mt-2">
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
                    className={`p-[6px] -mr-2 border-[#D0D3D9] border-[0.5px] rounded-lg text-sm  ${
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
              <Button
                text="Reset Password"
                type="submit"
                className="mt-[45px] lg:mt-[114px]"
              />
          </form>
          <Link
            href={"/user/login"}
            className="flex items-center gap-[8px] mt-[32px] w-fit mx-auto"
          >
            <Image src={arrowleft} alt="arrow" />{" "}
            <span className="text-[#667085] font-medium  text-sm">
              Back to log in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
