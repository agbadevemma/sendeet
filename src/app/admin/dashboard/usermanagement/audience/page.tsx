"use client";
import Button from "@/components/buttons/Button";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import ArrowDown from "@/icons/arrow-down";
import ArrowUp from "@/icons/arrow-up";
import Elements from "@/icons/elements";
import FileDownload from "@/icons/file-download";
import Plus from "@/icons/plus";
import UserAdd from "@/icons/user-add";
import UserGroup from "@/icons/user-group";
import UserTick from "@/icons/user-tick";
import { AudienceData, mockAudienceData } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";
import illustration from "../../../../../images/emptyillustration.svg";
import Checkbox from "@/components/Checkbox";
import Eye from "@/icons/eye";
import DotV from "@/icons/dot-v";
import FilterAlt from "@/icons/filter-alt";
import Link from "next/link";

type Props = {};

const Audience = ({}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [audience, setAudience] = useState<AudienceData[]>(mockAudienceData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof AudienceData;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof AudienceData) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedAudience = [...audience].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setAudience(sortedAudience);
  };

  const handleSelectAll = () => {
    if (selectedItems.length < audience.length) {
      // Select all audience
      setSelectedItems(audience.map((_, index) => index));
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (index: number) => {
    const isSelected = selectedItems.includes(index);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== index)); // Deselect item
    } else {
      setSelectedItems([...selectedItems, index]); // Select item
    }
  };

  const getFilteredAudience = () => {
    return mockAudienceData.filter((aud) =>
      aud.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const isAllSelected =
    audience.length > 0 && selectedItems.length === audience.length;
  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < audience.length;
  return (
    <div>
      <div className="w-full ">
        <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
          <div className="flex items-center gap-4">
            <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <UserGroup color="#383E49" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">Audience</p>
              <p className="text-sm text-grey-500">
                Manage end user profiles and subscriptions
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
        <div className="flex  lg:flex-row flex-col w-full gap-4 mt-12">
          <div className="p-4 flex  items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-sm">Total Users</span>
              <span className="text-[#344054] text-xl font-semibold">
                2,376
              </span>

              <div className="flex text-success-600 items-center gap-[6px] ">
                {" "}
                <div className="px-1 rounded-[10px] text-xs flex w-fit items-center gap-[2px] text-success-600 bg-success-50">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="font-medium">2%</span>
                </div>
                <span className=" text-xs">vs lastweek</span>
              </div>
            </div>
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <UserGroup color="#667085" height={20} width={20} />
            </div>
          </div>
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-sm">Active Users</span>
              <span className="text-[#344054] text-xl font-semibold">
                1,452
              </span>
              <div className="flex text-success-600 items-center gap-[6px] ">
                {" "}
                <div className="px-1 rounded-[10px] text-xs flex w-fit items-center gap-[2px] text-success-600 bg-success-50">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="font-medium">2%</span>
                </div>
                <span className=" text-xs">vs lastweek</span>
              </div>
            </div>
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <UserTick height={20} width={20} color="#667085" />
            </div>
          </div>
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-sm">Inactive Users</span>
              <span className="text-[#344054] text-xl font-semibold">422</span>

              <div className="flex items-center gap-[6px]  ">
                <div className="px-1 rounded-[10px] text-xs flex  items-center gap-[2px] text-error-600 bg-error-50">
                  <ArrowDown height={12} width={12} color="#971B17" /> 1%
                </div>
                <span className="text-error-600 text-xs">vs last week</span>
              </div>
            </div>
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <UserAdd height={20} width={20} color="#667085" />
            </div>
          </div>
        </div>
        <div className="rounded-xl mt-7 h-full w-full border border-[#E4E7EC]">
          <div className="flex flex-col lg:flex-row lg:gap-4 px-6 py-4 gap-8 lg:items-center justify-between">
            <div className="text-lg font-medium">
              {mockAudienceData.length} Audience Members
            </div>

            <div className="flex items-center gap-3">
              <Button
                iconComponent={<FilterAlt color="#383E49" />}
                icon_style="leading-icon"
                text="Filters"
              />

              <div className="shadow-xs">
                <SearchInput
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full mx-auto px-6 overflow-auto mt-[18px] max-h-[814px]">
            <table className="w-full">
              <thead className="text-grey-600 rounded sticky top-0 z-10">
                <tr className="bg-[#F9FAFB]">
                  <th className="pl-6 pr-2 py-2 rounded-s-lg">
                    <div className="flex items-center text-nowrap gap-2 text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                      <Checkbox
                        checked={isAllSelected}
                        indeterminate={isIndeterminate}
                        onClick={handleSelectAll}
                      />
                      <span> Name</span>
                      <div
                        onClick={() => handleSort("name")}
                        className={` transition-transform duration-300   ${
                          sortConfig?.key === "name" &&
                          sortConfig.direction === "asc"
                            ? "transform rotate-180"
                            : ""
                        }`}
                      >
                        <ArrowUp color={"#5D6679"} />
                      </div>
                    </div>
                  </th>
                  <th className="p-2">
                    <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                      Phone Number
                      <div
                        onClick={() => handleSort("phoneNumber")}
                        className={` transition-transform duration-300   ${
                          sortConfig?.key === "phoneNumber" &&
                          sortConfig.direction === "asc"
                            ? "transform rotate-180"
                            : ""
                        }`}
                      >
                        <ArrowUp color={"#5D6679"} />
                      </div>
                    </div>
                  </th>
                  <th className="p-2">
                    <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                    Organization
                      <div
                        onClick={() => handleSort("business")}
                        className={` transition-transform duration-300   ${
                          sortConfig?.key === "business" &&
                          sortConfig.direction === "asc"
                            ? "transform rotate-180"
                            : ""
                        }`}
                      >
                        <ArrowUp color={"#5D6679"} />
                      </div>
                    </div>
                  </th>
                  <th className="p-2">
                    <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                      Subscription Status
                    </div>
                  </th>
                  <th className="p-2">
                    <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                      Actions
                    </div>
                  </th>
                  <th className="p-2 rounded-e-lg">
                    <div className="flex items-center text-nowrap  text-[#5D6679] text-sm font-medium">
                      Status
                    </div>
                  </th>
                </tr>
              </thead>

              {mockAudienceData.length !== 0 && (
                <tbody>
                  {getFilteredAudience().map((aud, index) => (
                    <tr
                      key={aud.id}
                      className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                    >
                      <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                        <Checkbox
                          checked={selectedItems.includes(index)}
                          onClick={() => handleSelectItem(index)}
                        />{" "}
                        {aud.name}
                      </td>
                      <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                        {aud.phoneNumber}
                      </td>
                      <td className="text-sm font-medium text-grey-800 p-2">
                        {aud.business}
                      </td>
                      <td className="text-sm font-medium text-grey-800 p-2">
                        {aud.lastEngagement}
                      </td>
                      <td className="text-sm font-medium  p-2">
                        <div
                          className={`p-1 px-2 whitespace-nowrap  ${
                            aud.subscription === "Opted In"
                              ? "bg-success-50 text-success-700"
                              : "bg-[#F2F4F7] text-grey-700"
                          } rounded-2xl flex items-center gap-2 w-fit`}
                        >
                          <div
                            className={`rounded-full h-2 w-2 text-success-700 ${
                              aud.subscription === "Opted In"
                                ? " bg-success-500"
                                : "bg-[#667085] "
                            }`}
                          ></div>
                          {aud.subscription}
                        </div>
                      </td>
                      <td className="text-sm font-medium gap-2 text-grey-800 p-2 flex items-center">
                        <Link
                          href={`/admin/dashboard/usermanagement/audience/${aud.id}`}
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
          </div>
          {mockAudienceData.length >= 10 && (
            <div className="w-full  pt-[11px] pb-[16px] p-6 ">
              <Pagination />
            </div>
          )}
          {mockAudienceData.length === 0 && (
            <div className="w-full h-80 flex flex-col  text-center  mt-32 mb-32 items-center justify-center mx-auto">
              <Image src={illustration} alt="img" className="mx-auto" />
              <p className="text-lg font-semibold">No Audience Yet</p>
              <p className="text-[#475367] text-sm max-w-[260px] w-full mt-1">
                It looks like no Audience have opted in through businesses.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Audience;
