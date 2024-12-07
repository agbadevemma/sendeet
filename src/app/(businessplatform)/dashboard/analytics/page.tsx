"use client";
import AdminBarChart from "@/components/admin/AdminBarChart";
import AnalyticsModal from "@/components/AnalyticsModal";
import Button from "@/components/buttons/Button";
import CampaignPerformanceChart from "@/components/CampaignPerformanceChart";
import Checkbox from "@/components/Checkbox";
import DonutChart from "@/components/Donut";
import HeatmapChart from "@/components/HeatmapChart";
import SearchInput from "@/components/SearchInput";
import ArrowUp from "@/icons/arrow-up";
import BarChartv from "@/icons/bar-chart-v";
import Calendar from "@/icons/calendar";
import DotV from "@/icons/dot-v";
import Elements from "@/icons/elements";
import Engagement from "@/icons/engagement";
import Eye from "@/icons/eye";
import FileDownload from "@/icons/file-download";
import Money1 from "@/icons/money-1";
import Multiply from "@/icons/multiply";
import PencilEdit from "@/icons/pencil-edit";
import SearchIcon from "@/icons/search-icon";
import SendAlt from "@/icons/send-alt";
import TickDouble from "@/icons/tick-double";
import UserTick from "@/icons/user-tick";
import { CampaignInterface, initialCampaign } from "@/utils/data";
import Image from "next/image";
import donut from "../../../../images/donut.svg";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ChevronDown from "@/icons/cheveron-down";

type Props = {};

const Analytics = (props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState<boolean>(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState<boolean>(false);


  // Refs for the dropdown containers
  const firstDropdownRef = useRef<HTMLDivElement | null>(null);
  const secondDropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (firstDropdownRef.current && !firstDropdownRef.current.contains(event.target as Node)) {
        setIsFirstDropdownOpen(false);
      }
      if (secondDropdownRef.current && !secondDropdownRef.current.contains(event.target as Node)) {
        setIsSecondDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [campaigns, setCampaigns] =
    useState<CampaignInterface[]>(initialCampaign);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CampaignInterface;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof CampaignInterface) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedCampaigns = [...campaigns].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setCampaigns(sortedCampaigns);
  };

  interface TabItem {
    id: number;
    title: string;
    value: number;
    isActive: boolean;
  }
  const activeCount = useMemo(
    () => campaigns.filter((campaign) => campaign.status === "Active").length,
    [campaigns]
  );
  const completedCount = useMemo(
    () =>
      campaigns.filter((campaign) => campaign.status === "Completed").length,
    [campaigns]
  );
  const draftCount = useMemo(
    () => campaigns.filter((campaign) => campaign.status === "Draft").length,
    [campaigns]
  );

  const [tabs, setTabs] = useState<Array<TabItem>>([
    { id: 1, title: "All", value: campaigns.length, isActive: true },
    { id: 2, title: "Active", value: activeCount, isActive: false },
    { id: 3, title: "Completed", value: completedCount, isActive: false },
    { id: 4, title: "Draft", value: draftCount, isActive: false },
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
    if (selectedItems.length < campaigns.length) {
      // Select all campaigns
      setSelectedItems(campaigns.map((_, index) => index));
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };
  const getFilteredCampaigns = () => {
    const activeTab = tabs.find((tab) => tab.isActive)?.title;
    return campaigns.filter((campaign) => {
      const matchesSearch = campaign.campaign
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === "All" || campaign.status === activeTab;
      return matchesSearch && matchesTab;
    });
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
    campaigns.length > 0 && selectedItems.length === campaigns.length;
  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < campaigns.length;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpenModal && <AnalyticsModal setIsOpen={setIsOpenModal} />}
      <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <BarChartv color="black" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Analytics</p>
            <p className="text-sm text-grey-500">
              Welcome back, Testing Company
            </p>
          </div>
        </div>

        <div className="flex  gap-3">
          <Button size="sm" icon_style="txt" text="12 Months" />
          <Button
            size="sm"
            iconComponent={<Calendar color="#383E49" />}
            icon_style="leading-icon"
            text="Select dates"
          />
          <Button
            size="sm"
            iconComponent={<FileDownload color="#383E49" />}
            icon_style="leading-icon"
            text="Export"
          />
        </div>
      </div>
      <div className="w-full mt-4 py-8 px-6 flex flex-col gap-[10px] border borde-[#E4E7EC] rounded-lg">
        <div className="flex gap-4 items-center">
          <p className="text-[16px]  font-medium">Engagement Performance</p>
          <button onClick={() => setIsOpenModal((prev) => !prev)}>
            <PencilEdit color="#00AAF7" height={24} width={24} />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Total Opens</span>
              <span className="text-[#344054] text-xl font-semibold">
                1,943,219
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
              <Eye height={20} width={20} color="#667085" />
            </div>
          </div>
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Opt Ins</span>
              <span className="text-[#344054] text-xl font-semibold">
                1,751,369
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
              <TickDouble height={20} width={20} color="#667085" />
            </div>
          </div>
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Opt Outs</span>
              <span className="text-[#344054] text-xl font-semibold">
                89.9%
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
              <Multiply height={20} width={20} color="#667085" />
            </div>
          </div>{" "}
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Average Engagement Rate</span>
              <span className="text-[#344054] text-xl font-semibold">
                1,751,369
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
              <Engagement height={20} width={20} color="#667085" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <div className=" p-4 lg:p-6  w-full border rounded-xl flex lg:flex-row flex-col gap-10 h-full">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
              <p className="text-md font-medium ">Campaign Performance</p>
              <div className="flex items-center gap-3">
                <span className="text-grey-500 text-sm font-medium">
                  Metric:
                </span>

                {/* First Dropdown */}
                <div className="relative" ref={firstDropdownRef}>
                  <Button
                    onClick={() => setIsFirstDropdownOpen((prev) => !prev)}
                    className="!px-4 !py-[10px] !text-sm"
                    size="md"
                    icon_style="trailing icon"
                    iconComponent={
                      <ChevronDown color="#344054" height={20} width={20} />
                    }
                    text="Open Rate"
                  />
                  {isFirstDropdownOpen && (
                    <div className="w-[15rem] mt-2 bg-white absolute drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[0.9px] border-[#F0F1F3] right-0 rounded-[10px] p-2 flex flex-col gap-2 z-50">
                      {[
                        "Total Messages",
                        "Delivered",
                        "Average Engagement Rate",
                        "Total Sends",
                        "Open Rate",
                        "Click Rate",
                        "Delivery Rate",
                        "Opt In Rate",
                        "Opt Out Rate",
                      ].map((item) => (
                        <div
                          key={item}
                          className="text-[#383E49] font-normal text-[13px] rounded-lg cursor-pointer whitespace-nowrap px-[10px] py-2 hover:bg-[#F9FAFB]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Second Dropdown */}
                <div ref={secondDropdownRef} className="relative">
                  <Button
                    onClick={() => setIsSecondDropdownOpen((prev) => !prev)}
                    className="!px-4 !py-[10px] !text-sm"
                    size="md"
                    text="7 Days"
                  />
                  {isSecondDropdownOpen && (
                    <div className="w-32 mt-2 bg-white absolute drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[0.9px] border-[#F0F1F3] rounded-[10px] p-2 flex flex-col gap-2 z-50">
                      {["7 Days", "30 Days", "6 Months", "12 Months"].map(
                        (item) => (
                          <div
                            key={item}
                            className="text-[#383E49] font-normal text-[13px]  rounded-lg cursor-pointer px-[10px] py-2 hover:bg-[#F9FAFB]"
                          >
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col item-center  justify-between mt-1 w-full ">
              <span className="text-md text-grey-500">Open Rate</span>
              <div className="flex justify-between lg:justify-normal  items-center lg:gap-4 w-full mt-2 ">
                <span className="text-xl lg:text-[1.4rem] font-medium">
                  78.2%
                </span>
                <div className="py-[2px] pl-[10px] flex gap-1 items-center pr-[8px] text-xs bg-success-50 text-[#344054] rounded-2xl">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="text-success-700 font-medium">7.2%</span>
                </div>
              </div>
            </div>

            <CampaignPerformanceChart />
          </div>
          <div className="h-96 hidden lg:block bg-[#F0F1F3] w-px mt-6"></div>
          <div className="w-full lg:w-1/2  flex flex-col">
            <p className="font-medium text-md  mt-0">Campaign Summary</p>
            <div className="flex flex-col mt-6 gap-10 justify-between  flex-1">
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Total Campaigns</span>
                <span className="font-medium text-sm">25</span>
              </div>{" "}
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Active Campaigns</span>
                <span className="font-medium text-sm">5</span>
              </div>{" "}
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Failed Campaigns</span>
                <span className="font-medium text-sm">14</span>
              </div>
              <div className="pb-10 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">
                  Successful Campaigns
                </span>
                <span className="font-medium text-sm">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col gap-4 mt-10">
        <div className="w-full flex   lg:flex-row flex-col  rounded-lg  gap-4 p-4 bgs-black">
          {/* <EngagementDashboard /> */}
          <div className="w-full border-[#EAECF0] bg-white border p-8 py-4 flex flex-col rounded-lg ">
            <p className="text-lg mb-4 font-medium">
              Engagement by Time of Day
            </p>{" "}
            <HeatmapChart />
          </div>
          <div className="w-full flex flex-col gap-8 lg:w-[40%] px-4 py-2 border-[#EAECF0] bg-white items-center border  rounded-lg ">
            <div className="flex justify-between items-center w-full">
              <p className="a">Audience Metrics</p>
              <Button text="12 Months" className="p-4" />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col items-center ">
                <div className="flex items-center gap-1">
                  <span className="h-4 w-2 rounded-full bg-[#54C6FA]"></span>
                  <div className="text-lg text-[#667085]">Opt In</div>
                </div>
                <div className="font-medium text-[22px]">762</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="h-4 w-2 rounded-full bg-[#B0E5FD]"></span>
                  <div className="text-lg text-[#667085]">Opt Out</div>
                </div>
                <div className="font-medium text-[22px]">215</div>
              </div>
            </div>
            <Image src={donut} alt="donut" />
          </div>
        </div>
      </div>
      <div className="w-full mt-20 bg-white">
        <div className="flex flex-col lg:flex-row lg:gap-4 px-6 py-4 gap-8 lg:items-center  justify-between">
          <div className="text-lg font-medium">Top Performing Campaigns</div>

          <div className="shadow-xs flex items-center">
            <SearchInput
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<SearchIcon color="#667085" />}
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto px-4">
          <table className="w-full b">
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
                    Clicked
                    <div
                      onClick={() => handleSort("clicked")}
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
                <th className="p-2">
                  <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                    Opt In
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
                    Opt Out
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
            {campaigns.length != 0 && (
              <tbody>
                {getFilteredCampaigns().map((campaign, index) => (
                  <tr
                    key={index}
                    className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                  >
                    <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                      <Checkbox
                        checked={selectedItems.includes(index)}
                        onClick={() => handleSelectItem(index)}
                      />{" "}
                      <div
                        className={`h-5 w-5 p-4 flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),_0px_0px_0px_1px_rgba(185,_189,_199,_0.20)] border ${
                          campaign.status === "Draft" &&
                          "bg-grey-50 border-[#475467]"
                        }  ${
                          campaign.status === "Active" &&
                          "border-warning-500 bg-warning-50"
                        }
                         ${
                           campaign.status === "Completed" &&
                           "bg-success-50 border-success-500 "
                         } rounded-lg`}
                      >
                        <SendAlt
                          color={
                            campaign.status === "Active"
                              ? "#DD9316"
                              : campaign.status === "Completed"
                              ? "#0F973D"
                              : "#667085"
                          }
                        />
                      </div>
                      {campaign.campaign}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                      {campaign.date}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {campaign.clicked}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {campaign.delivered}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {campaign.open}
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
                                  ? "bg-warning-500 "
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
        </div>
      </div>
    </div>
  );
};

export default Analytics;
