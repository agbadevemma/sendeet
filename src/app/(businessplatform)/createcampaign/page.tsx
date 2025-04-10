"use client";
import { validationSchemaCampaignSetup } from "@/utils/validation";
import Button from "@/components/buttons/Button";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import TextArea from "@/components/TextArea";
import LoudSpeaker from "@/icons/loudspeaker";
import UserGroup from "@/icons/user-group";
import { messageTypeOptions, Step1Data, targetAudienceOptions } from "@/utils/data";
import { useFormik } from "formik";
import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";
import { useCreateCampaignMutation } from "@/lib/slices/campaign";

type Props = {};
interface DropdownStates {
  targetAudience: boolean;
  messageType: boolean;
}

interface FormValues {
  campaignName: string;
  campaignDescription: string;
  messageType: string;
  targetAudience: string;
}
const Setup = (props: Props) => {
  const router = useRouter();
  const [createCampaign, { isLoading }] = useCreateCampaignMutation();
  console.log("secureLocalStorage.getItem(step1)", secureLocalStorage.getItem("step1"));


  const storedData = secureLocalStorage.getItem("step1") as unknown as Step1Data | null;
  const formik = useFormik<FormValues>({
    initialValues: {
      campaignName: storedData?.campaignName || "",
      campaignDescription: storedData?.campaignDescription || "",
      messageType: storedData?.messageType || "",
      targetAudience: storedData?.targetAudience || "",
    },
    validationSchema: validationSchemaCampaignSetup,
    onSubmit: async (values) => {
      console.log(values);
      try {
        secureLocalStorage.setItem("step1", values);

        router.push("/createcampaign/compose");
      } catch (error) {

      }
    },
  });
  const [dropdownStates, setDropdownStates] = useState<DropdownStates>({
    messageType: false,
    targetAudience: false,
  });
  const toggleDropdown = (field: keyof DropdownStates) => {
    setDropdownStates((prev) => ({
      ...prev,
      [field]: !prev[field],
      // Close other dropdowns when opening one
      ...(Object.keys(prev) as Array<keyof DropdownStates>).reduce(
        (acc, key) => {
          if (key !== field) acc[key] = false;
          return acc;
        },
        {} as DropdownStates
      ),
    }));
  };
  const handleSelect = (field: keyof FormValues, value: string) => {
    formik.setFieldValue(field, value);
    setDropdownStates((prev) => ({ ...prev, [field]: false }));
  };

  return (
   <div className="max-w-[640px] lg:ml-[14%] w-full">
     <div className=" px-4 w-full  ">
      <p className="text-lg  font-semibold  border-b borer-[#D0D3D9]  pb-6">
        1. Setup Campaign Details
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-8 flex flex-col gap-5 ">
          <InputField
            size="sm"
            inputType="text"
            label="Campaign Name"
            placeholder="Enter a name for your campaign"
            value={formik.values.campaignName}
            name="campaignName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.campaignName && Boolean(formik.errors.campaignName)}
            errorText={formik.touched.campaignName ? formik.errors.campaignName : ""}
          />
          <TextArea
            label="Campaign Description"
            placeholder="Enter a description..."
            size="sm"
            value={formik.values.campaignDescription}
            onChange={formik.handleChange}
            name="campaignDescription"
            onBlur={formik.handleBlur}
            error={
              formik.touched.campaignDescription &&
              Boolean(formik.errors.campaignDescription)
            }
            errorText={
              formik.touched.campaignDescription
                ? formik.errors.campaignDescription
                : ""
            }
          />
          <div className="w-full flex lg:flex-row flex-col gap-4">
            <SelectField
              label="Message Type"
              name="messageType"
              options={messageTypeOptions}
              isOpen={dropdownStates.messageType}
              onToggle={() => toggleDropdown("messageType")}
              onSelect={(value) => handleSelect("messageType", value)}
              value={formik.values.messageType}
              error={
                formik.touched.messageType && Boolean(formik.errors.messageType)
              }
              errorText={
                formik.touched.messageType ? formik.errors.messageType : ""
              }
              icon={<LoudSpeaker color="#858D9D" />}
            />
            <SelectField
              label="Target Audience"
              name="targetAudience"
              options={targetAudienceOptions}
              isOpen={dropdownStates.targetAudience}
              onToggle={() => toggleDropdown("targetAudience")}
              onSelect={(value) => handleSelect("targetAudience", value)}
              value={formik.values.targetAudience}
              error={
                formik.touched.targetAudience &&
                Boolean(formik.errors.targetAudience)
              }
              errorText={
                formik.touched.targetAudience
                  ? formik.errors.targetAudience
                  : ""
              }
              icon={<UserGroup color="#858D9D" />}
            />
          </div>
        </div>
        <div className="mt-8 pb-8  border-b borer-[#D0D3D9]">
          <p className="text-base font-medium  ">Estimated Cost</p>
          <div className="flex flex-col gap-4 text-grey-500 text-sm mt-5">
            <div className="flex items-center justify-between">
              <p className="text-sm">Price</p>
              <p className="text-sm text-[#101828]">
                {formik.values.messageType &&
                  formik.values.targetAudience &&
                  "₦"}
                {formik.values.messageType && formik.values.targetAudience
                  ? Number("26486").toLocaleString()
                  : "-"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Credits</p>
              <p className="text-sm text-[#101828]">
                {formik.values.messageType && formik.values.targetAudience
                  ? Number("500").toLocaleString()
                  : "-"}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 flex justify-between items-center pb-10">
          <Button
            text="Save to drafts"
            type="secondary"
            size="sm"
            className="font-semibold text-md"
          />
          <Button
            text="Next: Compose Message"
            type="primary"
            size="sm"
            className="font-semibold text-md"
          />
        </div>
      </form>
    </div>
   </div>
  );
};

export default Setup;
