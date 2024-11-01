"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/buttons/Button";
import TextEditor from "@/components/TextEditor";
import CloudUpload from "@/icons/cloud-upload";
import Multiply from "@/icons/multiply";
import Plus from "@/icons/plus";
import ReorderAlt from "@/icons/reorder-alt";
import Link from "next/link";
import ReactQuill from "react-quill";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import filetype from "../../../../images/filetype.svg";
import Image from "next/image";
import Eye from "@/icons/eye";
import Bin from "@/icons/bin";
import PdfViewer from "@/components/PdfViewer";
import ChevronLeft from "@/icons/chevron-left";
type Props = {};

const Compose = (props: Props) => {
  // Handles
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [dragging, setDragging] = useState<boolean>(false);
  const [textEditorInputValues, setTextEditorInputValues] = useState<string[]>([
    "",
  ]);
  const handleAddTextEditInput = () => {
    setTextEditorInputValues((prev) => [...prev, ""]); // Append an empty string for the new input
  };

  const [isModal, setisModal] = useState<boolean>(false);

  const [value, setValue] = useState<string>("");
  // State to store the input values as an array
  const [inputValues, setInputValues] = useState<string[]>([""]);

  // Function to add a new input field
  const handleAddInput = () => {
    setInputValues((prev) => [...prev, ""]); // Append an empty string for the new input
  };

  // Function to handle input value change
  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value; // Update the value at the specified index
    setInputValues(newInputValues);
  };

  // Function to remove an input field
  const handleRemoveInput = (index: number) => {
    const newInputValues = inputValues.filter((_, i) => i !== index); // Remove the input at the specified index
    setInputValues(newInputValues);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const newInputValues = Array.from(inputValues);
    const [movedInput] = newInputValues.splice(result.source.index, 1);
    newInputValues.splice(result.destination.index, 0, movedInput);
    setInputValues(newInputValues);
  };

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

    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(
      (file) => file.type === "application/pdf" // Accept only PDF files
    );
    if (validFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    } else {
      toast.error("Please drop valid PDF files.");
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    const reader = new FileReader();
    reader.onloadend = async () => {};
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];

    const validFiles = selectedFiles.filter(
      (file) => file.type === "application/pdf" // Accept only PDF files
    );

    if (validFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    } else {
      toast.error("Please select valid PDF files.");
    }
  };

  const formatDate = (file: File) => {
    const date = new Date(file.lastModified);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const formattedDate = date
      .toLocaleDateString("en-US", options)
      .replace(/(\d{2}) (\w{3}) (\d{4})/, "$2 $1, $3");

    return formattedDate;
  };

  const formatTime = (file: File) => {
    const date = new Date(file.lastModified);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedTime = date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .toLowerCase();
    return formattedTime;
  };

  const formatFileSize = (file: File) => {
    const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
    return `${sizeInMB} MB`;
  };

  return (
    <div>
      {/* modal  ${
         isModalOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}*/}
      <div
        onClick={() => setisModal((prev) => !prev)}
        className={`fixed p-2 lg:p-5 lg:pb-0 z-[100] bg-black/20 inset-0 flex justify-end modal transition-all duration-500  ${
          isModal ? "visible opacity-100" : "invisible opacity-0"
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-t-3xl min-h-full w-full lg:w-[49%]   p-6 pb-0 gap-y-[21px]  transition-all duration-500 ${
            isModal ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-start mb-4 gap-5 pb-6 border-b border-b-grey-100 ">
            <Button
              onClick={() => setisModal((prev) => !prev)}
              iconComponent={<ChevronLeft color="black" />}
              icon_style="icon-only"
            />

            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-semibold text-grey-900">Preview</p>
              <p className="text-grey-500  text-sm">{fileName}</p>
            </div>
          </div>
          <PdfViewer
            fileUrl={`https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf`}
          />
        </div>
      </div>
      <div className=" px-4">
        <p className="text-lg font-semibold  border-b borer-[#D0D3D9]  pb-6">
          2.Compose Message
        </p>

        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-[#344054] mt-8 mb-3 text-base font-medium"
          >
            Message 1
          </label>
          <div className="flex flex-col gap-y-14">
            {" "}
            {textEditorInputValues.map((item, index) => (
              <TextEditor />
            ))}
          </div>
        </div>
        <div className="mt-14">
          <div
            onClick={handleAddTextEditInput}
            className="flex cursor-pointer  items-center justify-center px-[14px] py-[10px] border border-[#D0D5DD] shadow-xs rounded-lg"
          >
            <Plus color="#989FAD" />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <p className="text-[#344054] text-md font-medium">Upload files</p>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full py-7 px-6 rounded-lg border-dashed border-[1.5px]  flex flex-col items-center     ${
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
                  className="hidden"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  multiple
                />
              </p>
              <span className="text-[#475367]  text-sm">or drag and drop</span>
            </div>
            <p className="text-[12px]  font-normal text-[#98A2B3]">
              PDF, DOC, SVG, PNG, JPG or GIF (max. 10MB)
            </p>
            <div className="flex w-full  items-center gap-2 mt-4">
              <div className="h-px w-full bg-[#F0F2F5]"></div>
              <span className="text-xs font-semibold text-[#98A2B3]">OR</span>
              <div className="h-px w-full  bg-[#F0F2F5]"></div>
            </div>
            <p
                onClick={() => fileInputRef.current?.click()}
              className="mt-4 text-primary-600 cursor-pointer"
            >
              Browse files
            </p>
          </div>
          {files.length > 0 && (
            <div className="flex gap-2 items-center mt-3">
              <span> Uploaded Files</span>
              <div className="flex items-center justify-center h-6 w-6 bg-primary-500 text-white rounded-full">
                {files.length}
              </div>
            </div>
          )}
          {files.length > 0 && (
            <ul className="mt-4 gap-4 flex flex-col">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between pb-6  border-b border-b-[#F0F2F5]"
                >
                  <div className="flex items-center gap-4">
                    <Image src={filetype} alt="filetype" />
                    <div className="flex flex-col gap-1">
                      {" "}
                      <span className="text-sm font-semibold text-grey-900">
                        {file.name}
                      </span>
                      <p className="text-xs text-gray-500">
                        <span className="text-grey-500">
                          {" "}
                          {formatDate(file)}{" "}
                        </span>
                        | {formatFileSize(file)}
                      </p>
                    </div>
                  </div>
                  <div className="flex item-center gap-4">
                    <button
                      onClick={() => {
                        setFileName(file.name);
                        setisModal((prev) => !prev);
                      }}
                    >
                      <Eye color="#475367" height={28} width={28} />
                    </button>
                    <button onClick={() => handleRemoveFile(index)}>
                      <Bin color="#D42620" height={28} width={28} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8">
            <p className="text-[#344054]  text-sm font-medium">
              Action button{" "}
              <span className="text-sm font-normal">(optional)</span>
            </p>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-2"
                  >
                    {inputValues.map((value, index) => (
                      <Draggable
                        key={index}
                        draggableId={`draggable-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex items-center gap-2 mt-4 "
                          >
                            <ReorderAlt color="#B9BDC7" />
                            <div className="flex items-center justify-center  w-full border border-dashed rounded-lg shadow-xs border-[#D0D5DD] py-[10px] px-[14px]">
                              <input
                                type="text"
                                value={inputValues[index] || ""}
                                onChange={(e) =>
                                  handleInputChange(index, e.target.value)
                                }
                                className="focus:outline-none w-full bg-transparent placeholder:text-sm placeholder:text-grey-300 text-grey-700"
                                placeholder="Enter button text"
                              />
                            </div>
                            <button onClick={() => handleRemoveInput(index)}>
                              <Multiply
                                color="#475367"
                                height={24}
                                width={24}
                              />
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}{" "}
                    {/* This placeholder helps with the layout during dragging */}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <div
              onClick={handleAddInput}
              className="flex items-center gap-2 mt-4"
            >
              <ReorderAlt color="#B9BDC7" />
              <div className="flex cursor-pointer items-center justify-center  w-full border border-dashed rounded-lg shadow-xs border-[#D0D5DD] py-[10px] px-[14px]">
                <Plus color="#989FAD" />
              </div>
              <Multiply color="" height={24} width={24} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-t-[#D0D3D9] mb-8">
            <Button
              text="Save to drafts"
              type="secondary"
              size="sm"
              className="font-semibold text-md"
            />
            <Link href={"/createcampaign/schedule"}>
              <Button
                text="Next: Schedule Campaign"
                type="primary"
                size="sm"
                className="font-semibold text-md"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;
