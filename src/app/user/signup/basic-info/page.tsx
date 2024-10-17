"use client";
import { validationSchemaBasicInfo } from "@/app/validation";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import arrow from "../../../../images/icons/chevron-white.svg";
import location from "../../../../images/icons/map-marker.svg";
import building from "../../../../images/icons/building-5.svg";
import globe from "../../../../images/icons/globe.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  companyAddress: string;
  website: string;
  hasWebsite: boolean;
};

const FinishSetup = () => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      companyAddress: "",
      website: "",
      hasWebsite: false,
    },
    validationSchema: validationSchemaBasicInfo,
    onSubmit: () => {
      router.push("/user/signup/company");
    },
  });

  const toggleWebsiteField = () => {
    const hasWebsite = !formik.values.hasWebsite;
    formik.setFieldValue("hasWebsite", hasWebsite);
    formik.setFieldValue("website", !hasWebsite ? "" : "https://nil.com/");
  };

  return (
    <div className="mt-10 px-[24px] lg:px-[28px] mb-10">
      <p className="text-[#101928] text-[24px] lg:leading-[38px] lg:text-3xl font-medium">
        Let’s setup your account
      </p>
      <p className="lg:text-base text-sm leading-[20px] font-normal text-[#989FAD] mt-[14px]">
        First, we need to know a few things about you
      </p>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-10">
          <InputField
            inputType="text"
            label="First Name"
            placeholder="Your first name"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            errorText={formik.errors.firstName}
          />
          <InputField
            inputType="text"
            label="Last Name"
            placeholder="Your last name"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            errorText={formik.errors.lastName}
          />
          <InputField
            inputType="text"
            label="Company Name"
            placeholder="Your company name"
            className="col-span-2"
            iconSrc={building}
            id="companyName"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.companyName && Boolean(formik.errors.companyName)
            }
            errorText={formik.errors.companyName}
          />
          <InputField
            inputType="text"
            label="Company Address"
            placeholder="Your company address"
            className="col-span-2"
            iconSrc={location}
            id="companyAddress"
            name="companyAddress"
            value={formik.values.companyAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.companyAddress &&
              Boolean(formik.errors.companyAddress)
            }
            errorText={formik.errors.companyAddress}
          />
          <InputField
            inputType="text"
            label="Website"
            placeholder="Link to your company website"
            className="col-span-2"
            id="website"
            iconSrc={globe}
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.website && Boolean(formik.errors.website)}
            errorText={formik.errors.website}
          />
        </div>

        <div className="flex flex-col mt-4">
          <div
            onClick={toggleWebsiteField}
            className="flex items-center gap-2 text-[#383E49] cursor-pointer"
          >
            <Checkbox
              id="hasWebsite"
              name="hasWebsite"
              checked={formik.values.hasWebsite}
            />
            <p className="text-sm">I don’t have a website</p>
          </div>
          {formik.touched.hasWebsite && formik.errors.hasWebsite && (
            <p className="text-red-500 text-sm mt-2">
              {formik.errors.hasWebsite}
            </p>
          )}
        </div>

        <Button className="mt-8" text="Company details" iconSrc={arrow} />
      </form>
    </div>
  );
};

export default FinishSetup;
