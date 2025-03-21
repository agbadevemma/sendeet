"use client";
import Multiply from "@/icons/multiply";
import React, { ChangeEvent, useRef, useState } from "react";
import Button from "./buttons/Button";
import UserGroup from "@/icons/user-group";
import UserAdd from "@/icons/user-add";
import { toast } from "react-toastify";
import CloudUpload from "@/icons/cloud-upload";
import Papa from "papaparse";
import countrycallcode from "../utils/countrycodes.json";
import { useAddContactMutation } from "@/lib/slices/contactApi";
import UserTick from "@/icons/user-tick";
import UserCross from "@/icons/user-cross";
import useLogout from "@/hooks/useLogout";
import Spinner from "./spinner";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const BulkImport = ({ setIsOpen, isOpen }: Props) => {
  const [selectedCode, setSelectedCode] = useState<string>("NG +234");
  const [addContact, { isLoading }] = useAddContactMutation();
  const { handleLogout } = useLogout({role:"organization"});
  const callCodes = countrycallcode.map((item, index) => {
    return {
      value: item.code,
      option: `${item.code} ${item.dial_code}`
    }
  })
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [dragging, setDragging] = useState<boolean>(false);
  const [textEditorInputValues, setTextEditorInputValues] = useState<string[]>(
    []
  );

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const [data, setData] = useState<any[]>([]);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);

    const droppedFile = e.dataTransfer.files[0]; // Take only the first file


    if (droppedFile && droppedFile.type === "text/csv") {
      setFile(droppedFile);
      console.log("Started");
      Papa.parse(droppedFile, {
        header: true, // Treat first row as headers
        skipEmptyLines: true,
        complete: async (result: any) => {
          setData(result.data);
          const values = result.data
          console.log("Parsed Data:", result.data[0]['First name']);
          const tagsArray = values.map((val: any) =>
            val["Tags"]
              .split(",")
              .map((tag: any) => tag.trim())
              .filter(Boolean) // Filters out empty strings
          );
          console.log("tags", tagsArray);

          try {
            await Promise.all(values.map((val: any, index: number) => {
              return addContact({
                firstName: val['First name'],
                lastName: val['Last Name'],
                phoneNumber: val['Phone number'],
                tags: tagsArray[index]
              }).unwrap()
            }));
            toast.success(
              <div className="flex items-start justify-between w-full  py-2 px-4 ">
                <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-success-50 border border-success-500">
                  <UserTick color="#0F973D" />
                </div>
                <div className="gap-1 flex flex-col mr-4 ">
                  <p className="!text-[14px] !font-medium text-[#101828]">
                    Contact Added
                  </p>
                  <p className=" !text-[14px] !font-normal text-[#667085]">
                    <span className="text-[#009BE1]">{result.data.firstName} {result.data.lastName}</span> has been added to your contacts list
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


          } catch (error: any) {
            // error
            console.log("error", error.data.message);


            if (error?.status === 401) {
              console.log("Unauthorized! Logging out...");
              toast.error(
                <div className="flex items-start justify-between w-full  py-2 px-4 ">
                  <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-error-50 border border-error-500 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,_189,_199,_0.20)]">
                    {" "}
                    <UserCross color="#D42620" />
                  </div>
                  <div className="gap-1 flex flex-col mr-4 w-full">
                    <p className="!text-[14px] !font-medium text-[#101828]">
                      Failed to Add contacts
                    </p>
                    <p className=" w-full !text-[14px] !font-normal text-[#667085]">
                      {error.data.message}
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
              handleLogout();

            } else {
              toast.error(
                <div className="flex items-start justify-between w-full  py-2 px-4 ">
                  <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-error-50 border border-error-500 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,_189,_199,_0.20)]">
                    {" "}
                    <UserCross color="#D42620" />
                  </div>
                  <div className="gap-1 flex flex-col mr-4 ">
                    <p className="!text-[14px] !font-medium text-[#101828]">
                      Failed to Add contacts
                    </p>
                    <p className=" !text-[14px] !font-normal text-[#667085]">
                      {error.data.message}
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
            }

          }
        },
      });

    } else {
      toast.error("Please select a valid CSV file.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null; // Take only the first file

    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
      console.log("Started");
      Papa.parse(selectedFile, {
        header: true, // Treat first row as headers
        skipEmptyLines: true,
        complete: (result: any) => {
          setData(result.data);
          console.log("Parsed Data:", result.data);
        },
      });
    } else {
      toast.error("Please select a valid CSV file.");
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          if (isLoading) {
            return;
          }
          setIsOpen(false)
        }}
        className={`pt-[6%] top-0 left-0 z-50 h-screen w-full bg-black/20 fixed overflow   ${isOpen ? "visible" : "invisible"
          } `}
      >

        <div className="w-full flex items-center justify-center">
          {isLoading && <Spinner />}
        </div>
        {!isLoading && <div
          onClick={(e) => e.stopPropagation()}
          className={`max-w-[589px] mx-auto w-full h-fit min-h-32 flex flex-col gap-8  bg-white rounded-[12px]  p-6  ease-in-out transition-all duration-700 ${isOpen ? "opacity-[100%] " : " opacity-0"
            }`}
        >
          <div className="w-full flex items-start gap-5">
            <div className=" flex items-center justify-center p-3 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <UserAdd color="black" />
            </div>

            <div className="w-full flex flex-col">
              <p className="text-[#101928] font-semibold text-[20px]">
                Import Bulk Contacts
              </p>
              <p className="text-[#5D6679] text-[14px] ">
                Upload your existing contacts using a CSV file.
              </p>
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
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full py-5 px-6 rounded-lg border-dashed border-[1.5px]  flex flex-col items-center     ${dragging
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
                  accept="text/csv"
                  onChange={handleFileChange}
                  multiple
                />
              </p>
              <span className="text-[#475367]  text-sm">or drag and drop</span>
            </div>
            <p className="text-[12px]  font-normal text-[#98A2B3]">
              CSV (max. 50MB)
            </p>
            <div className="flex w-full  items-center gap-2 mt-4">
              <div className="h-px w-full bg-[#F0F2F5]"></div>
              <span className="text-xs font-semibold text-[#98A2B3]">OR</span>
              <div className="h-px w-full  bg-[#F0F2F5]"></div>
            </div>
            <p
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 font-medium text-sm text-primary-600 cursor-pointer"
            >
              Browse files
            </p>
          </div>
          <div className="mt-8 flex items-center justify-end gap-2">
            <Button
              text="Cancel"
              icon_style="txt"
              size="sm"
              onClick={() => { }}
            />
            <Button
              text="Import"
              type="primary"
              icon_style="txt"
              size="sm"
              onClick={() => { }}
            />
          </div>
        </div>}
      </div>
    </div>
  );
};

export default BulkImport;
