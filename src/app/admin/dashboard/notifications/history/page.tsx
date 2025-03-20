"use client";
import DetailsModal from "@/components/admin/DetailsModal";
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import Pagination from "@/components/Pagination";
import ArrowUp from "@/icons/arrow-up";
import DotV from "@/icons/dot-v";
import illustration from "../../../../../images/illustrationcampaign.svg";
import Eye from "@/icons/eye";
import FilterAlt from "@/icons/filter-alt";
import SearchIcon from "@/icons/search-icon";
import SendAlt from "@/icons/send-alt";
import { Alert, mockAlertData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};
interface SortConfig {
  key: keyof Alert; // Restrict to keys of Campaign
  direction: "asc" | "desc";
}

const History = (props: Props) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // State to track selected items

  const [filterTabs, setFilterTabs] = useState<Array<string>>([
    "All",
    "Platform",
    "Content",
    "Credits",
  ]);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSort = (key: keyof Alert) => {
    let direction: "asc" | "desc" = "asc";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    setSortConfig({ key, direction });
  };

  const handleSelectItem = (index: number) => {
    const isSelected = selectedItems.includes(index);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== index)); // Deselect item
    } else {
      setSelectedItems([...selectedItems, index]); // Select item
    }
  };

  const getFilteredAlerts = () => {
    return mockAlertData.filter(
      (alert) =>
        alert.alertType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.recipient.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const isAllSelected =
    mockAlertData.length > 0 && selectedItems.length === mockAlertData.length;
  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < mockAlertData.length;

  const handleSelectAll = () => {
    if (selectedItems.length < mockAlertData.length) {
      // Select all mockAlertData
      setSelectedItems(mockAlertData.map((_, index) => index));
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <DetailsModal setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="w-full px-4 ">
        <p className="text-lg text-[#101828] font-medium mt-10">
          Notification History
        </p>
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-between mt-4 lg:mt-10">
          <div className="flex bg-[#F9FAFB]   justify-between items-center py-1 px-1 rounded-lg lg:max-w-[344px] w-full">
            {filterTabs.map((filter, i) => (
              <div
                key={i}
                onClick={() => handleFilterClick(filter)}
                className={`flex text-sm font-medium  rounded-lg px-4 py-2  cursor-pointer ${
                  activeFilter === filter
                    ? "shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)]  border border-[#F0F1F3]"
                    : "text-[#667085]"
                }`}
              >
                {filter}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <InputField
              inputType="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<SearchIcon color="#667085" height={20} width={20} />}
              icon_style="leading-icon"
              label=""
              className="!py-[8px] !px-[14px]"
            />
            <Button
              iconComponent={<FilterAlt color="#383E49" />}
              text="Filters"
              className="!py-[10px] !px-[14px]"
              icon_style="leading-icon"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mx-auto mt-[2.5rem] overflow-y-auto max-h-[814px] pb-4 ">
          <div className="overflow-x-auto w-full">
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
                      <span>Campaign Name</span>
                      <div
                        onClick={() => handleSort("alertType")}
                        className={` transition-transform duration-300   ${
                          sortConfig?.key === "alertType" &&
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
                        onClick={() => handleSort("date")}
                        className={` transition-transform duration-300   ${
                          sortConfig?.key === "date" &&
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
                      Scheduled Date
                      <div
                        onClick={() => handleSort("recipient")}
                        className={` transition-transform duration-300   ${
                          sortConfig?.key === "recipient" &&
                          sortConfig.direction === "asc"
                            ? "transform rotate-180"
                            : ""
                        }`}
                      >
                        <ArrowUp color={"#5D6679"} />
                      </div>
                    </div>
                  </th>

                  <th className="p-2 ">
                    <div className="flex items-center text-nowrap  text-[#5D6679] text-sm font-medium">
                      Status
                    </div>
                  </th>
                  <th className="p-2 rounded-e-lg ">
                    <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                      Actions
                    </div>
                  </th>
                </tr>
              </thead>

              {mockAlertData.length !== 0 && (
                <tbody>
                  {getFilteredAlerts().map((alert, index) => (
                    <tr
                      key={index}
                      className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                    >
                      <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                        <Checkbox
                          checked={selectedItems.includes(index)}
                          onClick={() => handleSelectItem(index)}
                        />

                        {alert.alertType}
                      </td>
                      <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                        {alert.date}
                      </td>
                      <td className="text-sm font-medium text-grey-800 p-2">
                        {alert.recipient}
                      </td>

                      <td className="text-sm font-medium  p-2">
                        <div
                          className={`p-1 px-2 whitespace-nowrap  ${
                            alert.status === "Acknowledged"
                              ? "bg-success-50 text-success-700"
                              : "text-[#344054] bg-[#F2F4F7]"
                          } rounded-2xl flex items-center gap-2 w-fit`}
                        >
                          {alert.status}
                        </div>
                      </td>
                      <td className="text-sm font-medium gap-2 text-grey-800 p-2 flex items-center">
                        <Button
                          size="sm"
                          icon_style="icon-only"
                          onClick={() => {
                            setIsOpen(true);
                          }}
                          iconComponent={<Eye color="#858D9D" />}
                          text="Edit"
                        />

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

          {mockAlertData.length == 0 && (
            <div className="w-full h-80 flex flex-col  text-center  mt-32 mb-32 items-center justify-center mx-auto">
             <Image src={illustration} alt="img" className="mx-auto" />
              <p className="text-lg font-semibold">No Notification History Yet</p>
              <p className="text-[#475367] text-sm max-w-[260px] w-full mt-1">
              </p>
            </div>
          )}
        </div>
      </div>
      {mockAlertData.length == 10 && (
        <div className="w-full  pt-[11px] px-4 border-t-[#EAECF0] py-2 border-t ">
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default History;
