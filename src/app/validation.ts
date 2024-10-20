import * as Yup from "yup";

// Validation schema for registration
export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

// Validation schema for login
export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// Validation schema for basic information
export const validationSchemaBasicInfo = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  companyName: Yup.string().required("Company name is required"),
  companyAddress: Yup.string().required("Company address is required"),
  website: Yup.string().url("Invalid URL").required(),
  hasWebsite: Yup.boolean(),
});

// Validation schema for company information
export const validationSchemaCompany = Yup.object({
  brn: Yup.string()
    .required("Business Registration Number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, "Business Registration Number must be at least 2 digits")
    .max(20, "Business Registration Number must not exceed 20 digits"),
  industry: Yup.string().required("Industry is required"),
  employeeCount: Yup.string().required("Employee count is required"),
  subscriberRange: Yup.string().required("Subscriber range is required"),
});

// Validation schema for forgot password
export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

// Types for inferred schemas
export type ValidationSchemaType = Yup.InferType<typeof validationSchema>;
export type ValidationSchemaLoginType = Yup.InferType<typeof validationSchemaLogin>;
export type ValidationSchemaBasicInfoType = Yup.InferType<typeof validationSchemaBasicInfo>;
export type ValidationSchemaCompanyType = Yup.InferType<typeof validationSchemaCompany>;
export type ForgotPasswordSchemaType = Yup.InferType<typeof ForgotPasswordSchema>;
