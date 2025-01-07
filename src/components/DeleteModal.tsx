import InfoCircle from "@/icons/info-circle";
import UserTick from "@/icons/user-tick";
import React from "react";
import Button from "./buttons/Button";
import Multiply from "@/icons/multiply";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
};
const DeleteModal = ({ setIsOpen, isOpen, setSelectedItems }: Props) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={` top-0 left-0 z-50 fixed h-screen w-full flex items-center justify-center  bg-black/20  ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex  rounded-[12px] items-start justify-between  w-full  p-6 bg-white max-w-[544px] mx-auto ease-in-out transition-all duration-700  ${
          isOpen ? "opacity-[100%] " : " opacity-0"
        }`}
      >
        <div className="rounded-lg flex items-center mr-5 justify-center p-3 bg-[#FBE9E9] border border-solid  border-[rgba(212,_38,_32,_0.50)]">
          <InfoCircle color="#D42620" height={20} width={20} />
        </div>
        <div className="gap-1 flex flex-col mr-4 ">
          <div className="flex justify-between">
            {" "}
            <div className="flex flex-col">
              <p className="text-[17px] font-medium text-[#101828]">
                Delete Contact
              </p>
              <p className=" !text-[14px] w-full max-w-[366px] !font-normal text-[#667085] mt-2">
                <span className="text-[#667085]">
                  Are you sure you want to delete this contact? This action
                  cannot be undone.
                </span>
              </p>
            </div>
            <Button
              iconComponent={<Multiply color="#101928" />}
              className=""
              onClick={() => setIsOpen(false)}
              icon_style="icon-only"
            />
          </div>

          <div className="flex items-center justify-end mt-8 gap-3">
            <Button
              iconComponent={<Multiply color="#101928" />}
              className=""
              onClick={() => {
                setIsOpen(false);
                setSelectedItems([]);
              }}
              text="Cancel"
              icon_style="txt"
            />
            <Button
              iconComponent={<Multiply color="#101928" />}
              className=""
              onClick={() => {
                setIsOpen(false);
                setSelectedItems([]);
              }}
              type="destructive"
              text="Delete"
              icon_style="txt"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
