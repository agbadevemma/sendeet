import React from "react";
import Button from "./buttons/Button";
import Stack from "@/icons/stack";
import Multiply from "@/icons/multiply";

type Billing = {
  planName: string;
  planDescription: string;
};
type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  selectedBilling: Billing;
};
const Upgrade = ({ setIsOpen, isOpen, selectedBilling }: Props) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`pt-[6%] top-0 left-0 z-50 h-screen overflow-auto p-4 w-full flex md:items-center md:justify-center bg-gray-500/20 backdrop-blur-sm fixed overflow   ${
        isOpen ? "visible" : "invisible"
      } `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col w-full max-w-3xl rounded-lg shadow-md h-full  md:h-fit  p-4 bg-white ease-in-out transition-all duration-700  ${
          isOpen ? "opacity-[100%] " : " opacity-0"
        }`}
      >
        <div className="flex items-center justify-between w-full border-b border-b-grey-50 py-4">
          <div className="flex gap-1.5">
            <div className=" flex items-center  bg-white  justify-center p-2 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <Stack color="black" height={24} width={24} />
            </div>
            <div className="flex flex-col">
              <p className="font-medium">
                Upgrade to {selectedBilling.planName}
              </p>
              <p className="text-grey-600 text-xs">
                {selectedBilling.planDescription}
              </p>
            </div>
          </div>
          <Button
            text="Cancel"
            icon_style="icon-only"
            onClick={() => setIsOpen(false)}
            className="!h-8 !w-8"
            size="sm"
            iconComponent={<Multiply color="#101928" height={16} width={16} />}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Billing period</span>
          <div className="flex">

            <div className="sd"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
