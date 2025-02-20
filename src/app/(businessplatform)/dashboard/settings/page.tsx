"use client";
import Button from "@/components/buttons/Button";
import FileDownload from "@/icons/file-download";
import ImageAdd from "@/icons/image-add";
import Plus from "@/icons/plus";
import Settings from "@/icons/settings";
import Image from "next/image";
import profile from "../../../../images/profile.jpg";
import React, { useRef, useState } from "react";
import dashlogo from "../../../../images/dashlogo.svg";
import { toast } from "react-toastify";
import CloudUpload from "@/icons/cloud-upload";
import TextButton from "@/components/buttons/TextButton";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import { validationSchemaUserDetials } from "@/utils/validation";
import { useGetUserDetailsQuery } from "@/lib/slices/userApi";
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

  const { data, isLoading } = useGetUserDetailsQuery(undefined);
  console.log("data", data);

  const formik = useFormik({
    initialValues: {
      firstName: data?.firstName || "",
      lastName: data?.lastName ?? "",
      email: data?.email ?? "",
      phoneNumber: data?.email ?? "",
      companyName: data?.email ?? "",
    },
    validationSchema: validationSchemaUserDetials,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      toast.success("Profile updated successfully!");
    },
  });

  return (
    <div>
      {" "}
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
            <div className="w-full">
              {" "}
              <InputField
                inputType="text"
                label="First Name"
                placeholder="Your first name"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                errorText={
                  typeof formik.errors.firstName === "string" ? formik.errors.firstName : undefined
                }
              />
            </div>
            <div className="w-full">
              {" "}
              <InputField
                label="Last name"
                inputType=""
                placeholder=""
                className="w-full !h-[56px]"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.touched.lastName && formik.errors.lastName
                )}
                errorText={
                  typeof formik.errors.lastName === "string" ? formik.errors.lastName : undefined
                }
              />
            </div>
          </div>
          <InputField
            label="Email"
            inputType=""
            placeholder=""
            className="w-full !h-[56px]"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.email && formik.errors.email)}
            errorText={
              typeof formik.errors.email === "string" ? formik.errors.email : undefined
            }
          />
          <InputField
            label="WhatsApp Business Number"
            inputType=""
            placeholder=""
            className="w-full !h-[56px]"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.phoneNumber && formik.errors.phoneNumber
            )}
            errorText={
              typeof formik.errors.phoneNumber === "string" ? formik.errors.phoneNumber : undefined
            }
          />
          <InputField
            label="Company Name"
            inputType=""
            placeholder=""
            className="w-full !h-[56px]"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.companyName && formik.errors.companyName
            )}
            errorText={
              typeof formik.errors.companyName === "string" ? formik.errors.companyName : undefined
            }
          />
        </div>
      </div>
      <hr className="bg-[#E4E7EC]  mt-10" />
      <div className="flex mt-10  ">
        <div className="flex flex-col">
          <p className="text-base font-medium">Company Logo</p>
          <p className="text-[#667085] text-sm text-nowrap">
            Update your company logo here
          </p>
        </div>

        <div className="flex gap-4  w-full justify-center">
          <Image src={dashlogo} alt="cool" className="w-[78px] h-[78px]" />
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full py-6 px-6 rounded-lg border-dashed border-[1.5px] max-w-[308px]  flex flex-col items-center     ${
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
                  accept="application/pdf"
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
      </div>
      <hr className="bg-[#E4E7EC]  mt-10" />
      <div className="flex justify-end gap-4 items-center mt-10">
        <TextButton text="Cancel" size="sm" className="font-semibold text-md" />
        <Button
          text="Save Changes"
          type="primary"
          size="sm"
          className="font-semibold text-md"
        />
      </div>
    </div>
  );
};

export default SettingsPage;
