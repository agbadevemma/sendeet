import React, { useState } from "react";
import Button from "../buttons/Button";
import PencilEdit from "@/icons/pencil-edit";
import Multiply from "@/icons/multiply";
import Copy from "@/icons/copy";
import Check from "@/icons/check";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransactionalDetailsModal = ({ isOpen, setIsOpen }: Props) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("TXN45683").then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        });
      };
  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`flex  justify-center items-center top-0 left-0 z-50 h-screen w-full bg-black/20 fixed  ${
          isOpen ? "visible" : "invisible"
        } `}
      >
        <div className="relative max-w-[523px] w-full">
          {" "}
          <div
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 rounded-lg absolute  right-0 mt-8  bg-white cursor-pointer p-2 flex items-center justify-center border border-[#E4E7EC]"
          >
            <Multiply color="#101928" height={16} width={16} />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className={` w-full h-fit min-h-32  bg-white rounded-2xl mt-[5rem] p-6  ease-in-out transition-all duration-500 ${
              isOpen ? "opacity-[100%] " : " opacity-0"
            }`}
          >
            <div className=" gap-4 font-medium text-[18px] text-center">
              Transaction Details
            </div>

            <div className="w-full mt-6 flex flex-col gap-5 border-b border-b-[#F0F1F3] pb-6">
              <div className="flex justify-between items-center">
                <p className="text-[#989FAD] text-[14px]">Organization Name</p>
                <p className="text-[#101828] font-medium text-[14px] ">
                  SkyHigh Travel Co.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#989FAD] text-[14px]">Transaction code</p>
                <div className="flex gap-2">
                  {" "}
                  <p   className="text-[#101828] font-medium text-[14px] ">
                    TXN45683
                  </p>
                  <div onClick={handleCopy} className="cursor-pointer">
                    {isCopied ? (
                      <Check color="#0B6B2B" height={24} width={24} />
                    ) : (
                      <Copy color="#B9BDC7" height={24} width={24} />
                    )}
                  </div>
                </div>
              </div>{" "}
              <div className="flex justify-between items-center">
                <p className="text-[#989FAD] text-[14px]">Date & Time</p>
                <p className="text-[#101828] font-medium text-[14px] ">
                  02/10/2024, 13:09:45
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#989FAD] text-[14px]">Transaction type</p>
                <p className="text-[#101828] font-medium text-[14px] ">
                  Credit Usage
                </p>
              </div>
            </div>
            <div className="w-full mt-6 flex flex-col gap-5 border-b border-b-[#F0F1F3] pb-6">
              <div className="flex justify-between items-center">
                <p className="text-[#989FAD] text-[14px]">Description</p>
                <p className=" underline text-primary-600 font-medium text-[14px] ">
                  Sent campaign #231
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#989FAD] text-[14px]">
                  Credit Amount Spent
                </p>
                <p className="text-[#101828] font-medium text-[14px] ">346</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#989FAD] text-[14px]">Credit Balance</p>
                <p className="text-[#101828] font-medium text-[14px] ">
                  31,610
                </p>
              </div>
            </div>

            <div className="w-full mt-6 flex flex-col gap-5 border-b border-b-[#F0F1F3] pb-5">
              <div className="flex justify-between items-center">
                <p className="text-[#989FAD] text-[14px]">Status</p>
                <p className=" bg-success-50 text-success-700 px-2 rounded-lg font-medium text-[14px] ">
                  Successful
                </p>
              </div>
            </div>

            <Button
              text="Download Receipt"
              type="primary"
              size="md"
              className="w-full mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionalDetailsModal;
