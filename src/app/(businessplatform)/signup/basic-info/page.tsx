"use client";
import { validationSchemaBasicInfo } from "@/utils/validation";

import Checkbox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import arrow from "../../../../images/icons/chevron-white.svg";
import location from "../../../../images/icons/map-marker.svg";
import building from "../../../../images/icons/building-5.svg";
import globe from "../../../../images/icons/globe.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/buttons/Button";
import ChevronIcon from "@/icons/chevron-right";
import MapMarker from "@/icons/map-marker";
import Building5 from "@/icons/building-5";
import GlobeAlt from "@/icons/globe-alt";
import { toggleBasicInfo } from "@/lib/slices/miscellaneousSlice";
import { useAppDispatch } from "@/lib/hooks";

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
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(toggleBasicInfo(false));
  //   // alert("cooler")
  // }, []);

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
      router.push("/signup/company");
    },
  });

  const toggleWebsiteField = () => {
    const hasWebsite = !formik.values.hasWebsite;
    formik.setFieldValue("hasWebsite", hasWebsite);
    formik.setFieldValue("website", !hasWebsite ? "" : "https://nil.com/");
  };

  return (
    <div className="mt-10 px-[24px] lg:px-[28px] mb-10">
      <p className="text-display-xs lg:text-display-sm font-semibold ">
        Let’s setup your account
      </p>
      <p className="lg:text-md text-sm font-normal text-grey-300 mt-3.5">
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
            icon={<Building5 color="#667085" />}
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
            icon={<MapMarker color="#667085" />}
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
            icon={<GlobeAlt color="#667085" />}
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
            <p className="text-sm text-gray-800">I don’t have a website</p>
          </div>
          {formik.touched.hasWebsite && formik.errors.hasWebsite && (
            <p className="text-error-500 text-sm mt-2">
              {formik.errors.hasWebsite}
            </p>
          )}
        </div>

        <Button
          text="Company details"
          iconComponent={<ChevronIcon color="white" />}
          icon_style="trailing icon"
          size="lg"
          type="primary"
          className="mt-8"
        />
      </form>
    </div>
  );
};

export default FinishSetup;
