"use client";
import Button from "@/components/buttons/Button";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import CloudUpload from "@/icons/cloud-upload";
import Messages from "@/icons/messages";
import { issueTypeOptions } from "@/utils/data";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const FromTicket = (props: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dropdownStates, setDropdownStates] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [selectedState, setSelectedState] = useState<string>("");
  const [dragging, setDragging] = useState<boolean>(false);
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);

    const droppedFile = e.dataTransfer.files[0]; // Take only the first file
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      toast.error("Please drop a valid image file.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null; // Take only the first file

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      toast.error("Please select a valid image file.");
    }
  };

  const handleStatusSelect = (value: string) => {
    setSelectedState(value);
    setDropdownStates(false);
  };

  return (
    <div>
      {" "}
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
      <form
        action=""
        className="max-w-[512px] w-full mx-auto mt-10  gap-5 flex flex-col"
      >
        <SelectField
          label="Issue Type"
          name="messageType"
          options={issueTypeOptions}
          isOpen={dropdownStates}
          onToggle={() => setDropdownStates(!dropdownStates)}
          onSelect={handleStatusSelect}
          value={selectedState}
          placeholder="Select status"
        />
        <div className="flex flex-col  gap-1">
          <label htmlFor="text-[#48505E] text-sm font-medium">
            How can we help?
          </label>
          <textarea
            name=""
            id=""
            className="!h-[164px] px-3 py-2 border border-grey-100 text-base rounded-lg focus:outline-none"
            placeholder="Tell us a little about the issue..."
          ></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="text-[#48505E] text-sm font-medium">
            Upload files
          </label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full py-6 px-6 rounded-lg border-dashed border-[1.5px]  flex flex-col items-center     ${
              dragging
                ? "border-solid bg-[#B0E5FD] border-[#E6F7FE]/[0.5]"
                : "border-[#D0D5DD] border-dashed "
            }`}
          >
            <div className="rounded-full h-14 w-14 bg-[#F0F2F5] flex items-center justify-center">
              <CloudUpload color="#475367" />
            </div>
            <div className="mt-4 flex items-center gap-1">
              <p
                className="text-primary-600 text-sm font-semibold cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                Click to upload
                <input
                  type="file"
                  id="file-upload"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                  multiple
                />
              </p>
              <span className="text-[#475367]  text-sm">or drag and drop</span>
            </div>
            <p className="text-[12px]  font-normal text-[#98A2B3]">
              CSV (max. 50MB)
            </p>
          </div>
        </div>

        <Button
          className="!w-fit mt-4 mb-8  float-end"
          type="primary"
          size="md"
          text="Submit Ticket"
        />
      </form>
    </div>
  );
};

export default FromTicket;
