"use client";
import CheckboxChecked from "@/icons/checkbox-checked";
import Multiply from "@/icons/multiply";
import React from "react";
import Button from "./buttons/Button";
import PencilEdit from "@/icons/pencil-edit";
import CheckCircle from "@/icons/check-circle";
import CheckCircle2 from "@/icons/check-circle2";
import Calendar from "@/icons/calendar";

interface CampaignActionsModalProps {
  isMarkModalOpen: boolean;
  setIsMarkModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CampaignActionsModal = ({
  isMarkModalOpen,
  setIsMarkModalOpen,
  isEditModalOpen,
  setIsEditModalOpen,
}: CampaignActionsModalProps) => {
  return (
    <div>
      <div
        onClick={() => setIsMarkModalOpen(false)}
        className={`flex  justify-center items-center top-0 left-0 z-50 h-screen w-full bg-black/20 fixed overflow   ${
          isMarkModalOpen ? "visible" : "invisible"
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`max-w-[523px] w-full h-fit min-h-32 flex gap-8  bg-white rounded-[12px]  p-6  ease-in-out transition-all duration-700 ${
            isMarkModalOpen ? "opacity-[100%] " : " opacity-0"
          }`}
        >
          <div className="p-6 rounded-lg border h-10 w-10 bg-primary-50 border-[rgba(0,_170,_247,_0.50)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),_0px_0px_0px_1px_rgba(185,189,199,0.20)] flex items-center justify-center">
            <CheckboxChecked color="#004768" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex  justify-between w-full">
              <div className="flex flex-col w-fit">
                <p className="text-xl font-medium ">Mark as Completed</p>
                <p className="text-[#667085] text-sm mt-2">
                  Are you sure you want to mark this campaign as completed? This
                  action cannot be undone.
                </p>
              </div>

              <Button
                text="Cancel"
                icon_style="icon-only"
                onClick={() => setIsMarkModalOpen(false)}
                className="!h-8 !w-8"
                size="sm"
                iconComponent={
                  <Multiply color="#101928" height={16} width={16} />
                }
              />
            </div>
            <div className="mt-8 flex items-center justify-end gap-2">
              <Button
                text="Cancel"
                icon_style="txt"
                size="sm"
                onClick={() => setIsMarkModalOpen(false)}
              />
              <Button
                text="Confirm"
                icon_style="txt"
                onClick={() => setIsMarkModalOpen(false)}
                size="sm"
                type="destructive"
              />
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      <div
        onClick={() => setIsEditModalOpen(false)}
        className={`flex  justify-center items-center top-0 left-0 z-50 h-screen w-full bg-black/20 fixed overflow-y-auto  ${
          isEditModalOpen ? "visible" : "invisible"
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`max-w-[590px] w-full max-h-[661px] h-full flex gap-6  bg-white rounded-[12px]  p-6  ease-in-out transition-all duration-700 ${
            isEditModalOpen ? "opacity-[100%] " : " opacity-0"
          }`}
        >
          <div className="p-6 rounded-lg border h-10 w-10 bg-primary-50 border-[rgba(0,_170,_247,_0.50)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),_0px_0px_0px_1px_rgba(185,189,199,0.20)] flex items-center justify-center">
            <PencilEdit color="#004768" height={20} width={20} />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex  justify-between w-full">
              <div className="flex flex-col w-fit">
                <p className="text-xl font-medium ">Edit Scheduled Date</p>
              </div>

              <Button
                text="Cancel"
                icon_style="icon-only"
                onClick={() => setIsEditModalOpen(false)}
                className="!h-8 !w-8"
                size="sm"
                iconComponent={
                  <Multiply color="#101928" height={16} width={16} />
                }
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <p className="font-medium text-sm text-[#48505E]">
                Uploaded Files
              </p>
              <div className="h-6 w-6 text-xs rounded-full flex items-center justify-center bg-primary-500  text-white ">
                5
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-6 ">
              <div className="flex items-center justify-between pb-6 border-b border-[#F0F2F5] ">
                <div className="gap-2 flex">
                  {" "}
                  <div className="h-12 w-12 bg-success-50 flex items-center justify-center rounded-full">
                    <CheckCircle2 color="#0F973D" height={30} width={30} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">October Issue 321.pdf</p>
                    <div className="flex items-center gap-[6px] text-[#989FAD]">
                      <p className="text-sm">11 Oct, 2024 | 12:24pm</p>
                      <div className="h-1 w-1 rounded-full bg-[#989FAD]"></div>
                      <p className="text-sm font-medium">4MB</p>
                    </div>
                  </div>
                </div>
                <Button
                  iconComponent={<Calendar color="#383E49" />}
                  icon_style="leading-icon"
                  text="Oct 13, 2024"
                  className="!py-2 !px-3"
                />
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F0F2F5] ">
                <div className="gap-2 flex">
                  {" "}
                  <div className="h-12 w-12 bg-success-50 flex items-center justify-center rounded-full">
                    <CheckCircle2 color="#0F973D" height={30} width={30} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">October Issue 321.pdf</p>
                    <div className="flex items-center gap-[6px] text-[#989FAD]">
                      <p className="text-sm">11 Oct, 2024 | 12:24pm</p>
                      <div className="h-1 w-1 rounded-full bg-[#989FAD]"></div>
                      <p className="text-sm font-medium">4MB</p>
                    </div>
                  </div>
                </div>
                <Button
                  iconComponent={<Calendar color="#383E49" />}
                  icon_style="leading-icon"
                  text="Oct 13, 2024"
                  className="!py-2 !px-3"
                />
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F0F2F5] ">
                <div className="gap-2 flex">
                  {" "}
                  <div className="h-12 w-12 bg-success-50 flex items-center justify-center rounded-full">
                    <CheckCircle2 color="#0F973D" height={30} width={30} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">October Issue 321.pdf</p>
                    <div className="flex items-center gap-[6px] text-[#989FAD]">
                      <p className="text-sm">11 Oct, 2024 | 12:24pm</p>
                      <div className="h-1 w-1 rounded-full bg-[#989FAD]"></div>
                      <p className="text-sm font-medium">4MB</p>
                    </div>
                  </div>
                </div>
                <Button
                  iconComponent={<Calendar color="#383E49" />}
                  icon_style="leading-icon"
                  text="Oct 13, 2024"
                  className="!py-2 !px-3"
                />
              </div><div className="flex items-center justify-between pb-6 border-b border-[#F0F2F5] ">
                <div className="gap-2 flex">
                  {" "}
                  <div className="h-12 w-12 bg-success-50 flex items-center justify-center rounded-full">
                    <CheckCircle2 color="#0F973D" height={30} width={30} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">October Issue 321.pdf</p>
                    <div className="flex items-center gap-[6px] text-[#989FAD]">
                      <p className="text-sm">11 Oct, 2024 | 12:24pm</p>
                      <div className="h-1 w-1 rounded-full bg-[#989FAD]"></div>
                      <p className="text-sm font-medium">4MB</p>
                    </div>
                  </div>
                </div>
                <Button
                  iconComponent={<Calendar color="#383E49" />}
                  icon_style="leading-icon"
                  text="Oct 13, 2024"
                  className="!py-2 !px-3"
                />
              </div><div className="flex items-center justify-between pb-6 border-b border-[#F0F2F5] ">
                <div className="gap-2 flex">
                  {" "}
                  <div className="h-12 w-12 bg-success-50 flex items-center justify-center rounded-full">
                    <CheckCircle2 color="#0F973D" height={30} width={30} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">October Issue 321.pdf</p>
                    <div className="flex items-center gap-[6px] text-[#989FAD]">
                      <p className="text-sm">11 Oct, 2024 | 12:24pm</p>
                      <div className="h-1 w-1 rounded-full bg-[#989FAD]"></div>
                      <p className="text-sm font-medium">4MB</p>
                    </div>
                  </div>
                </div>
                <Button
                  iconComponent={<Calendar color="#383E49" />}
                  icon_style="leading-icon"
                  text="Oct 13, 2024"
                  className="!py-2 !px-3"
                />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-end gap-2">
              <Button
                text="Cancel"
                icon_style="txt"
                size="sm"
                 onClick={() => setIsEditModalOpen(false)}
              />
              <Button
                text="Save"
                icon_style="txt"
                 onClick={() => setIsEditModalOpen(false)}
                size="sm"
                type="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignActionsModal;
