import Image from "next/image";
import React from "react";
import bg from "../../images/bgopt.png";
import logo from "../../images/Logo.png";
import InputField from "@/components/InputField";
import Call from "@/icons/call";
import qrcode from "../../images/qrcode2.png";
import Button from "@/components/buttons/Button";

type Props = {};

const OptIn = (props: Props) => {
  return (
    <div className=" lg:relative px-7 lg:px-0  w-full">
      <Image
        src={bg}
        alt="bg"
        className="object-cover min-h-screen lg:block hidden "
      />
      <div className="lg:absolute gap-9 lg:h-[90%]  py-10 lg:py-0 lg:px-[79px] flex lg:flex-row flex-col items-center  justify-between rounded-xl lg:top-1/2 lg:-translate-y-1/2 left-0 right-0   w-full max-w-[1116px] mx-auto bg-white">
        <div className="gap-8 flex flex-col items-center w-full lg:w-fit">
          <Image src={logo} alt="logo" className="w-32" />
          <div className="py-8 lg:px-7 flex-col flex lg:border w-full lg:w-fit border-grey-100 rounded-xl">
            <p className="text-2xl font-bold text-center">
              Subscribe via WhatsApp
            </p>
            <span className="text-md mt-[14px] font-medium  text-center text-[#667085]">
              Subscribe to receive premium updates from us
            </span>
            <form className="mt-[32px] w-full">
              <InputField
                inputType="number"
                label="WhatsApp No"
                placeholder="Enter Phone No"
                icon={<Call color="#667185" />}
              />
              <div className="h-[44px]">
             
                <Button
                  text="Subscribe"
                  size="lg"
                  type="primary"
                  className="mt-8"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex gap-4 lg:flex-col lg:h-full items-center w-full lg:w-fit justify-center">
          <div className="w-full lg:h-[30%] lg:w-fit h-px border bg-grey-100"></div>
          <span className="text-grey-200 text-xl font-medium">OR</span>
          <div className="w-full lg:h-[30%]   lg:w-fit h-px border bg-grey-100 "></div>
        </div>
        <div className=" text-center">
          <div className=" mx-auto">
            <Image src={qrcode} alt="qrcode" className="mx-auto" />
          </div>
          <p className="mt-[25px] text-2xl font-bold">
            Scan the QR code to Subscribe
          </p>
          <p className="mt-[14px] text-grey-600 font-medium text-base">
            You will be redirected to our contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptIn;
