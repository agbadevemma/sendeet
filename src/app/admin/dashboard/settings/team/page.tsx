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
  return (
    <div>
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

                      <div className="relative"  ref={secondDropdownRef}>
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
                              <User
                                color="#383E49"
                                height={16}
                                width={16}
                              />
                              <span className="text-xs text-[#383E49]">View Profile</span>
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
                              <span className="text-xs text-[#383E49]">Edit Details</span>
                            </div>
                            <div
                              onClick={() =>
                                setIsSecondDropdownOpen((prev) => !prev)
                              }
                              className="flex gap-2 hover:bg-[#F9FAFB] py-1.5"
                            >
                              <Bin color="#D42620" height={16} width={16} />
                              <span className="text-xs text-error-500">Delete user</span>
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
