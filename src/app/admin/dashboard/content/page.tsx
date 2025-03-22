"use client";
import Button from "@/components/buttons/Button";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import Pagination from "@/components/Pagination";
import ArrowUp from "@/icons/arrow-up";
import Building5 from "@/icons/building-5";
import Check from "@/icons/check";
import Coinstack from "@/icons/coinstack";
import DotV from "@/icons/dot-v";
import Eye from "@/icons/eye";
import FileDownload from "@/icons/file-download";
import FilterAlt from "@/icons/filter-alt";
import LoudSpeaker from "@/icons/loudspeaker";
import Messages from "@/icons/messages";
import Multiply from "@/icons/multiply";
import NewsPaper from "@/icons/newspaper";
import SearchIcon from "@/icons/search-icon";
import illustration from "../../../../images/illustrationcampaign.svg";
import SendAlt from "@/icons/send-alt";
import { Campaign, mockCampaignData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

interface TabItem {
  id: number;
  title: string;
  isActive: boolean;
}
interface SortConfig {
  key: keyof Campaign; // Restrict to keys of Campaign
  direction: "asc" | "desc";
}
const Content = (props: Props) => {
  const [campaignData, setCampaignData] = useState(mockCampaignData);
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // State to track selected items
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [tabs, setTabs] = useState<Array<TabItem>>([
    { id: 1, title: "Campaigns", isActive: true },
    { id: 2, title: "Uploads", isActive: false },
  ]);

  const handleTabClick = (selectedId: number) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.id == selectedId,
      }))
    );
  };
  const [filterTabs, setFilterTabs] = useState<Array<string>>([
    "All",
    "Active",
    "Completed",
    "Drafts",
  ]);

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSort = (key: keyof Campaign) => {
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
  const sortedCampaigns = () => {
    let sortableCampaigns = [...campaignData];

    if (sortConfig !== null) {
      sortableCampaigns.sort((a, b) => {
        // Ensure 'a[sortConfig.key]' and 'b[sortConfig.key]' are valid for the key
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableCampaigns;
  };

  const getFilteredCampaigns = () => {
    return sortedCampaigns()
      .filter((campaign) =>
        campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(
        (campaign) => activeFilter === "All" || campaign.status === activeFilter
      );
  };

  const handleSelectItem = (index: number) => {
    const isSelected = selectedItems.includes(index);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== index)); // Deselect item
    } else {
      setSelectedItems([...selectedItems, index]); // Select item
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length < mockCampaignData.length) {
      // Select all mockCampaignData
      setSelectedItems(mockCampaignData.map((_, index) => index));
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };

  const isAllSelected =
    mockCampaignData.length > 0 &&
    selectedItems.length === mockCampaignData.length;
  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < mockCampaignData.length;
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 mt-10">
        {/* Insight Cards */}
        <Card
          title="Total Campaigns"
          value="0"
          className="py-6"
          mainIcon={<LoudSpeaker height={20} width={20} color="#667085" />}
        />

        <Card
          title="Active Campaigns"
          value="0"
          className="py-6"
          mainIcon={<Messages height={20} width={20} color="#667085" />}
        />

        <Card
          title="Successful Campaigns"
          value="0"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Check height={20} width={20} color="#667085" />}
        />

        <Card
          title="Failed Campaigns"
          value="0"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Multiply height={20} width={20} color="#667085" />}
        />
      </div>
      <div className="w-full border-[#E4E7EC] border rounded-[12px] bg-white px-4">
        <p className="text-lg text-[#101828] font-medium mt-10">
          Campaign Performance Table
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
            <Button
              iconComponent={<FilterAlt color="#383E49" />}
              text="Filters"
              className="!py-[10px] !px-[14px]"
              icon_style="leading-icon"
            />
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
          </div>
        </div>
        <div className="flex flex-col w-full mx-auto mt-[18px] max-h-[814px]">
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
                      Organization
                      <div
                        onClick={() => handleSort("organization")}
                        className={` transition-transform duration-300   ${
                          sortConfig?.key === "organization" &&
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
                      Open Rate
                      <div
                        onClick={() => handleSort("openRate")}
                        className={` transition-transform duration-300   ${
                          sortConfig?.key === "openRate" &&
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
                      Opt Out Rate
                      <div
                        onClick={() => handleSort("optOutRate")}
                        className={` transition-transform duration-300   ${
                          sortConfig?.key === "optOutRate" &&
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

              {campaignData.length !== 0 && (
                <tbody>
                  {getFilteredCampaigns().map((campaign, index) => (
                    <tr
                      key={campaign.id}
                      className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                    >
                      <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                        <Checkbox
                          checked={selectedItems.includes(index)}
                          onClick={() => handleSelectItem(index)}
                        />
                        <div className="w-10 h-10 border border-[#00AAF780]/[0.5] rounded-lg bg-primary-500 flex items-center justify-center">
                          <SendAlt color="#fff" height={28} width={28} />
                        </div>
                        {campaign.name}
                      </td>
                      <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                        {campaign.organization}
                      </td>
                      <td className="text-sm font-medium text-grey-800 p-2">
                        {campaign.date}
                      </td>
                      <td className="text-sm font-medium text-grey-800 p-2">
                        {campaign.openRate}
                      </td>
                      <td className="text-sm font-medium text-grey-800 p-2">
                        {campaign.optOutRate}
                      </td>

                      <td className="text-sm font-medium  p-2">
                        <div
                          className={`p-1 px-2 whitespace-nowrap  ${
                            campaign.status === "Completed"
                              ? "bg-success-50 text-success-700"
                              : campaign.status === "Active"
                              ? " text-warning-700 bg-warning-50"
                              : "text-[#344054] bg-[#F2F4F7]"
                          } rounded-2xl flex items-center gap-2 w-fit`}
                        >
                          <div
                            className={`rounded-full h-2 w-2 text-success-700 ${
                              campaign.status === "Completed"
                                ? " bg-success-500"
                                : campaign.status === "Active"
                                ? "bg-[#B54708] "
                                : "bg-[#667085]"
                            }`}
                          ></div>
                          {campaign.status}
                        </div>
                      </td>
                      <td className="text-sm font-medium gap-2 text-grey-800 p-2 flex items-center">
                        <Link href={``}>
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
          {mockCampaignData.length >= 10 && (
            <div className="w-full  pt-[11px] pb-[16px] p-6 ">
              <Pagination />
            </div>
          )}
          {mockCampaignData.length === 0 && (
            <div className="w-full h-80 flex flex-col  text-center  mt-32 mb-32 items-center justify-center mx-auto">
              <Image src={illustration} alt="img" className="mx-auto" />
              <p className="text-lg font-semibold">No Content Yet</p>
              <p className="text-[#475367] text-sm max-w-[260px] w-full mt-1">
                It looks like no campaigns performance data is available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
