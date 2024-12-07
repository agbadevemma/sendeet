import React from "react";
import Button from "../buttons/Button";
import PencilEdit from "@/icons/pencil-edit";
import Multiply from "@/icons/multiply";
import InputField from "../InputField";
import CheckCircle from "@/icons/check-circle";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdjustOrganizationModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div>
      {" "}
      <div
        onClick={() => setIsOpen(false)}
        className={`flex justify-center top-0 left-0 z-50 h-screen w-full bg-black/20 fixed ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`max-w-[523px] w-full h-fit min-h-32 bg-white rounded-2xl mt-[5rem] p-6 pb-10 ease-in-out transition-all duration-700 ${
            isOpen ? "-translate-y-0 " : " -translate-y-[150%]"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <Button
                className="!h-12 !w-12"
                size="md"
                icon_style="icon-only"
                iconComponent={
                  <PencilEdit color="#383E49" height={24} width={24} />
                }
              />
              <div className="flex flex-col">
                <p className="text-[20px] font-semibold">
                  Adjust Organization Credits
                </p>
                <p className="text-[14px] text-[#5D6679]">
                  Add credits to this Organization account
                </p>
              </div>
            </div>
            <div   onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-lg cursor-pointer p-2 flex items-center justify-center border border-[#E4E7EC]">
              <Multiply color="#101928" height={16} width={16} />
            </div>
          </div>

          <div className="w-full mt-14 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <p className="text-[#989FAD] text-[14px]">Organization Name</p>
              <p className="text-[#101828] font-medium text-[14px] ">
                SkyHigh Travel Co.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#989FAD] text-[14px]">Credit Balance</p>
              <p className="text-[#101828] font-medium text-[14px] ">243</p>
            </div>{" "}
            <div className="flex justify-between items-center">
              <p className="text-[#989FAD] text-[14px]">Last Top up Date</p>
              <p className="text-[#101828] font-medium text-[14px] ">10</p>
            </div>
          </div>

          <div className=" mt-10 flex flex-col gap-4">
            <InputField
              label="Credit Amount"
              inputType="text"
              placeholder="Enter the amount to add "
            />
            <InputField
              label="New Credit Balance"
              inputType="text"
              placeholder="3000"
            />
          </div>
          <div className="flex justify-end mt-8 gap-4">
            <Button text="Cancel" size="md" />
            <Button
              text="Top Up Credits"
              type="primary"
              size="md"
              onClick={() => {
                toast.success(
                  <div className="flex items-start justify-between w-full  py-2 px-4 ">
                    <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-success-50 border border-success-500">
                      {" "}
                      <CheckCircle color="#0F973D" />
                    </div>
                    <div className="gap-1 flex flex-col mr-4 ">
                      <p className="!text-[14px] !font-medium text-[#101828]">
                        Credits Added
                      </p>
                      <p className=" !text-[14px] !font-normal text-[#667085]">
                        Credits successfully topped up for SkyHigh Travel Co.
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
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustOrganizationModal;
