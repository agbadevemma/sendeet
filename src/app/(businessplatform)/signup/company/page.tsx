"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik, FormikProps } from "formik";
import { validationSchemaCompany } from "@/utils/validation";

import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import Modal from "../Modal";
import {
  employeeCountOptions,
  industryOptions,
  subscriberRangeOptions,
} from "@/utils/data";
import Button from "@/components/buttons/Button";

interface FormValues {
  brn: string;
  industry: string;
  employeeCount: string;
  subscriberRange: string;
}

interface DropdownStates {
  industry: boolean;
  employeeCount: boolean;
  subscriberRange: boolean;
}

const Company: React.FC = () => {
  const router = useRouter();

  const [dropdownStates, setDropdownStates] = useState<DropdownStates>({
    industry: false,
    employeeCount: false,
    subscriberRange: false,
  });

  const [isModalOpen, setModalOpen] = useState<boolean>(false); // Modal visibility state

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
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
    setDropdownStates((prev) => ({ ...prev, [field]: false })); // Close the dropdown
  };

  return (
    <div className="mt-10 px-6 lg:px-7 mb-10">
      <>
        {/* Modal */}

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </>
      {/* company page*/}
      <p className="text-display-xs lg:text-display-sm font-semibold ">
        More info about your company
      </p>
      <p className="lg:text-md text-sm  font-normal text-grey-300 mt-3.5">
        Now we need some details about your company
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
        </div>

        <Button text="Finish setup" size="lg" type="primary" className="mt-8" />
      </form>
    </div>
  );
};

export default Company;
