"use client"
import { validationSchemaCompany } from "@/app/validation";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import React from "react";

type Props = {};

const Company = (props: Props) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
    brn:""
    },
    validationSchema: validationSchemaCompany,
    onSubmit: (values) => {
      router.push("/user/signup/company");
    },
  });
  return (
    <div>
      <div className=" mt-10 px-[24px] lg:px-[28px] mb-10">
        <p className="text-[#101928] text-[24px] lg:leading-[38px] lg:text-3xl font-medium">
          Let’s setup your account
        </p>
        <p className="lg:text-base text-sm leading-[20px] font-normal text-[#989FAD] mt-[14px]">
          First, we need to know a few things about you
        </p>
        <form onSubmit={formik.handleSubmit} className="w-full">
          {" "}
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
              error={
                formik.touched.brn && Boolean(formik.errors.brn)
              }
              errorText={formik.errors.brn}
            />
            <SelectField label="What industry are you in?"  placeholder="Select " />
            <SelectField label="How many employees does your company have?"  placeholder="Select team number" />
            <SelectField label="How many subscribers do you want to reach?"  placeholder="Select the range" />
            <Button className="mt-8" text="Finish setup" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Company;
