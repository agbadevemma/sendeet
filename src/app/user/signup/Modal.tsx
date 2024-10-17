import React from "react";
import Image from "next/image";
import logo from "../../../images/Logo.png";
import sendAi from "../../../images/icons/send-AI.svg";
import whatsAppLogo from "../../../images/whatsapplogo.png";
import iconright from "../../../images/icons/chevron-right-colored.svg";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  return (
    <div>
      <div
        onClick={onClose}
        className=" fixed z-[80] top-0 h-screen w-full  left-0 bg-black/[0.5] flex  items-center justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full flex flex-col items-center max-w-[738px]"
        >
          <Image src={logo} alt="" className="w-32" />
          <div className="w-full mt-[32px] py-[32px] px-[28px] gap-[32px] flex flex-col border border-solid border-[#D0D3D9] bg-white rounded-[12px]">
            <div className="flex  gap-[20px] items-start ">
              <Image src={whatsAppLogo} alt="" className="" />
              <div className="flex  flex-col">
                <p className="text-[#101928]  text-[24px] leading-[32px] font-semibold">
                  Connect WhatsApp Business API
                </p>
                <p className="text-[#5D6679] text-base ">
                  Receive and reply to WhatsApp messages through your inbox{" "}
                </p>
              </div>
            </div>
            <div className="mt-[32px] p-[24px] min-h-[152px] relative w-full border rounded-[10px] border-[#B0E5FD] bg-[#E6F7FE]">
              <div className="flex flex-col">
                <p className="text-[#101928] font-semibold text-[16px] leading-[24px]">
                  Connect your WhatsApp Business number in just one step
                </p>
                <p className="text-sm text-[#48505E] mt-[4px]">
                  Make sure you can receive a verification call from this number
                </p>
                <button className="mt-[16px] gap-[4px] flex  ">
                  <span className="text-[#00AAF7] font-semibold text-sm leading-[20.3px]">
                    Complete authentication
                  </span>
                  <Image src={iconright} alt="send" className=" top-0 " />
                </button>
              </div>
              <Image
                src={sendAi}
                alt="send"
                className="absolute right-0 -top-[1.1rem] mt-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
