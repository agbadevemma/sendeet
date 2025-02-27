"use client";
import InputField from "@/components/InputField";
import {
  ForgotPasswordSchema,
  validationSchemaChangePassword,
} from "@/utils/validation";
import { useFormik } from "formik";
import React, { useState } from "react";
import passwordopenicon from "../../../../../images/icons/eye.svg";
import { useRouter } from "next/navigation";
import Eye from "@/icons/eye";
import EyeSlash from "@/icons/eye-slash";
import TextButton from "@/components/buttons/TextButton";
import Button from "@/components/buttons/Button";
import ToggleButton from "@/components/ToggleButton";
import { useUpdatePasswordMutation } from "@/lib/slices/userApi";
import Spinner from "@/components/spinner";
import { useLogoutMutation } from "@/lib/slices/authApi";
import { toast } from "react-toastify";
import SuccessToast2 from "@/components/SuccessToast2";
import ErrorToast from "@/components/ErrorToast";

type Props = {};

const Security = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [oldPasswordVisible, setOldPasswordVisible] = useState<boolean>(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState<boolean>(false);
  const [isToggle, setToggle] = useState<boolean>(false);
  const [logout] = useLogoutMutation();
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchemaChangePassword,
    onSubmit: async (values, formikHelpers) => {
      console.log("Form values:", values);
      try {
        await updatePassword({
          currentPassword: values.oldPassword,
          newPassword: values.confirmPassword,
        }).unwrap();
        toast.success(<SuccessToast2 message={"Password Change successful!"} />, {
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
        await logout().unwrap();

        formikHelpers.resetForm();
      } catch (err:any) {

        toast.error(<ErrorToast message={err.data.message} />, {
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

  const validatePassword = (password: string) => {
    return {
      hasEightCharacters: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[@$!%*?&]/.test(password),
    };
  };
  const newPasswordValidation = validatePassword(formik.values.newPassword);
  const confirmPasswordValidation = validatePassword(
    formik.values.confirmPassword
  );

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      {" "}
      <p className="text-[18px] size font-medium">Security</p>
      <p className="text-xs text-[#667085]">Manage your login information</p>
      <hr className="bg-[#E4E7EC]  mt-6" />
      <form onSubmit={formik.handleSubmit}>
        {" "}
        <div className="flex mt-5">
          <div className="flex flex-col">
            {" "}
            <p className="text-[18px] size font-medium">Change Password</p>
            <p className="text-xs text-[#667085]">Input the new password</p>
          </div>
          <div className="flex flex-col gap-8 w-full max-w-[546px] mx-auto ">
            <InputField
              onClick={() => setOldPasswordVisible(!oldPasswordVisible)}
              icon={
                oldPasswordVisible ? (
                  <Eye color="#667085" />
                ) : (
                  <EyeSlash width={20} height={20} color="#667085" />
                )
              }
              inputType={oldPasswordVisible ? "text" : "password"}
              label="Old Password"
              name="oldPassword"
              error={Boolean(
                formik.touched.oldPassword && formik.errors.oldPassword
              )}
              errorText={formik.errors.oldPassword}
              placeholder="***********"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oldPassword}
            />

            <div className="flex gap-2 flex-col">
              <InputField
                onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                icon={
                  newPasswordVisible ? (
                    <Eye color="#667085" />
                  ) : (
                    <EyeSlash width={20} height={20} color="#667085" />
                  )
                }
                inputType={newPasswordVisible ? "text" : "password"}
                label="New Password"
                name="newPassword"
                error={Boolean(
                  formik.touched.newPassword && formik.errors.newPassword
                )}
                errorText={formik.errors.newPassword}
                placeholder="*********"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
              />
              <PasswordValidationChecklist {...newPasswordValidation} />
            </div>
            <div className="flex gap-2 flex-col">
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
                label="Confirm Password"
                name="confirmPassword"
                error={Boolean(
                  formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                )}
                errorText={formik.errors.confirmPassword}
                placeholder="*********"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <PasswordValidationChecklist {...confirmPasswordValidation} />
            </div>
          </div>
        </div>
        <hr className="bg-[#E4E7EC]  mt-5" />
        <div className="flex mt-5 ">
          <div className="flex flex-col max-w-[305px]">
            <p className="text-[18px] size font-medium">
              Two - step verification
            </p>
            <p className="text-xs text-[#667085]">
              We recommend requiring a verification code in addition to your
              password
            </p>
          </div>
          <div className=" w-full max-w-[546px] mx-auto ml-20">
            <div className="flex gap-2 w-fit">
              <ToggleButton
                onToggle={() => setToggle((prev) => !prev)}
                isToggled={isToggle}
              />
              <span className="text-grey-800  text-sm  font-medium">
                Two - step verification
              </span>
            </div>
          </div>
        </div>
        <hr className="bg-[#E4E7EC]  mt-5" />
        <div className="flex mt-16 items-center justify-end gap-3 mb-10">
          <TextButton
            text="Cancel"
            size="sm"
            className="font-semibold text-md"
          />
          <Button
            text="Save Changes"
            type="primary"
            size="sm"
            className="font-semibold text-md"
          />
        </div>
      </form>
    </div>
  );
};

const PasswordValidationChecklist = ({
  hasEightCharacters,
  hasUppercase,
  hasNumber,
  hasSpecialChar,
}: {
  hasEightCharacters: boolean;
  hasUppercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 mt-2">
      <ValidationItem isValid={hasEightCharacters} text="8 characters" />
      <ValidationItem isValid={hasUppercase} text="1 uppercase letter" />
      <ValidationItem isValid={hasNumber} text="1 number" />
      <ValidationItem isValid={hasSpecialChar} text="1 special character" />
    </div>
  );
};

// Reusable validation item component
const ValidationItem = ({
  isValid,
  text,
}: {
  isValid: boolean;
  text: string;
}) => {
  return (
    <div
      className={`p-[6px] border-[0.5px] rounded-lg text-sm ${
        isValid
          ? "border-success-500 text-success-500 bg-[#ECFDF3]"
          : "border-grey-100"
      }`}
    >
      {text}
    </div>
  );
};

export default Security;
