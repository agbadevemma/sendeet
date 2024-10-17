import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const validationSchemaBasicInfo = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  companyName: Yup.string().required("Company name is required"),
  companyAddress: Yup.string().required("Company address is required"),
  website: Yup.string().url("Invalid URL").notRequired(),
  hasWebsite: Yup.boolean(),
});

export const validationSchemaCompany = Yup.object({
  brn: Yup.string()
    .required("Business Registration Number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, "Business Registration Number must be at least 2 digits")
    .max(20, "Business Registration Number must not exceed 20 digits"),
});
