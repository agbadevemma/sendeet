"use client";
import Button from "@/components/buttons/Button";
import FileDownload from "@/icons/file-download";
import ImageAdd from "@/icons/image-add";
import Plus from "@/icons/plus";
import Settings from "@/icons/settings";
import Image from "next/image";
import profile from "../../../../images/profile.jpg";
import React, { useState } from "react";
import InputField from "@/components/InputField";

type Props = {};

type TabItem = {
  id: number;
  title: string;
  isActive: boolean;
};
const SettingsPage = (props: Props) => {
  const [tabs, setTabs] = useState<Array<TabItem>>([
    { id: 1, title: "Profile", isActive: true },
    { id: 2, title: "Security", isActive: false },
    { id: 3, title: "Preferences", isActive: false },
    { id: 4, title: "API", isActive: false },
  ]);
  const handleTabClick = (selectedId: number) => {
    setTabs((prev) =>
      prev.map((tab) => ({ ...tab, isActive: tab.id == selectedId }))
    );
  };
  return (
    <div>
      {" "}
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className=" flex items-center  bg-white  justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <Settings color="black" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Settings</p>
            <p className="text-sm text-grey-800">Welcome back to Sendeet</p>
          </div>
        </div>
      </div>
      <div className="flex mt-[25px] w-full bg-white border border-[#E4E7EC] rounded-xl flex-col">
        <div className="flex overflow-auto px-1 lg:px-11 gap-8 lg:gap-12 border-t border-t-grey-50 h-[62px] items-end">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex  gap-[7px]  justify-center cursor-pointer items-center pb-4  ${
                tab.isActive
                  ? "border-b-2  border-b-primary-400"
                  : " border-b-[#E4E7EC]"
              }`}
            >
              <span
                className={`
                  text-sm 
                    ${tab.isActive ? "text-primary-400" : "text-grey-800"}`}
              >
                {tab.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 px-8 mt-4 flex  w-full bg-white border border-[#E4E7EC] rounded-xl flex-col">
        <p className="text-[18px] font-medium">Account Info</p>
        <p className="text-xs text-[#667085]">
          Manage the information on your account
        </p>
        <hr className="bg-[#E4E7EC]  mt-4" />
        <div className="mt-10 flex gap-4 ">
          <div className="flex flex-col">
            <p className="">Profile photo</p>
            <p className="text-xs">
              This image will be displayed on your profile
            </p>
            <Button
              text="Change Photo"
              className="!max-w-[148px] mt-4"
              icon_style="leading-icon"
              iconComponent={<ImageAdd color="#364152" />}
            />
          </div>
          <Image
            src={profile}
            alt=""
            className="rounded-full h-32 w-32 object-cover cursor-pointer"
          />
        </div>
        <hr className="bg-[#E4E7EC]  mt-10" />
        <div className="mt-10 flex gap-2 justify-between">
          <div className="flex flex-col">
            <span className="text-[#101928]">Personal Information</span>
            <span className="text-[#667085] text-xs">
              Update your personal details here.
            </span>
          </div>
          <div className="w-full max-w-[632px] flex flex-col gap-4">
            <div className="w-full flex gap-4 ">
            <div className="w-full">  <InputField label="First name" inputType="" placeholder="" className="w-full" /></div>
            <div className="w-full">  <InputField label="Last name" inputType="" placeholder="" className="w-full" /></div>
            </div>
            <InputField
              label="Email"
              inputType=""
              placeholder=""
              
            />
            <InputField
              label="WhatsApp Business Number"
              inputType=""
              placeholder=""
            
            />
            <InputField
              label="Company Name"
              inputType=""
              placeholder=""
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
