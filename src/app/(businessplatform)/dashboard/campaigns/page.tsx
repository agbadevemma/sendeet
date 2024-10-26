"use client";
import Button from "@/components/buttons/Button";
import ArrowUp from "@/icons/arrow-up";
import Calendar from "@/icons/calendar";
import DotV from "@/icons/dot-v";
import FileDownload from "@/icons/file-download";
import FilterAlt from "@/icons/filter-alt";
import IconStack from "@/icons/icon-stack";
import Money1 from "@/icons/money-1";
import Plus from "@/icons/plus";
import {
  Campaign,
  initialCampaign,
  initialTransactions,
  sortOptions,
  statusOptions,
  Transaction,
} from "@/utils/data";
import React, { useState } from "react";
import illustration from "../../../../images/creditillustration.svg";
import Image from "next/image";
import LoudSpeaker from "@/icons/loudspeaker";
import SelectField from "@/components/SelectField";
import Clock from "@/icons/clock";
import CampaignSelectField from "@/components/CampaignSelectField";
import Flag from "@/icons/flag";
import Checkbox from "@/components/Checkbox";
import SearchInput from "@/components/SearchInput";
import SearchIcon from "@/icons/search-icon";
import SendAlt from "@/icons/send-alt";
import Multiply from "@/icons/multiply";
import bg from "../../../../images/campaignbg.png";

type Props = {};

const Credits = (props: Props) => {
  const [statusValue, setStatusValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [Campaigns, setCampaigns] = useState<Campaign[]>(initialCampaign);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Campaign;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof Campaign) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedCampaigns = [...Campaigns].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setCampaigns(sortedCampaigns);
  };

  interface DropdownStates {
    status: boolean;
    sort: boolean;
  }
  const [dropdownStates, setDropdownStates] = useState<DropdownStates>({
    status: false,
    sort: false,
  });
  const handleSelect = (field: string, value: string) => {
    setDropdownStates((prev) => ({ ...prev, [field]: false })); // Close the dropdown
    if (field == "status") {
      setStatusValue(value);
    } else {
      setSortValue(value);
    }
  };
  const toggleDropdown = (field: keyof DropdownStates) => {
    setDropdownStates((prev) => ({
      ...prev,
      [field]: !prev[field],
      // Close other dropdowns when opening one
      ...(Object.keys(prev) as Array<keyof DropdownStates>).reduce(
        (acc, key) => {
          if (key !== field) acc[key] = false;
          return acc;
        },
        {} as DropdownStates
      ),
    }));
  };
  // for the tabs all active completed
  interface TabItem {
    id: number;
    title: string;
    value: number;
    isActive: boolean;
  }
  const [tabs, setTabs] = useState<Array<TabItem>>([
    {
      id: 1,
      title: "All",
      value: 0,
      isActive: true,
    },
    {
      id: 2,
      title: "Active",
      value: 0,
      isActive: false,
    },
    {
      id: 3,
      title: "Completed",
      value: 0,
      isActive: false,
    },
    {
      id: 4,
      title: "Drafts",
      value: 0,
      isActive: false,
    },
  ]);

  // Function to handle tab switching
  const handleTabClick = (selectedId: number) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.id == selectedId,
      }))
    );
  };

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Function to handle "select all" checkbox
  const handleSelectAll = () => {
    if (selectedItems.length < Campaigns.length) {
      // Select all campaigns
      setSelectedItems(Campaigns.map((_, index) => index));
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };

  // Function to handle individual checkbox selection
  const handleSelectItem = (index: number) => {
    setSelectedItems((prev) => {
      if (prev.includes(index)) {
        // Remove if already selected
        return prev.filter((i) => i !== index);
      } else {
        // Add if not selected
        return [...prev, index];
      }
    });
  };

  // Calculate header checkbox state
  const isAllSelected =
    Campaigns.length > 0 && selectedItems.length === Campaigns.length;
  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < Campaigns.length;

  return (
    <div>
      {/*  create message */}
      {/* <div className="fixed w-full h-screen flex items-center justify-end p-4 bg-black/20 top-0 left-0 z-50 ">
        <div className="h-full bg-white max-w-[475px] w-full rounded-xl p-6">
          <div className="flex justify-end items-center ">
            {" "}
            <div className="flex items-center p-2 w-fit rounded-lg  justify-center border border-[#E4E7EC]">
              <Multiply color="#5D6679" />
            </div>
          </div>
          <div className="w-full relative grid place-items-center mt-4">
            <Image src={bg} alt="bg" className="w-full" />
            <span className="text-4xl font-semibold text-white absolute z-50">
              MESSAGE TYPE
            </span>
          </div>
          <div className="overflow-auto ma h-full mt-8 rounded-xl bg-[#F2F4F7]">
            <div className="s">
              <p className="text-grey-500">Select a message type</p>
              <p className="text-sm">
                Choose a campaign type to fit your goal. This will affect
                message format, engagement options, and billing.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* The whole page */}
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <LoudSpeaker color="black" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Campaigns</p>
            <p className="text-sm text-grey-500">
              Create and manage campaigns for your business
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
          <Button
            size="sm"
            iconComponent={<Plus color="#fff" />}
            icon_style="leading-icon"
            type="primary"
            text="Create Campaign"
          />
        </div>
      </div>

      <div className="flex mt-[25px] w-full border border-[#E4E7EC] rounded-xl flex-col">
        <div className="flex  w-full gap-8 px-7 h-[104px] items-center ">
          <CampaignSelectField
            label="Status"
            placeholder="Campaign Status"
            isOpen={dropdownStates.status}
            onSelect={(value) => handleSelect("status", value)}
            name="status"
            value={statusValue}
            options={statusOptions}
            onToggle={() => toggleDropdown("status")}
            icon={<Clock color="#858D9D" />}
          />
          <CampaignSelectField
            label="Sort by"
            placeholder="Campaign Status"
            isOpen={dropdownStates.sort}
            onSelect={(value) => handleSelect("sort", value)}
            name="sort"
            value={sortValue}
            options={sortOptions}
            onToggle={() => toggleDropdown("sort")}
            icon={<Flag color="#858D9D" />}
          />
        </div>
        <div className="flex px-11 gap-12 border-t border-t-grey-50 h-[62px] items-end">
          {tabs.map((tab, index) => (
            <div
              onClick={() => handleTabClick(tab.id)}
              className={`flex  gap-[7px]  justify-center cursor-pointer items-center pb-4  ${
                tab.isActive
                  ? "border-b-2  border-b-primary-400"
                  : " border-b-[#E4E7EC]"
              }`}
            >
              <span
                className={tab.isActive ? "text-primary-400" : "text-grey-500"}
              >
                {tab.title}
              </span>
              <span className="border border-[#EAECF0] bg-[#F2F4F7] py-[1px] px-1 rounded">
                {tab.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl mt-7  h-full w-full border border-[#E4E7EC] ">
        <div className="flex flex-col lg:flex-row lg:gap-4 px-6 py-4 gap-8 lg:items-center  justify-between">
          <div className="text-lg font-medium">10 Campaigns</div>

          <div className="shadow-xs">
            <SearchInput
              placeholder="Search"
              icon={<SearchIcon color="#667085" />}
            />
          </div>
        </div>

        <div className="flex flex-col w-full mx-auto px-6 overflow-auto mt-[18px]  max-h-[814px] ">
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
                    <span> Campaign Name</span>
                    <div
                      onClick={() => handleSort("campaign")}
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "campaign" &&
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
                    Date
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
                    Delivered
                    <div
                      onClick={() => handleSort("delivered")}
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "delivered" &&
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
                    Opened
                    <div
                      onClick={() => handleSort("open")}
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "open" &&
                        sortConfig.direction === "asc"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    >
                      <ArrowUp color={"#5D6679"} />
                    </div>
                  </div>
                </th>
                <th className="p-2" onClick={() => handleSort("clicked")}>
                  <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                    Clicked
                    <div
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "clicked" &&
                        sortConfig.direction === "asc"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    >
                      <ArrowUp color={"#5D6679"} />
                    </div>
                  </div>
                </th>
                <th className="p-2 rounded-e-lg">
                  <div className="flex items-center text-nowrap  text-[#5D6679] text-sm font-medium">
                    Status
                  </div>
                </th>
              </tr>
            </thead>
            {Campaigns.length != 0 && (
              <tbody>
                {Campaigns.map((campaign, index) => (
                  <tr
                    key={index}
                    className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                  >
                    <td className="text-sm font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                      <Checkbox
                        checked={selectedItems.includes(index)}
                        onClick={() => handleSelectItem(index)}
                      />{" "}
                      <div className="h-5 w-5 p-4 flex items-center justify-center bg-primary-500 border-[#00AAF7] rounded-lg">
                        <SendAlt color="#fff" />
                      </div>
                      {campaign.campaign}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                      {campaign.date}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {campaign.delivered}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {campaign.open}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {campaign.clicked}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      <div className="flex gap-x-6 justify-start">
                        <div className="w-[100px]">
                          {" "}
                          <p
                            className={`flex items-center min-h-[24px] w-fit   justify-center text-sm font-medium py-[2px] pl-[8px] pr-[10px]   gap-[6px] rounded-2xl ${
                              campaign.status === "Draft"
                                ? "bg-[#F2F4F7] text-[#344054] "
                                : campaign.status === "Active"
                                ? "text-warning-500 bg-warning-50"
                                : "bg-success-50 text-success-500 "
                            }`}
                          >
                            <div
                              className={`h-[6px] w-[6px] rounded-full ${
                                campaign.status === "Draft"
                                  ? "bg-[#667085] "
                                  : campaign.status === "Active"
                                  ? "bg-warning-500   w-full"
                                  : "bg-success-500"
                              }`}
                            ></div>{" "}
                            <span> {campaign.status}</span>
                          </p>
                        </div>
                        <div className="h-8 w-8 p-2 jus flex items-center rounded-lg border border-[#E4E7EC]">
                          <DotV color="#101928" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {Campaigns.length == 0 && (
            <div className="w-full h-80 flex flex-col  mt-32 mb-32 items-center justify-center mx-auto">
              <Image src={illustration} alt="img" className="mx-auto" />
              <p className="text-lg font-semibold">
                Oops....nothing to see here
              </p>
              <p className="text-[#475367] text-sm max-w-[260px] w-full mt-1">
                Tap the button below to top up credits and share content with
                your contacts
              </p>
              <Button
                size="sm"
                iconComponent={<Plus color="#fff" />}
                icon_style="leading-icon"
                type="primary"
                className="mt-7"
                text="Create Campaign"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Credits;
