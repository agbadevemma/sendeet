"use client"
import Image from "next/image";
import doc from "../images/Doc.svg";
import phone from "../images/phone.svg";
import preview from "../images/preview.png";
import React, { MouseEvent, useRef, useState } from "react";
import ShareAlt from "@/icons/share-alt";
import Button from "./buttons/Button";

type Props = {};

const Phone = (props: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null); // Reference to the scrollable container
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartY(e.pageY - scrollRef.current.offsetTop);
      setScrollTop(scrollRef.current.scrollTop);
    }
  };

  // Mouse leave or mouse up handler
  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  // Mouse move handler
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const y = e.pageY - scrollRef.current.offsetTop;
    const walk = (y - startY) * 1.5; // Adjust scroll speed here
    scrollRef.current.scrollTop = scrollTop - walk;
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center mt-32 gap-y-4 ">
        {" "}
        <div className="relative">
          {" "}
          <Image
            src={phone}
            alt=""
            className="hidden lg:block w-full object-contain "
          />
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className="bg-transparent  cursor-grab active:cursor-grabbing  select-none absolute top-0 w-full h-[77%] mt-[4.4rem] overflow-y-auto noscrollbar "
          >
            <div className="w-48 bg-white pb-2 flex flex-col min-h-64  mt-[28%] ml-[10%]  rounded-t-xl rounded-br-2xl ">
              <div className="w-full p-1 flex-col flex ">
                {" "}
                <Image src={preview} alt="image" className="rounded-t-lg" />
                <div className="w-full bg-black/[4%] py-1 flex gap-[7px] px-[10px] ">
                  <Image src={doc} alt="doc" />
                  <div className="flex flex-col gap-[2px] text-">
                    <span className="text-[12px] text-[#0A0A0A]">
                      October Issue 3
                    </span>
                    <div className="flex gap-[3px] text-black/50 text-[10px]">
                      <span>3 pages</span>
                      <div className="h-">•</div>
                      <span>4MB</span>
                      <span className="">•</span>
                      <span>pdf</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex   p-2 mt-1">
                <p className="text-[11px]  ">
                  {" "}
                  Welcome onboard, here's an exclusive copy of our recent
                  newsletter. <br />
                  <br />
                  You'll now receive exclusive offers, news, and updates
                  directly on WhatsApp.
                  <br />
                  <br />
                  Reply unsubscribe to opt out.
                </p>
                <span className="text-xs text-black/50 text-[8px] self-end ">
                  23:41
                </span>
              </div>
              <div className="w-full flex items-center mt-2 py-2 gap-2 justify-center border-t border-b border-b-[#E4E4E4] border-t-[#E4E4E4]">
                <ShareAlt color="#1C8854" />{" "}
                <span className="text-[9px] text-[#1C8854]">Unsubscribe</span>
              </div>
              <div className="flex items-center justify-center mt-2 gap-2">
                <ShareAlt color="#1C8854" />{" "}
                <span className="text-[9px] text-[#1C8854]">Subscribe</span>
              </div>
            </div>
            <div className="w-48 bg-white pb-2 flex flex-col min-h-64  mt-[10%] ml-[10%]  rounded-t-xl rounded-br-2xl ">
              <div className="w-full p-1 flex-col flex ">
                {" "}
                <Image src={preview} alt="image" className="rounded-t-lg" />
                <div className="w-full bg-black/[4%] py-1 flex gap-[7px] px-[10px] ">
                  <Image src={doc} alt="doc" />
                  <div className="flex flex-col gap-[2px] text-">
                    <span className="text-[12px] text-[#0A0A0A]">
                      October Issue 3
                    </span>
                    <div className="flex gap-[3px] text-black/50 text-[10px]">
                      <span>3 pages</span>
                      <div className="h-">•</div>
                      <span>4MB</span>
                      <span className="">•</span>
                      <span>pdf</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex   p-2 mt-1">
                <p className="text-[11px]  ">
                  {" "}
                  Welcome onboard, here's an exclusive copy of our recent
                  newsletter. <br />
                  <br />
                  You'll now receive exclusive offers, news, and updates
                  directly on WhatsApp.
                  <br />
                  <br />
                  Reply unsubscribe to opt out.
                </p>
                <span className="text-xs text-black/50 text-[8px] self-end ">
                  23:41
                </span>
              </div>
              <div className="w-full flex items-center mt-2 py-2 gap-2 justify-center border-t border-b border-b-[#E4E4E4] border-t-[#E4E4E4]">
                <ShareAlt color="#1C8854" />{" "}
                <span className="text-[9px] text-[#1C8854]">Unsubscribe</span>
              </div>
              <div className="flex items-center justify-center mt-2 gap-2">
                <ShareAlt color="#1C8854" />{" "}
                <span className="text-[9px] text-[#1C8854]">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
        <Button text="Send Test Message" />
      </div>
    </div>
  );
};

export default Phone;
