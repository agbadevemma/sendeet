"use client";
import InputField from "@/components/InputField";
import logo from "../../../images/Logo.png";
import Image from "next/image";
import mailicon from "../../../images/icons/mail.svg";
import passwordopenicon from "../../../images/icons/eye.svg";

import Link from "next/link";
import { useFormik } from "formik";
import { validationSchemaLogin } from "@/utils/validation";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/Button";
import Eye from "@/icons/eye";
import { useEffect, useState } from "react";
import EyeSlash from "@/icons/eye-slash";
import Mail from "@/icons/mail";
import { useLoginMutation } from "@/lib/slices/authApi";
import { toast } from "react-toastify";
import ErrorToast from "@/components/ErrorToast";
import secureLocalStorage from "react-secure-storage";
import SuccessToast2 from "@/components/SuccessToast2";
type Props = {};

const LoginPage = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [login, { isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    secureLocalStorage.clear()
  }, [])

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: async (values) => {
      console.log("Form data:", values);
      try {
        const data = await login(values).unwrap();
        console.log("Token:", data?.message);
        toast.success(<SuccessToast2 message={data?.message} />, {
          style: {
            width: '100%', // Adjust width as needed
            maxWidth: '',
          },
          className:
            'text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]',
          bodyClassName:
            'text-sm flex flex-col w-full max-w-[400px] !w-full !p-12',
          progressClassName: 'bg-red-200',
          icon: false,
          // closeButton: false, // Uncomment if you want to hide the close button
        });
        // router.push("/dashboard");
      } catch (error: any) {
        console.log("Login error:", error);
        toast.error(<ErrorToast message={error?.data.message} />, {
          style: {
            width: '100%', // Adjust width as needed
            maxWidth: '',
          },
          className:
            'text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]',
          bodyClassName:
            'text-sm flex flex-col w-full max-w-[400px] !w-full !p-12',
          progressClassName: 'bg-red-200',
          icon: false,
          // closeButton: false, // Uncomment if you want to hide the close button
        });
      }
    },
  });
  return (
    <div>
      <div className="w-full min-h-screen pt-[106px] lg:pt-1  flex flex-col items-center  justify-center gap-4 lg:gap-[57.2px]">
        <Image src={logo} alt="logo" className=" w-32" />
        <div className="relative w-full  lg:max-w-[535px] lg:rounded-[16px]  lg:px-[1px] lg:py-[1px]">
          <div className="absolute lg:block hidden inset-0 p-[0px] lg:rounded-[16px] bg-gradient-to-r from-secondary-500 to-primary-500"></div>
          <div className="relative w-full h-full lg:py-4 bg-white lg:rounded-[16px] px-[24px] md:px-[92px] lg:px-[28px]">
            <div className="lg:py-8 py-3 h-full">
              <p className=" text-display-xs lg:text-display-sm font-semibold ">
                Login to your account
              </p>
              <p className=" text-sm lg:text-md  mt-[14px] text-grey-300">
                Welcome back! Let’s get you into Sendeet
              </p>
              <form onSubmit={formik.handleSubmit} className="w-full">
                <div className="flex flex-col mt-10 gap-4">
                  <InputField
                    icon={<Mail color="#667085" />}
                    inputType="email"
                    label="Work Email Address"
                    id="email"
                    name="email"
                    placeholder="example@companyname.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    errorText={formik.errors.email}
                  />
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
                    id="password"
                    name="password"
                    placeholder="*********"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                      formik.touched.password && formik.errors.password
                    )}
                    errorText={formik.errors.password}
                  />
                </div>
                <div className="flex text-primary-600 items-end justify-end w-full mt-[8px]">
                  <Link
                    href={"forgotpassword"}
                    className="text-right font-medium  text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Button
                  text={"Continue"}
                  className="mt-8"
                  size="lg"
                  type="primary"
                />
              </form>
              <div className="flex items-center mt-10 justify-center gap-1">
                <p className="text-grey-500  text-sm   ">Are you new here?</p>
                <Link
                  href={"signup"}
                  className="text-primary-600 text-sm  font-semibold"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
