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
import countrycallcode from "../utils/countrycodes.json";
import UserAdd from "@/icons/user-add";
import { useFormik } from "formik";
import { validationSchemaContactSetup } from "@/utils/validation";
import { useAddContactMutation } from "@/lib/slices/contactApi";
import Spinner from "./spinner";
import useLogout from "@/hooks/useLogout";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const AddContact = ({ setIsOpen, isOpen }: Props) => {

  const [addContact, { isLoading }] = useAddContactMutation();
  const callCodes = countrycallcode.map((item, index) => {
    return {
      value: item.code,
      option: `${item.code} ${item.dial_code}`
    }
  })
  interface Contact {
    id?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    tags: string[];
  }

  const { handleLogout } = useLogout({role:"organization"});
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      countryCode: "NG",
      tags: "",
    },
    validationSchema: validationSchemaContactSetup,
    onSubmit: async (values) => {
      const tagsArray = values.tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag !== ""); // Remove empty tags
        const callCode = countrycallcode.find((c) => c.code === values.countryCode.toLocaleUpperCase())
      try {
        await addContact({
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: callCode?.code + "-" + callCode?.dial_code + "-" + values.phoneNumber,
          tags: tagsArray
        }).unwrap();
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
                <span className="text-[#009BE1]">{values.firstName} {values.lastName}</span> has been added to your contacts list
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
        formik.resetForm()

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


  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`pt-[6%] top-0 left-0 z-50 h-screen w-full bg-black/20 fixed overflow   ${isOpen ? "visible" : "invisible"
          } `}
      >
        <form
          onClick={(e) => {
            e.stopPropagation();
          }
          }
          onSubmit={formik.handleSubmit}
          className={`max-w-[523px] mx-auto w-full h-fit min-h-32 flex flex-col gap-8  bg-white rounded-[12px]  p-6  ease-in-out transition-all duration-700 ${isOpen ? "opacity-[100%] " : " opacity-0"
            }`}
        >
          <div className="w-full flex items-start gap-5">
            <div className=" flex items-center justify-center p-3 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <UserAdd color="black" />
            </div>

            <div className="w-full flex flex-col">
              <p className="text-[#101928] font-semibold text-[20px]">
                Add New Contact
              </p>
              <p className="text-[#5D6679] text-[14px] ">
                Manually add a single contact
              </p>
            </div>
            <Button
              text="Cancel"
              icon_style="icon-only"
              onClick={() => setIsOpen(false)}
              className="!h-8 !w-8"
              btntype="button"
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
                name="firstName"
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
                name="lastName"

                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                errorText={formik.errors.lastName}
              />
            </div>
            <div className="flex flex-col gap-1 mt-6 group">
              <label className="text-sm lg:text-md font-normal" htmlFor="Phone Number">Phone Number</label>
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
                  className={`h-12 px-4 w-full focus:outline-none text-sm lg:text-md rounded-r-lg bg-transparent border ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "border-error-500" : "border-grey-100"}`}
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
            <div className="mt-6">

              <div className="flex flex-col gap-1">
                <label className="text-sm lg:text-md font-normal">Tags</label>
                <input type="text" placeholder="Tags (Add a label to organize contacts) separate using comma" className={`!h-[44px] w-full focus:outline-none text-sm lg:text-md bg-transparent border border-solid  p-4 rounded-lg placeholder:text-sm ${formik.touched.tags && formik.errors.tags ? "border-error-500" : "border-grey-100"}`}
                  value={formik.values.tags}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="tags"

                />
                {formik.touched.tags && formik.errors.tags && (
                  <p className="text-xs text-error-500">{formik.errors.tags}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-end gap-2">
            {isLoading ?
              <Spinner /> : <div className="w-full flex items-center justify-end gap-2">
                <Button
                  text="Cancel"
                  icon_style="txt"
                  size="sm"
                  btntype="button"
                  onClick={() => {
                    setIsOpen(false)
                  }}
                />
                <Button
                  text="Confirm"
                  icon_style="txt"
                  btntype="submit"
                  size="sm"
                  type="primary"
                />
              </div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
