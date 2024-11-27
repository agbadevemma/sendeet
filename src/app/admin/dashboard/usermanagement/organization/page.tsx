"use client";
import Button from "@/components/buttons/Button";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import ArrowUp from "@/icons/arrow-up";
import Building5 from "@/icons/building-5";
import DotV from "@/icons/dot-v";
import Eye from "@/icons/eye";
import FileDownload from "@/icons/file-download";
import FilterAlt from "@/icons/filter-alt";
import SearchIcon from "@/icons/search-icon";
import SendAlt from "@/icons/send-alt";
import UserAdd from "@/icons/user-add";
import UserGroup from "@/icons/user-group";
import UserTick from "@/icons/user-tick";
import { organizations } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import illustration from  "../../../../../images/illustration3.svg"
import React, { useState } from "react";

type Props = {};

const Organization = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div>
      <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <Building5 color="#383E49" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Organization</p>
            <p className="text-sm text-grey-500">
              Manage Organization profiles, track activity, and oversee their
              campaigns
            </p>
          </div>
        </div>

        <div className="flex  gap-3">
          <Button
            size="sm"
            iconComponent={<FileDownload color="#383E49" />}
            icon_style="leading-icon"
            text="Export"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4   mt-6 w-full">
        {/* Insight Cards */}
        <Card
          title="Total Organization"
          value="125"
          className1="text-[#475367]"
          percentage="5%"
          mainIcon={<UserGroup height={20} width={20} color="#667085" />}
        />
        <Card
          title="Active Organization"
          value="89"
          percentage="2%"
          className1="text-[#475367]"
          mainIcon={<UserTick height={20} width={20} color="#667085" />}
        />{" "}
        <Card
          title="Inactive Organization"
          value="36"
          percentage="1%"
          className1="text-[#475367]"
          oppositeFlow={true}
          mainIcon={<UserAdd height={20} width={20} color="#667085" />}
        />
      </div>
      <div className="rounded-xl mt-7  h-full w-full border border-[#E4E7EC] ">
        <div className="flex flex-col lg:flex-row lg:gap-4 px-6 py-4 gap-8 lg:items-center  justify-between">
          <div className="text-lg font-medium">
            {organizations.length} Campaigns
          </div>

          <div className="flex gap items-center gap-x-[18px] ">
            <Button
              size="sm"
              className="!h-[40px]"
              text="Filters"
              icon_style="leading-icon"
              iconComponent={<FilterAlt color="#383E49" />}
            />

            <SearchInput
              placeholder="Search"
              className="!h-[40px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<SearchIcon color="#667085" />}
            />
          </div>
        </div>
        <table className="w-full">
          <thead className="text-grey-600 rounded  top-0 z-10">
            <tr className="bg-[#F9FAFB]">
              <th className="pl-6 pr-2 py-2 rounded-s-lg">
                <div className="flex items-center text-nowrap gap-2 text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                  {/* <Checkbox
                        checked={isAllSelected}
                        indeterminate={isIndeterminate}
                        onClick={handleSelectAll}
                      /> */}
                  <span> Organization Name</span>
                  <div
                  // onClick={() => handleSort("name")}
                  // className={` transition-transform duration-300   ${
                  //   sortConfig?.key === "name" &&
                  //   sortConfig.direction === "asc"
                  //     ? "transform rotate-180"
                  //     : ""
                  // }`}
                  >
                    <ArrowUp color={"#5D6679"} />
                  </div>
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                  Email Address
                  <div
                  // onClick={() => handleSort("phoneNumber")}
                  // className={` transition-transform duration-300   ${
                  //   sortConfig?.key === "phoneNumber" &&
                  //   sortConfig.direction === "asc"
                  //     ? "transform rotate-180"
                  //     : ""
                  // }`}
                  >
                    <ArrowUp color={"#5D6679"} />
                  </div>
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                  Registration Date
                  <div
                  // onClick={() => handleSort("business")}
                  // className={` transition-transform duration-300   ${
                  //   sortConfig?.key === "business" &&
                  //   sortConfig.direction === "asc"
                  //     ? "transform rotate-180"
                  //     : ""
                  // }`}
                  >
                    <ArrowUp color={"#5D6679"} />
                  </div>
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                  Industry
                  <div
                  // onClick={() => handleSort("business")}
                  // className={` transition-transform duration-300   ${
                  //   sortConfig?.key === "business" &&
                  //   sortConfig.direction === "asc"
                  //     ? "transform rotate-180"
                  //     : ""
                  // }`}
                  >
                    <ArrowUp color={"#5D6679"} />
                  </div>
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                  WhatsApp API Status
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                  Actions
                </div>
              </th>
            </tr>
          </thead>

          {organizations.length !== 0 && (
            <tbody>
              {organizations.map((org, index) => (
                <tr
                  key={org.id}
                  className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                >
                  <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                    <Checkbox
                      checked={false}
                      // onClick={() => handleSelectItem(index)}
                    />
                    {org.organizationName}
                  </td>
                  <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                    {org.emailAddress}
                  </td>
                  <td className="text-sm font-medium text-grey-800 p-2">
                    {org.registrationDate}
                  </td>
                  <td className="text-sm font-medium text-grey-800 p-2">
                    {org.industry}
                  </td>

                  <td className="text-sm font-medium  p-2">
                    <div
                      className={`p-1 px-2 whitespace-nowrap  ${
                        org.whatsappAPIStatus === "Connected"
                          ? "bg-success-50 text-success-700"
                          : "bg-[#F2F4F7] text-grey-700"
                      } rounded-2xl flex items-center gap-2 w-fit`}
                    >
                      <div
                        className={`rounded-full h-2 w-2 text-success-700 ${
                          org.whatsappAPIStatus === "Connected"
                            ? " bg-success-500"
                            : "bg-[#667085] "
                        }`}
                      ></div>
                      {org.whatsappAPIStatus}
                    </div>
                  </td>
                  <td className="text-sm font-medium gap-2 text-grey-800 p-2 flex items-center">
                    <Link
                      href={`/admin/dashboard/usermanagement/organization/${org.id}`}
                    >
                      {" "}
                      <Button
                        size="sm"
                        icon_style="icon-only"
                        iconComponent={<Eye color="#858D9D" />}
                        text="Edit"
                      />
                    </Link>
                    <Button
                      size="sm"
                      iconComponent={<DotV color="#858D9D" />}
                      icon_style="icon-only"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      {organizations.length >= 10 && (
            <div className="w-full  pt-[11px] pb-[16px] p-6 ">
              <Pagination />
            </div>
          )}
          {organizations.length === 0 && (
            <div className="w-full h-80 flex flex-col  text-center  mt-32 mb-32 items-center justify-center mx-auto">
              <Image src={illustration} alt="img" className="mx-auto" />
              <p className="text-lg font-semibold">No Organizations Yet</p>
              <p className="text-[#475367] text-sm max-w-[260px] w-full mt-1">
              It looks like no Organizationes have been registered on the platform.
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Organization;
