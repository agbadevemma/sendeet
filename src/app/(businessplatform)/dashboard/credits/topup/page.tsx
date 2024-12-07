"use client";
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import ChevronLeft from "@/icons/chevron-left";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import flutterwave from "./../../../../../images/paylogos/flutterwave.svg";
import paystack from "./../../../../../images/paylogos/paystack.svg";
import RadioButton from "@/components/RadioButton";
import { creditsData } from "@/utils/data";
import { useRouterWithLoading } from "@/hooks/useRouterLoading";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CheckCircle from "@/icons/check-circle";

type Props = {};

const Topup = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [value, setValue] = useState<string>(
    creditsData[0].price.toLocaleString()
  );
  const [payChoice, setPayChoice] = useState<"flutterwave" | "paystack">(
    "flutterwave"
  );
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      <div className="w-full flex flex-col  -mr-[10rem] -mt-[4px]  ">
        <div className="flex  w-full   h-fit   gap-5 items-start   lg:pl-10">
          <Link href={"/dashboard/campaigns"}>
            {" "}
            <Button
              icon_style="icon-only"
              size="sm"
              iconComponent={<ChevronLeft color="black" />}
            />
          </Link>
          <div className="flex flex-col gap-1 w-full text-nowrap">
            <p className="text-sm font-semibold">Top up Credits</p>
            <p className="text-grey-500 text-sm">Select your payment details</p>
          </div>
        </div>
        <div className="flex  mt-4 w-full">
          <hr className="w-full h-px -mx-8 border-grey-100" />
          <hr className="w-full h-px  -mr-[24.5px] border-grey-100 " />
        </div>
      </div>
      <div className="h-full bg-[#FCFCFD] flex-col flex items-center justify-center lg:px-10 pt-10">
        <div className="w-full p-4 py-8 rounded-2xl max-w-[516px] bg-white border border-solid border-[#E4E7EC] ">
          <InputField
            inputType="string"
            label="Input amount"
            placeholder="3000"
            disabled={true}
            value={Number(value).toLocaleString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
          <div className="grid grid-cols-3 mt-4 gap-4">
            {creditsData.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                  setValue(item.price);
                }}
                className={`flex p-4 gap-3 rounded-xl text-grey-700 border flex-col cursor-pointer items-center justify-center ${
                  index === selectedIndex
                    ? "bg-primary-50 border-primary-500"
                    : " bg-white  border-grey-50 "
                }`}
              >
                <span>₦{Number(item.price).toLocaleString()}</span>
                <span className="text-base font-semibold">{item.credits}</span>
              </div>
            ))}
          </div>
          <p className="text-[18px] font-medium mt-6">Select payment method</p>
          <div className="flex flex-col gap-3 mt-3">
            <div
              onClick={() => setPayChoice("paystack")}
              className="p-4 bg-white flex items-center justify-between rounded-[12px] border border-[#F0F2F5] cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {" "}
                <Image src={paystack} alt="image" /> Paystack
              </div>
              <RadioButton checked={payChoice === "paystack"} />
            </div>
            <div
              onClick={() => setPayChoice("flutterwave")}
              className="p-4 bg-white flex items-center justify-between rounded-[12px] border border-[#F0F2F5] cursor-pointer"
            >
              <div className="flex items-center">
                {" "}
                <Image
                  src={flutterwave}
                  alt="image"
                  className="object-contain w-9"
                />{" "}
                Flutterwave
              </div>
              <RadioButton checked={payChoice === "flutterwave"} />
            </div>
          </div>

          <div className="flex w-full items-center gap-3 mt-14">
            <div className="w-full">
              <Button text="Go back" className="!py-3" size="sm" />{" "}
            </div>
            <div
              onClick={() => {
                if (value.length === 0) {
                  toast.error("Enter Input Amount");
                  return;
                }
                toast.success(
                  <div className="flex items-start justify-between w-full  py-2 px-4 ">
                    <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-success-50 border border-success-500">
                      {" "}
                      <CheckCircle color="#0F973D" />
                    </div>

                    <div className="gap-1 flex flex-col mr-4 ">
                      <p className="!text-[14px] !font-medium text-[#101828]">
                        Payment successful
                      </p>
                      <p className=" !text-[14px] !font-normal text-[#667085]">
                        500 credits have been added to your account
                      </p>
                    </div>
                  </div>,

                  {
                    style: {
                      width: "100%", // Adjust width as needed
                      maxWidth: "",
                    },
                    className:
                      " text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]  ", // Tailwind classes
                    bodyClassName:
                      "text-sm  flex flex-col w-full max-w-[400px]  !w-full !p-12",
                    progressClassName: "bg-red-200",
                    icon: false,

                    // closeButton: false,
                  }
                );

                router.push("/dashboard/credits");
              }}
              className="w-full"
            >
              {" "}
              <Button
                text="Make payment"
                className="!py-3"
                size="sm"
                type="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
