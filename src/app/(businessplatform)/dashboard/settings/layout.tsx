"use client";
import Button from "@/components/buttons/Button";
import FileDownload from "@/icons/file-download";
import ImageAdd from "@/icons/image-add";
import Plus from "@/icons/plus";
import Settings from "@/icons/settings";
import Image from "next/image";
import profile from "../../../../images/profile.jpg";
import React, { useRef, useState } from "react";
import InputField from "@/components/InputField";
import dashlogo from "../../../../images/dashlogo.svg";
import { toast } from "react-toastify";
import CloudUpload from "@/icons/cloud-upload";
import TextButton from "@/components/buttons/TextButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TabItem = {
  id: number;
  title: string;
  isActive: boolean;
  href: string;
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tabs, setTabs] = useState<Array<TabItem>>([
    { id: 1, title: "Profile", isActive: true, href: "/dashboard/settings" },
    {
      id: 2,
      title: "Security",
      isActive: false,
      href: "/dashboard/settings/security",
    },
    {
      id: 3,
      title: "Preferences",
      isActive: false,
      href: "/dashboard/settings/preferences",
    },
    { id: 4, title: "API", isActive: false, href: "/dashboard/settings/api" },
  ]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [dragging, setDragging] = useState<boolean>(false);
  const handleTabClick = (selectedId: number) => {
    setTabs((prev) =>
      prev.map((tab) => ({ ...tab, isActive: tab.id == selectedId }))
    );
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

    const droppedFile = e.dataTransfer.files[0]; // Take only the first file
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      toast.error("Please drop a valid PDF file.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null; // Take only the first file

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      toast.error("Please select a valid PDF file.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {" "}
      <div className="flex flex-col  lg:flex-row items-start gap-4 lg:items-center justify-between">
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
      <div className="flex  mt-[25px] w-full bg-white border border-[#E4E7EC] rounded-xl flex-col">
        <div className="flex overflow-auto px-1 lg:px-11 gap-8 lg:gap-12  h-[62px] items-end">
          {tabs.map((tab, index) => (
            <Link
              href={tab.href}
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex  gap-[7px]  justify-center cursor-pointer items-center pb-4  ${
                tab.href === pathName
                  ? "border-b-2  border-b-primary-400"
                  : "border-b-2 border-b-transparent"
              }`}
            >
              <span
                className={`
                  text-sm 
                    ${
                      tab.href === pathName
                        ? "text-primary-400"
                        : "text-grey-800"
                    }`}
              >
                {tab.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4 flex-1 px-4 lg:px-6 xl:px-8 mt-4 flex  w-full bg-white border border-[#E4E7EC] rounded-xl flex-col">
        {children}
      </div>
    </div>
  );
}
