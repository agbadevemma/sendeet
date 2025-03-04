import Coinstack from "@/icons/coinstack";
import Multiply from "@/icons/multiply";
import React from "react";
import Button from "../buttons/Button";
import Maximise2 from "@/icons/maximise-2";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const DetailsModal = ({ setIsOpen, isOpen }: Props) => {
  const alert = {
    status: "Pending",
  };
  return (
    <div>
      {" "}
      <div
        className={`pt-[2%] top-0 left-0 z-50 pb-10 h-screen w-full flex items-center justify-center bg-black/20 fixed overflow-y-auto   ${
          isOpen ? "visible" : "invisible"
        } `}
      >
        <div
          className={`max-w-[523px] mx-auto w-full h-fit min-h-32 flex flex-col gap-8  bg-white rounded-2xl  p-6  ease-in-out transition-all duration-700 ${
            isOpen ? "opacity-[100%] " : " opacity-0"
          }`}
        >
          <div className="w-full flex items-start gap-5">
            <div className=" flex items-center justify-center p-3 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <Coinstack color="black" />
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="flex gap-2">
                <p className="text-[#101928] font-semibold text-[18px]">
                  Low Credit Alert
                </p>
                <div
                  className={`p-1 px-2 whitespace-nowrap  ${
                    alert.status === "Acknowledged"
                      ? "bg-success-50 text-success-700"
                      : "text-[#344054] bg-[#F2F4F7]"
                  } rounded-2xl flex items-center gap-2 w-fit text-sm`}
                >
                  {alert.status}
                </div>
              </div>
              <div className="text-[#5D6679] text-[14px] flex gap-2  items-center">
                <p className="text-sm">04/12/24</p>{" "}
                <div className="h-1 w-1 rounded-full bg-[#98A2B3]"></div>
                <span className="text-[#98A2B3]">2:15PM</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                icon_style="icon-only"
                btntype="button"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="!h-8 !w-8"
                size="sm"
                iconComponent={
                  <Multiply color="#101928" height={16} width={16} />
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex justify-between items-center">
              <span className="text-[#989FAD] text-sm">Organization Name</span>
              <span className="text-sm">GreenEarth Innovations</span>
            </div>
            <div className="flex justify-between items-center">
              <span  className="text-[#989FAD] text-sm">Credit Balance</span>
              <span className="text-sm">243</span>
            </div>
            <div className="flex justify-between items-center">
              <span  className="text-[#989FAD] text-sm">Last Top up Date</span>
              <span className="text-sm">02/10/2024</span>
            </div>
          </div>

          <div className="flex gap-2 justify-end mt-5">
            <Button
              text="Remind Later"
              btntype="button"
              onClick={() => {
                // dispatch(setNotification(false));
                setIsOpen(false)
              }}
              className="!h-10 "
              size="md"
              iconComponent={
                <Maximise2 color="#101928" height={16} width={16} />
              }
            />

            <Button
              icon_style="txt"
              btntype="button"
              text="Notify"
              onClick={() => {
                // dispatch(setNotification(false));
                setIsOpen(false)
              }}
              className="!h-10 "
              type="primary"
              size="md"
              iconComponent={
                <Multiply color="#101928" height={16} width={16} />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
