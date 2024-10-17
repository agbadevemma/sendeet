import IconHolder from "@/components/IconHolder";
import React from "react";
import lock from "../../../images/icons/lock.svg";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import mailicon from "../../../images/icons/mail.svg";

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <div>
      <div className="pt-[96px] pb-[48px] px-[32px] min-h-screen">
        <div className="w-full max-w-[456px] mx-auto flex flex-col items-center">
          <IconHolder src={lock} className={``} />
          <p className="text-[#101928] mt-6 font-semibold leading-[38px]  text-[30px]">
            Forgot password?
          </p>
          <p className="text-[#667085] mt-3 text-base">
            No worries, we’ll send you reset instructions.
          </p>
          <div className="my-[32px] flex flex-col gap-[24px] w-full">
            <InputField
              inputType=" text"
              label="Work Email Address"
              placeholder="example@companyname.com"
              iconSrc={mailicon}
            />
            <Button text="Reset Password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
