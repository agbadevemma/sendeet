"use client";
import Button from "@/components/buttons/Button";
import ChevronDown from "@/icons/cheveron-down";
import ChevronRight from "@/icons/chevron-right";
import EmojiAdd from "@/icons/emoji-add";
import ImageIcon from "@/icons/imageicon";
import LinkIcon from "@/icons/link-icon";
import PaperClip from "@/icons/paper-clip";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Ticket = (props: Props) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const handleSubmit = () => {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000); // Reset after 3 seconds
  };

  return (
    <div>
      <div className="w-full">
        <div className="text-lg font-semibold flex items-end  gap-3">
          <Link href={"/dashboard/campaigns"}> Home</Link>{" "}
          <span className="text-2xl text-[#D0D5DD]">/</span>{" "}
          <p className="max-w-20 w-full truncate text-nowrap text-sm text-primary-600">
            Submit a Ticket
          </p>
        </div>
        <span className="mt-2 text-[#667085] text-xs">
          Submit a detailed inquiry, and we’ll follow up with you.
        </span>
      </div>
      {isSuccess ? (
        <div className="w-full max-w-[512px] flex items-end justify-center mx-auto h-full text-grey-600 mt-10 text-sm">
          Submitted successfully. Our Support team will respond to your message
          via email as soon as possible.
        </div>
      ) : (
        <div className="w-full max-w-[500px] mx-auto flex flex-col mt-10 items-end">
          <div className="w-full rounded-lg border flex flex-col  border-[#E4E7EC] mt-4 ">
            <div className="py-2 bg-[#E6F7FE] rounded-t-lg flex  items-center px-4  w-full">
              New Ticket
            </div>
            <div className="flex-1 rounded-b-lg ">
              <div className="px-4">
                <div className="flex items-center gap-2 justify-between w-full border-b">
                  <input
                    className="placeholder:text-[#B9BDC7] text-sm mt-6    focus:outline-none"
                    placeholder="Select the type of issue"
                  />
                  <ChevronDown height={16} width={16} color="#B9BDC7" />
                </div>
                <textarea
                  className="placeholder:text-[#B9BDC7] text-sm mt-6 w-full  h-[24rem]  focus:outline-none"
                  placeholder="Tell us more about the issue"
                ></textarea>
              </div>

              <div className=" px-4 py-2  flex items-center gap-4 rounded-b-lg bg-[#F9FAFB] w-full ">
                <button>
                  {" "}
                  <ImageIcon height={16} width={16} color="#989FAD" />
                </button>
                <button>
                  {" "}
                  <PaperClip height={16} width={16} color="#989FAD" />
                </button>
                <button>
                  {" "}
                  <EmojiAdd height={16} width={16} color="#989FAD" />
                </button>
                <button>
                  {" "}
                  <LinkIcon height={16} width={16} color="#989FAD" />
                </button>
              </div>
            </div>
          </div>
          <Button
            className="!w-fit mt-4 mb-8  "
            type="primary"
            size="md"
            text="Submit Ticket"
            onClick={() => handleSubmit()}
          />
        </div>
      )}
    </div>
  );
};

export default Ticket;
