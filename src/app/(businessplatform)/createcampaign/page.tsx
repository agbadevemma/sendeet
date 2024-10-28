"use client";
import { validationSchemaCampaignSetup } from "@/app/validation";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import TextArea from "@/components/TextArea";
import { messageTypeOptions, targetAudienceOptions } from "@/utils/data";
import { useFormik } from "formik";
import React, { useState } from "react";

type Props = {};
interface DropdownStates {
  targetAudience: boolean;
  messageType: boolean;
}

interface FormValues {
  campaign: string;
  campaignDescription: string;
  messageType: string;
  targetAudience: string;
}
const Setup = (props: Props) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      campaign: "",
      campaignDescription: "",
      messageType: "",
      targetAudience: "",
    },
    validationSchema: validationSchemaCampaignSetup,
    onSubmit: (values) => {
      console.log(values);
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
    <div>
      <p className="text-lg font-semibold  border-b borer-[#D0D3D9]  pb-6">
        1. Setup Campaign Details
      </p>
      <div className="mt-8 flex flex-col gap-5 ">
        <InputField
          size="sm"
          inputType="text"
          label="Campaign Name"
          placeholder="Enter a name for your campaign"
        />
        <TextArea
          label="Campaign Description"
          placeholder="Enter a description..."
          size="sm"
        />
        <div className="w-full flex gap-4">
        <SelectField
            label="Message Type"
            name="messageType"
            options={messageTypeOptions}
            isOpen={dropdownStates.messageType}
            onToggle={() => toggleDropdown("messageType")}
            onSelect={(value) => handleSelect("messageType", value)}
            value={formik.values.messageType}
            error={formik.touched.messageType && Boolean(formik.errors.messageType)}
            errorText={formik.touched.messageType ? formik.errors.messageType : ""}
          />
          <SelectField
            label="Target Audience"
            name="targetAudience"
            options={targetAudienceOptions}
            isOpen={dropdownStates.targetAudience}
            onToggle={() => toggleDropdown("targetAudience")}
            onSelect={(value) => handleSelect("targetAudience", value)}
            value={formik.values.targetAudience}
            error={formik.touched.targetAudience && Boolean(formik.errors.targetAudience)}
            errorText={formik.touched.targetAudience ? formik.errors.targetAudience : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Setup;
