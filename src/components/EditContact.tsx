"use client";
import UserGroup from "@/icons/user-group";
import React, { ChangeEvent, useState } from "react";
import Button from "./buttons/Button";
import Multiply from "@/icons/multiply";
import InputField from "./InputField";
import ChevronDown from "@/icons/cheveron-down";
import UserTick from "@/icons/user-tick";
import { toast } from "react-toastify";
import UserCross from "@/icons/user-cross";
import UserAdd from "@/icons/user-add";
import Checkbox from "./Checkbox";
import { useGetContactByIdQuery, useUpdateContactMutation } from "@/lib/slices/contactApi";
import countrycallcode from "../utils/countrycodes.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import Spinner from "./spinner";
import { validationSchemaContactSetup } from "@/utils/validation";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  selectedIndex: number;
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditContact = ({ setIsOpen, isOpen, setSelectedItems, selectedIndex, setIsOpenDeleteModal }: Props) => {
  const [selectedCode, setSelectedCode] = useState<string>("NG +234");
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const { data, error, isLoading } = useGetContactByIdQuery(selectedIndex)
  const callCodes = countrycallcode.map((item, index) => {
    return {
      value: item.code,
      option: `${item.code} ${item.dial_code}`
    }
  })
  console.log("data?.phoneNumber", countrycallcode.find((c) => c.code === data?.phoneNumber?.split('-')[0])?.code);

  console.log("data", data?.tags);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
  };


  const formik = useFormik({
    initialValues: {
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      phoneNumber: data?.phoneNumber?.replace(/^.*-/, "").replace(/\+\d+/, "") || "",
      countryCode: countrycallcode.find((c) => c.code === data?.phoneNumber?.split('-')[0])?.code || '',
      tags: data?.tags?.join(", ") || "",
    },
    enableReinitialize: true, // Ensures form updates with fetched data
    validationSchema: validationSchemaContactSetup,
    onSubmit: async (values) => {
      console.log("Form Submitted:", values);
      const tagsArray = values.tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag !== ""); // Remove empty tags

      const callCode = countrycallcode.find((c) => c.code === values.countryCode.toLocaleUpperCase())
      try {

        await updateContact({
          id: data?.id || 0, contact: {
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNumber: callCode?.code + "-" + callCode?.dial_code + "-" + values.phoneNumber,
            tags: tagsArray
          }
        }).unwrap();

        toast.success(
          <div className="flex items-start justify-between w-full  py-2 px-4 ">
            <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-success-50 border border-success-500">
              {" "}
              <UserTick color="#0F973D" />
            </div>
            <div className="gap-1 flex flex-col mr-4 ">
              <p className="!text-[14px] !font-medium text-[#101828]">
                Contact Added
              </p>
              <p className=" !text-[14px] !font-normal text-[#667085]">
                <span className="text-[#009BE1]">{`${values.firstName} ${values.lastName} `} </span>
                has been updated to your contacts list
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
      } catch (error) {
        console.log("error", error);
        toast.error(
          <div className="flex items-start justify-between w-full  py-2 px-4 ">
            <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-error-50 border border-error-500 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,_189,_199,_0.20)]">
              {" "}
              <UserCross color="#D42620" />
            </div>
            <div className="gap-1 flex flex-col mr-4 ">
              <p className="!text-[14px] !font-medium text-[#101828]">
                Failed to load contacts
              </p>
              <p className=" !text-[14px] !font-normal text-[#667085]">
                Please check your connection and try again.
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
    },
  });

  // if (isLoading) return (<div className="h-screen w-full flex items-center justify-center"><Spinner /></div>);

  return (
    <div>
      <div
        onClick={() => {
          if (isLoading || isUpdating) {
            return;
          }
          setIsOpen(false)
        }}
        className={`pt-[4%] top-0 left-0 z-50 pb-10 h-screen w-full bg-black/20 fixed overflow-y-auto   ${isOpen ? "visible" : "invisible"
          } `}
      >
        {isLoading && <div className="h-screen w-full flex items-center justify-center"><Spinner /></div>}
        {!isLoading && <form
          onSubmit={formik.handleSubmit}
          onClick={(e) => e.stopPropagation()}
          className={`max-w-[523px] mx-auto w-full h-fit min-h-32 flex flex-col gap-8  bg-white rounded-[12px]  p-6  ease-in-out transition-all duration-700 ${isOpen ? "opacity-[100%] " : " opacity-0"
            }`}
        >

          <div className="w-full flex items-start gap-5">
            <div className=" flex items-center justify-center p-3 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <UserAdd color="black" />
            </div>

            <div className="w-full flex flex-col">
              <p className="text-[#101928] font-semibold text-[20px]">
                Edit Contact
              </p>
              <p className="text-[#5D6679] text-[14px] ">
                Edit contact name and add tags
              </p>
            </div>
            <Button
              text="Cancel"
              icon_style="icon-only"
              btntype="button"
              onClick={() => {
                setIsOpen(false);
                setSelectedItems([]);
              }}
              className="!h-8 !w-8"
              size="sm"
              iconComponent={
                <Multiply color="#101928" height={16} width={16} />
              }
            />
          </div>

          <div className="mt-2">
            <div className="w-full flex items-center gap-4">
              <InputField
                inputType=""
                className="!h-[44px]"
                label="First Name"
                placeholder="Your first name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                errorText={formik.errors.firstName}
              />
              <InputField
                inputType=""
                className="!h-[44px]"
                label="Last Name"
                placeholder="Your last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                errorText={formik.errors.lastName}
              />
            </div>
            <div className="flex flex-col mt-2 group">
              <label htmlFor="Phone Number">Phone Number</label>
              <div className="flex items-start w-full mt-1">
                <div className="relative">
                  <select
                    name="countryCode"
                    id="countryCode"
                    className={`flex items-center text-sm h-12 pl-2 px-6 gap-2  border border-r-0 rounded-l-lg focus:outline-none text-[#667085] appearance-none ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "border-error-500" : "border-grey-100"}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.countryCode}
                  >
                    {callCodes.map((item, index) => <option key={index} value={item.value}>{item.option}</option>)}

                  </select>
                  <div className="absolute inset-y-5 right-1">
                    {" "}
                    <ChevronDown color="#667085" />
                  </div>
                </div>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="h-12 px-4 w-full focus:outline-none text-sm lg:text-md rounded-r-lg border-grey-100 bg-transparent border"
                  placeholder="Enter phone number"
                  value={formik.values.phoneNumber}
                  onChange={(e) => {
                    const onlyNumber = e.target.value.replace(/\D/g, "");
                    formik.setFieldValue("phoneNumber", onlyNumber);
                  }}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-xs text-error-500">{formik.errors.phoneNumber}</p>
              )}
            </div>
            <div className="mt-4">
              <InputField
                inputType=""
                name="tags"
                className="!h-[44px]"
                label="Tags"
                placeholder="Tags (Add a label to organize contacts) separate using comma"
                value={formik.values.tags}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.tags && Boolean(formik.errors.tags)}
                errorText={formik.errors.tags}

              />
            </div>

          </div>
          <div className=" grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Checkbox checked={false} />
              <span className="text-sm font-medium">Customer</span>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox checked={false} />
              <span className="text-sm font-medium">Customer</span>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox checked={false} />
              <span className="text-sm font-medium">Sales</span>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox checked={false} />
              <span className="text-sm font-medium">Sales</span>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox checked={false} />
              <span className="text-sm font-medium">Supplier</span>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox checked={false} />
              <span className="text-sm font-medium">Supplier</span>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox checked={false} />
              <span className="text-sm font-medium">Choir Member</span>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox checked={false} />
              <span className="text-sm font-medium">Choir Member</span>
            </div>
          </div>
          <div>
            {isUpdating ? <div className="w-full flex items-center justify-center">
              <Spinner />
            </div> : <div className="flex items-center w-full justify-between">
              <Button
                text="Delete Contact"
                icon_style="txt"
                btntype="button"
                type="destructive"
                size="sm"
                onClick={() => {

                  setIsOpen(false);
                  setIsOpenDeleteModal(true)
                  formik.resetForm();
                }}
              />
              <div className="mt-1 flex items-center  gap-2">
                <Button
                  text="Cancel"
                  icon_style="txt"
                  btntype="button"
                  size="sm"
                  onClick={() => {

                    setIsOpen(false);
                    setSelectedItems([]);
                    formik.resetForm();
                  }}
                />
                <Button
                  text="Save Changes"
                  icon_style="txt"
                  // btntype="button"

                  size="sm"
                  type="primary"
                />
              </div>
            </div>}
          </div>
        </form>}
      </div>
    </div>
  );
};

export default EditContact;
