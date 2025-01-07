"use client";
import Multiply from "@/icons/multiply";
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import Button from "./buttons/Button";
import UserGroup from "@/icons/user-group";
import UserAdd from "@/icons/user-add";
import { toast } from "react-toastify";
import CloudUpload from "@/icons/cloud-upload";
import Tag from "@/icons/tag";
import InputField from "./InputField";
import Checkbox from "./Checkbox";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setHighlightedItems: React.Dispatch<React.SetStateAction<number[]>>;
};

const TagsModal = ({ setIsOpen, isOpen, setHighlightedItems }: Props) => {
  const [tabs, setTabs] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>(["work"]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectItem = (index: number) => {
    setSelectedItems((prev) => {
      if (prev.includes(index)) {
        // Remove if already selected
        return prev.filter((i) => i !== index);
      } else {
        // Add if not selected
        return [...prev, index];
      }
    });
  };

  const handleDivClick = () => {
    inputRef.current?.focus();
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([inputValue.trim(), ...tags]);
      setInputValue("");
    }
  };
  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`pt-[6%] top-0 left-0 z-50 h-screen w-full bg-black/20 fixed overflow   ${
          isOpen ? "visible" : "invisible"
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`max-w-[589px] mx-auto w-full h-fit min-h-32 flex flex-col gap-8  bg-white rounded-[12px]  p-6  ease-in-out transition-all duration-700 ${
            isOpen ? "opacity-[100%] " : " opacity-0"
          }`}
        >
          <div className="w-full flex items-start gap-5">
            <div className=" flex items-center justify-center p-3 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <Tag color="black" />
            </div>

            <div className="w-full flex flex-col">
              <p className="text-[#101928] font-semibold text-[20px]">
                Add or Remove Tags
              </p>
              <p className="text-[#5D6679] text-[14px] ">Manage contact tags</p>
            </div>
            <Button
              text="Cancel"
              icon_style="icon-only"
              onClick={() => setIsOpen(false)}
              className="!h-8 !w-8"
              size="sm"
              iconComponent={
                <Multiply color="#101928" height={16} width={16} />
              }
            />
          </div>
          <div className="w-full  h-14 p-[6px] flex gap-2 bg-[#F9FAFB] rounded-lg  border border-[#F2F4F7]">
            <div
              onClick={() => setTabs(false)}
              className={`w-full flex items-center justify-center ${
                !tabs
                  ? "bg-white text-[#344054] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.10),_0px_1px_2px_0px_rgba(16,24,40,0.06)]"
                  : "text-[#667085] "
              } rounded-[6px] h-full font-medium  cursor-pointer`}
            >
              Add tags
            </div>
            <div
              onClick={() => setTabs(true)}
              className={`w-full flex items-center justify-center ${
                tabs
                  ? "bg-white text-[#344054] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.10),_0px_1px_2px_0px_rgba(16,24,40,0.06)]"
                  : "text-[#667085] "
              } cursor-pointer  rounded-[6px] h-full font-medium`}
            >
              Remove tags
            </div>
          </div>

          {!tabs ? (
            <div className="flex flex-col">
              <p className="text-base font-medium">Tags</p>
              <div
                onClick={handleDivClick}
                className="h-[151px] overflow-y-auto p-4 border border-[#D0D3D9] rounded-lg"
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Tags (Add a label to organize contacts)"
                  value={inputValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                  }
                  onKeyDown={handleKeyPress}
                  className="focus:outline-none w-full mb-2 text-sm placeholder:text-[#B9BDC7]"
                />
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center w-fit px-2 py-1 bg-[#F2F4F7] rounded-2xl   gap-1 border border-[#D0D3D9] "
                    >
                      <span className="text-sm text-[#344054] font-medium">
                        {tag}
                      </span>{" "}
                      <button
                        onClick={() => {
                          setTags((prev) =>
                            prev.filter((tagprev) => tagprev !== tag)
                          );
                        }}
                      >
                        {" "}
                        <Multiply color="#667085" height={12} width={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end mt-8 gap-3">
                <Button
                  className=""
                  onClick={() => setIsOpen(false)}
                  text="Cancel"
                  icon_style="txt"
                />
                <Button
                  className=""
                  onClick={() => setIsOpen(false)}
                  type="primary"
                  text="Create"
                  icon_style="txt"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <div
                onClick={handleDivClick}
                className="h-[200px] overflow-y-auto  "
              >
                <p className="font-semibold">Tags</p>
                <div className="flex flex-col flex-wrap gap-2 mt-1.5">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 w-fit px-2 py-1     "
                    >
                      <Checkbox
                        checked={selectedItems.includes(index)}
                        onClick={() => handleSelectItem(index)}
                      />
                      <span className="text-sm text-[#344054] font-medium">
                        {tag}
                      </span>{" "}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end mt-8 gap-3">
                <Button
                  className=""
                  onClick={() => {
                    setIsOpen(false);
                    setHighlightedItems([]);
                  }}
                  text="Create"
                  icon_style="txt"
                />
                <Button
                  className=""
                  onClick={() => {
                    setIsOpen(false);
                    setHighlightedItems([]);
                  }}
                  type="primary"
                  text="Remove"
                  icon_style="txt"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagsModal;
