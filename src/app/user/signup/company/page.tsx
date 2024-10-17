"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { validationSchemaCompany } from "@/app/validation";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";

import Modal from "../Modal";
import { employeeCountOptions, industryOptions, subscriberRangeOptions } from "@/utils/data";

const Company = () => {
  const router = useRouter();
  const [dropdownStates, setDropdownStates] = useState({
    industry: false,
    employeeCount: false,
    subscriberRange: false,
  });

  const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state

  const formik = useFormik({
    initialValues: {
      brn: "",
      industry: "",
      employeeCount: "",
      subscriberRange: "",
    },
    validationSchema: validationSchemaCompany,
    onSubmit: (values) => {
      console.log(values);
      setModalOpen(true); 
    },
  });

  const toggleDropdown = (field: keyof typeof dropdownStates) => {
    setDropdownStates((prev) => ({
      ...prev,
      [field]: !prev[field],
      // Close other dropdowns when opening one
      ...(Object.keys(prev) as Array<keyof typeof dropdownStates>).reduce(
        (acc, key) => {
          if (key !== field) acc[key] = false;
          return acc;
        },
        {} as typeof dropdownStates
      ),
    }));
  };

  const handleSelect = (field: keyof typeof dropdownStates, value: string) => {
    formik.setFieldValue(field, value);
    setDropdownStates((prev) => ({ ...prev, [field]: false })); // Close the dropdown
  };
  
  return (
    <div className="mt-10 px-6 lg:px-7 mb-10">
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <h1 className="text-[#101928] text-2xl lg:text-3xl font-medium lg:leading-[38px]">
        Let's setup your account
      </h1>
      <p className="text-sm lg:text-base text-[#989FAD] mt-3.5 font-normal leading-5">
        First, we need to know a few things about you
      </p>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="flex flex-col gap-y-8 mt-10">
          <InputField
            inputType="number"
            label="Business Registration Number"
            placeholder="Your official registration number"
            id="brn"
            name="brn"
            value={formik.values.brn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.brn && Boolean(formik.errors.brn)}
            errorText={formik.touched.brn ? formik.errors.brn : ""}
          />
          <SelectField
            label="What industry are you in?"
            placeholder="Select industry"
            isOpen={dropdownStates.industry}
            onToggle={() => toggleDropdown("industry")}
            options={industryOptions}
            onSelect={(value) => handleSelect("industry", value)}
            value={formik.values.industry}
            error={formik.touched.industry && Boolean(formik.errors.industry)}
            errorText={formik.touched.industry ? formik.errors.industry : ""}
            name="industry"
          />
          <SelectField
            label="How many employees does your company have?"
            placeholder="Select team number"
            isOpen={dropdownStates.employeeCount}
            onToggle={() => toggleDropdown("employeeCount")}
            options={employeeCountOptions}
            onSelect={(value) => handleSelect("employeeCount", value)}
            value={formik.values.employeeCount}
            error={
              formik.touched.employeeCount &&
              Boolean(formik.errors.employeeCount)
            }
            errorText={
              formik.touched.employeeCount ? formik.errors.employeeCount : ""
            }
            name="employeeCount"
          />
          <SelectField
            label="How many subscribers do you want to reach?"
            placeholder="Select the range"
            isOpen={dropdownStates.subscriberRange}
            onToggle={() => toggleDropdown("subscriberRange")}
            options={subscriberRangeOptions}
            onSelect={(value) => handleSelect("subscriberRange", value)}
            value={formik.values.subscriberRange}
            error={
              formik.touched.subscriberRange &&
              Boolean(formik.errors.subscriberRange)
            }
            errorText={
              formik.touched.subscriberRange
                ? formik.errors.subscriberRange
                : ""
            }
            name="subscriberRange"
          />
          <Button className="mt-8" text="Finish setup" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Company;
