"use client";
import Button from "@/components/buttons/Button";
import InputField from "@/components/InputField";
import SearchIcon from "@/icons/search-icon";
import ArrowUp from "@/icons/arrow-up";
import FilterAlt from "@/icons/filter-alt";
import Plus from "@/icons/plus";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DotV from "@/icons/dot-v";
import ChevronDown from "@/icons/cheveron-down";
import PencilEdit from "@/icons/pencil-edit";
import Bin from "@/icons/bin";
import User from "@/icons/user";
import Multiply from "@/icons/multiply";
import Link from "next/link";
import { validationSchemaUserDetials } from "@/utils/validation";
import { useFormik } from "formik";
import Checkbox from "@/components/Checkbox";
import RadioButton from "@/components/RadioButton";
import UserGroup from "@/icons/user-group";
import InfoCircle from "@/icons/info-circle";
import Headset from "@/icons/headset";
import Settings from "@/icons/settings";
import Users from "@/icons/users";

type TeamMember = {
  id: string;
  organizationName: string;
  username: string;
  lastActive: string;
  dateAdded: string;
  access: string;
  role: string;
};

const mockTeamMembers = [
  {
    id: "1",
    organizationName: "Tech Corp",
    username: "Software",
    firstName: "Emmanuel",
    lastName: "Olaniyi",
    email: "ola@gmail.com",
    image:
      "https://res.cloudinary.com/drk0qpvme/image/upload/v1740088917/drk0qpvme/ighs2oywccirzkw9qo7x.jpg",

    lastActive: "05/12/2020",
    dateAdded: "05/12/2020",
    access: ["Users", "credits"],
    roles: ["Super Admin", "Moderator", "Editor", "Viewer"],
  },
];

const Team = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);

  const getFilteredOrganizations = () => {
    return mockTeamMembers.filter((member) =>
      member.organizationName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const [roles, setRoles] = useState([
    "Super Admin",
    "Moderator",
    "Editor",
    "Viewer",
  ]);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] =
    useState<boolean>(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] =
    useState<boolean>(false);
  const firstDropdownRef = useRef<HTMLDivElement | null>(null);
  const secondDropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        firstDropdownRef.current &&
        !firstDropdownRef.current.contains(event.target as Node)
      ) {
        setIsFirstDropdownOpen(false);
      }
      if (
        secondDropdownRef.current &&
        !secondDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSecondDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchemaUserDetials,
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("Form submitted:", values);

      try {
        // const response = await updateUser({
        //   firstName: values.firstName,
        //   lastName: values.lastName,
        //   companyLogo: uploadedCompanyImage,
        //   profilePicture: uploadedProfileImage,
        // }).unwrap();
        // await updateBusiness({
        //   companyName: values.companyName,
        //   businessRegistrationNumber: values.brn,
        // }).unwrap();
        // console.log("Update Success:", response);
        // window.location.reload();
      } catch (error) {
        console.error("Update Error:", error);
      }
    },
  });
  return (
    <div>
      {/* modal 1 */}
      <div
        onClick={() => setIsModalOpen(false)}
        className={`fixed w-full h-screen flex  items-start gap-3 justify-end  overflow-auto bg-black/20 top-0 left-0 z-50  p-4   transition-all duration-500 ${
          isModalOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex justify-end items-center mt-4  cursor-pointer">
          <div
            onClick={() => setIsModalOpen(false)}
            className="flex items-center p-2 w-fit rounded-full bg-white   justify-center border border-[#E4E7EC]"
          >
            <Multiply color="#5D6679" />
          </div>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`h-full bg-white  max-w-[475px] gap-4 campaign flex flex-col overflow-auto  py  w-full rounded-xl mt   transition-all duration-500 p-6   ${
            isModalOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* <div className="flex justify-end items-center   cursor-pointer">
            <div
              onClick={() => setIsModalOpen(false)}
              className="flex items-center p-2 w-fit rounded-lg  justify-center border border-[#E4E7EC]"
            >
              <Multiply color="#5D6679" />
            </div>
          </div> */}
          <div className="flex items-start gap-3">
            <div className=" flex items-center h-12 w-12  bg-white  justify-center p- shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <User color="#383E49" />
            </div>
            <div className=" max-w-[348px] w-full">
              <p className=" text-[18px] font-semibold">Add Team Member</p>
              <p className="text-[80%] text-grey-600">
                Assign new team members with specific roles and permissions.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-4">
              {" "}
              <InputField
                label="First name"
                inputType=""
                placeholder=""
                className="w-full !h-[46px]"
                labelClassName="!text-sm "
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.touched.firstName && formik.errors.firstName
                )}
                errorText={
                  typeof formik.errors.firstName === "string"
                    ? formik.errors.firstName
                    : undefined
                }
              />{" "}
              <InputField
                label="Last name"
                inputType=""
                placeholder=""
                className="w-full !h-[46px]"
                labelClassName="!text-sm "
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.touched.lastName && formik.errors.lastName
                )}
                errorText={
                  typeof formik.errors.lastName === "string"
                    ? formik.errors.lastName
                    : undefined
                }
              />
              <div className="col-span-2 w-full">
                <InputField
                  label="Email"
                  inputType="email"
                  labelClassName="!text-sm "
                  placeholder=""
                  className="w-full !h-[46px]"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  errorText={
                    typeof formik.errors.email === "string"
                      ? formik.errors.email
                      : undefined
                  }
                />
              </div>
              <div className="col-span-2 w-full">
                <InputField
                  label="Phone Number (Optional)"
                  inputType="tel"
                  placeholder=""
                  className="w-full !h-[46px]"
                  labelClassName="!text-sm "
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  )}
                  errorText={
                    typeof formik.errors.phoneNumber === "string"
                      ? formik.errors.phoneNumber
                      : undefined
                  }
                />
              </div>
            </div>
          </div>
          <span className="text-sm mt-[3%] text-grey-800 font-medium">
            Role
          </span>

          <div className="flex flex-col gap-6">
            <div className="flex gap-2 ">
              <div className="mt-1">
                <RadioButton checked={false} />
              </div>
              <div className="flex flex-col">
                <span className="text-grey-800 font-medium text-sm">
                  Super Admin
                </span>
                <span className="text-xs  text-grey-600">
                  The highest level of administrative access, Super Admins have
                  complete control over the entire platform.
                </span>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="mt-1">
                <RadioButton checked={false} />
              </div>
              <div className="flex flex-col">
                <span className="text-grey-800 font-medium text-sm">
                  Support Admin
                </span>
                <span className="text-xs text-grey-600">
                  A specialized administrative role focused on customer support
                  and user assistance.
                </span>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="mt-1">
                <RadioButton checked={false} />
              </div>
              <div className="flex flex-col">
                <span className="text-grey-800 font-medium text-sm">
                  Manager
                </span>
                <span className="text-xs text-grey-600">
                  A supervisory role with oversight of team operations and
                  content management.
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-2 justify-end gap-2">
            <Button
              text="Cancel"
              size="sm"
              onClick={() => setIsModalOpen(false)}
              className=" mb-0 !py-3 !h-[40px]"
            />

            <Button
              text="Configure Permissions"
              type="primary"
              size="sm"
              onClick={() => {
                setIsModalOpen(false);
                setIsModalOpen2(true);
              }}
              className=" mb-0 !py-3 !h-[40px]"
            />
          </div>
        </div>
      </div>

      {/* Modal 2 */}
      <div
        onClick={() => setIsModalOpen2(false)}
        className={`fixed w-full h-screen flex  items-start gap-3 justify-end  overflow-auto bg-black/20 top-0 left-0 z-50  p-4   transition-all duration-500 ${
          isModalOpen2 ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex justify-end items-center mt-4  cursor-pointer">
          <div
            onClick={() => setIsModalOpen2(false)}
            className="flex items-center p-2 w-fit rounded-full bg-white   justify-center border border-[#E4E7EC]"
          >
            <Multiply color="#5D6679" />
          </div>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`h-full bg-white  max-w-[475px] gap-4 campaign flex flex-col overflow-auto  py  w-full rounded-xl mt   transition-all duration-500 p-6   ${
            isModalOpen2 ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className=" flex items-center h-12 w-12  bg-white  justify-center p- shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <User color="#383E49" />
            </div>
            <div className=" max-w-[348px] w-full">
              <p className=" text-[18px] font-semibold">Add Team Members</p>
              <p className="text-[80%] text-grey-600">
                Assign new team members with specific roles and permissions.
              </p>
            </div>
          </div>

          <span className="text-sm mt-[3%] text-grey-800 font-medium">
            Permissions
          </span>
          <div className="py-4 flex-1 gap-6 justify-between  flex flex-col h-43  p-4 px-4  rounded-[12px] bg-[#F9FAFB]">
            <div className="">
              <div className="flex items-center gap-2">
                <UserGroup color="#00AAF7" height={20} width={20} />
                <span className="font-medium text-base text-grey-900">User Access</span>
                <InfoCircle color="#98A2B3" height={15} width={15} />
              </div>
              <div className="grid mt-1 md:grid-cols-2 gap-4 ">
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">
                    View user profiles
                  </span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">Reset passwords</span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">
                    Modify user access
                  </span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">Delete account</span>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-center gap-2">
                <Headset color="#00AAF7" height={20} width={20} />
                <span className="font-medium text-base text-grey-900">Support Tools</span>
                <InfoCircle color="#98A2B3" height={15} width={15} />
              </div>
              <div className="grid mt-1 md:grid-cols-2 gap-4 ">
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">
                  Handle ticketss
                  </span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">Access help centre</span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">
                  Modify documentation
                  </span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px] text-nowrap">View support analytics</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <Settings color="#00AAF7" height={20} width={20} />
                <span className="font-medium text-base text-grey-900">System Settings</span>
                <InfoCircle color="#98A2B3" height={15} width={15} />
              </div>
              <div className="grid mt-1 md:grid-cols-2 gap-4 ">
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">
                  View system logs
                  </span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">Access billing</span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">
                  Manage integrations
                  </span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">Modify configurations</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <Users color="#00AAF7" height={20} width={20} />
                <span className="font-medium text-base text-grey-900">Team Management</span>
                <InfoCircle color="#98A2B3" height={15} width={15} />
              </div>
              <div className="grid mt-1 md:grid-cols-2 gap-4 ">
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">
                  Generate reports
                  </span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">Access help centre</span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px]">
                  Moderate content
                  </span>
                </div>
                <div className="w-full border rounded-lg flex items-center p-2 h-10 gap-2">
                  <Checkbox checked={false} />{" "}
                  <span className="text-grey-600 text-[13px] text-nowrap">View support analytics</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  items-center mt-2 justify-end gap-2">
            <Button
              text="Cancel"
              size="sm"
              onClick={() => setIsModalOpen2(false)}
              className=" mb-0 !py-3 !h-[40px]"
            />

            <Button
              text="Configure Permissions"
              type="primary"
              size="sm"
              onClick={() => setIsModalOpen2(false)}
              className=" mb-0 !py-3 !h-[40px]"
            />
          </div>
        </div>
      </div>
      {/* main page */}
      <div className="flex flex-col mt-4">
        <p className="text-[18px] size font-medium text-[#344054]">
          Team Members
        </p>
        <p className="text-xs text-[#667085]">
          Manage your team members and their account permissions here
        </p>
      </div>

      <div className="border max-h-[805px] border-[#E4E7EC] rounded-xl px-4 p-4 mt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-[18px] text-[#101828] font-medium">
              All Users
            </span>
            <div className="flex items-center justify-center rounded-full text-white bg-primary-500 h-5 w-5">
              {mockTeamMembers.length}
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <InputField
              inputType="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<SearchIcon color="#667085" />}
              icon_style="leading-icon"
              label=""
              className="!py-[10px] !px-[14px]"
            />

            <Button
              iconComponent={<FilterAlt color="#383E49" />}
              text="Filters"
              className="!py-[10px] !px-[14px]"
              icon_style="leading-icon"
            />

            <Button
              iconComponent={<Plus color="#FFF" />}
              text="Add Team Member"
              onClick={() => setIsModalOpen(true)}
              type="primary"
              icon_style="leading-icon"
            />
          </div>
        </div>

        <div className="overflow-x w-full">
          <table className="w-full mt-5">
            <thead className="text-grey-600  top-0 z-10">
              <tr className="bg-[#F9FAFB] ">
                {[
                  "username",
                  "Last Active",
                  "Date Added",
                  "Access",
                  "Role",
                ].map((header) => (
                  <th
                    key={header}
                    className="p-2  first:rounded-s-lg last:rounded-e-lg "
                  >
                    <div className="flex items-center text-nowrap gap-2 text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                      {header}
                      <div className="transition-transform duration-300">
                        <ArrowUp color="#5D6679" />
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {getFilteredOrganizations().map((member) => (
                <tr
                  key={member.id}
                  className="cursor-pointer  hover:bg-gray-50"
                >
                  <td className="text-sm text-nowrap  text-grey-800 p-2">
                    <div className="flex  gap-2">
                      <Image
                        alt=""
                        src={member.image}
                        height={50}
                        width={50}
                        className="rounded-full h-10 w-10 object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="text-[13.5px] font-medium text-[#101828]">
                          {member.firstName} {member.lastName}
                        </span>
                        <span className="text-sm text-[#667085] ">
                          {member.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-[13.5px] font-medium text-grey-800 p-2">
                    {member.lastActive}
                  </td>
                  <td className="text-[13.5px] font-medium text-grey-800 p-2">
                    {member.dateAdded}
                  </td>
                  <td className="text-[13.5px] font-medium text-grey-800 p-2 flex items-center h-full py-4  gap-2">
                    {member.access.map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#EFF8FF] rounded-2xl p-1 px-1.5 text-xs text-[#175CD3]  "
                      >
                        {item}
                      </div>
                    ))}
                  </td>
                  <td className="text-[13.5px]  font-medium text-grey-800 p-2">
                    <div className="flex items-center gap-2">
                      <div className="relative" ref={firstDropdownRef}>
                        <Button
                          onClick={() =>
                            setIsFirstDropdownOpen((prev) => !prev)
                          }
                          className="!px-2 !py-[8px] !text-xs !text-[#667085] !font-normal  !h-[40px] !w[142px]"
                          size="sm"
                          icon_style="trailing icon"
                          iconComponent={
                            <ChevronDown
                              color="#667085"
                              height={14}
                              width={14}
                            />
                          }
                          text="Open Rate"
                        />
                        {isFirstDropdownOpen && (
                          <div className="mt-2 bg-white absolute drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[0.9px] border-[#F0F1F3] right-0 rounded-[10px] p-2 flex flex-col gap-2 z-50">
                            {roles.map((item) => (
                              <div
                                key={item}
                                onClick={() =>
                                  setIsFirstDropdownOpen((prev) => !prev)
                                }
                                className=" text-nowrap font-normal text-xs text-[#667085] rounded-lg cursor-pointer whitespace-nowrap px-[10px] py-2 hover:bg-[#F9FAFB]"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="relative" ref={secondDropdownRef}>
                        <Button
                          size="sm"
                          onClick={() =>
                            setIsSecondDropdownOpen((prev) => !prev)
                          }
                          iconComponent={<DotV color="#858D9D" />}
                          icon_style="icon-only"
                          className="!h-8 !w-8"
                        />
                        {isSecondDropdownOpen && (
                          <div className="mt-2  w-[163px] h-[120px] p-2 bg-white absolute drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[0.9px] border-[#F0F1F3] justify-between right-0 rounded-[10px] flex flex-col gap-2 z-50">
                            <div
                              onClick={() =>
                                setIsSecondDropdownOpen((prev) => !prev)
                              }
                              className="flex gap-2 hover:bg-[#F9FAFB] py-1.5"
                            >
                              <User color="#383E49" height={16} width={16} />
                              <span className="text-xs text-[#383E49]">
                                View Profile
                              </span>
                            </div>
                            <div
                              onClick={() =>
                                setIsSecondDropdownOpen((prev) => !prev)
                              }
                              className="flex gap-2 hover:bg-[#F9FAFB] py-1.5"
                            >
                              <PencilEdit
                                color="#383E49"
                                height={16}
                                width={16}
                              />
                              <span className="text-xs text-[#383E49]">
                                Edit Details
                              </span>
                            </div>
                            <div
                              onClick={() =>
                                setIsSecondDropdownOpen((prev) => !prev)
                              }
                              className="flex gap-2 hover:bg-[#F9FAFB] py-1.5"
                            >
                              <Bin color="#D42620" height={16} width={16} />
                              <span className="text-xs text-error-500">
                                Delete user
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Team;
