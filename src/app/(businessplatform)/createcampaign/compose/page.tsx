"use client";
import Button from "@/components/buttons/Button";
import TextEditor from "@/components/TextEditor";
import CloudUpload from "@/icons/cloud-upload";
import Multiply from "@/icons/multiply";
import Plus from "@/icons/plus";
import ReorderAlt from "@/icons/reorder-alt";
import Link from "next/link";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "react-quill/dist/quill.snow.css";
type Props = {};

const Compose = (props: Props) => {
  const [value, setValue] = useState<string>("");
  // State to store the input values as an array
  const [inputValues, setInputValues] = useState<string[]>(['']);

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

  // Function to handle drag and drop
  const handleDragEnd = (result: any) => {
    if (!result.destination) return; // Return if there's no destination

    const newInputValues = Array.from(inputValues);
    const [movedInput] = newInputValues.splice(result.source.index, 1); // Remove the item from the source index
    newInputValues.splice(result.destination.index, 0, movedInput); // Insert it at the destination index

    setInputValues(newInputValues); // Update the state with the new order
  };
  return (
    <div>
      <div className=" px-4">
        <p className="text-lg font-semibold  border-b borer-[#D0D3D9]  pb-6">
          1. Setup Campaign Details
        </p>

        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-[#344054] mt-8 mb-3 text-base font-medium"
          >
            Message 1
          </label>
          <TextEditor />
        </div>
        <div className="mt-14">
          <div className="flex cursor-pointer  items-center justify-center px-[14px] py-[10px] border border-[#D0D5DD] shadow-xs rounded-lg">
            <Plus color="#989FAD" />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <p className="text-[#344054] text-md font-medium">Upload files</p>
          <div className="w-full py-7 px-6 rounded-lg border-dashed border-[1.5px]  flex flex-col items-center border-[#D0D5DD]">
            <div className="rounded-full h-14 w-14 bg-[#F0F2F5] flex items-center justify-center">
              <CloudUpload color="#475367" />
            </div>
            <div className="mt-4 flex items-center gap-1">
              <Link
                href={"/"}
                className="text-primary-600 text-sm font-semibold"
              >
                Click to upload
              </Link>
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
            <p className="mt-4 text-primary-600">Browse files</p>
          </div>
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
              <Multiply color="#fff" height={24} width={24} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-t-[#D0D3D9] mb-8">
            <Button
              text="Save to drafts"
              type="secondary"
              size="sm"
              className="font-semibold text-md"
            />
            <Button
              text="Next: Schedule Campaign"
              type="primary"
              size="sm"
              className="font-semibold text-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;

{
  /* {inputValues.map((value, index) => (
                
                 
                    <div className="flex items-center gap-2 mt-4 ">
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
                        <Multiply color="#475367" height={24} width={24} />
                      </button>
                    </div> */
}
