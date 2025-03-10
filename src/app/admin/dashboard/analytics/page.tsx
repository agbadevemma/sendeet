"use client"
import Button from '@/components/buttons/Button'
import CampaignPerformanceChart from '@/components/CampaignPerformanceChart'
import Checkbox from '@/components/Checkbox'
import SearchInput from '@/components/SearchInput'
import ArrowUp from '@/icons/arrow-up'
import BarChartv from '@/icons/bar-chart-v'
import Calendar from '@/icons/calendar'
import ChevronDown from '@/icons/cheveron-down'
import DotV from '@/icons/dot-v'
import Engagement from "@/icons/engagement";
import Eye from '@/icons/eye'
import FileDownload from '@/icons/file-download'
import HelpCircle from '@/icons/help-circle'
import Multiply from '@/icons/multiply'
import PencilEdit from '@/icons/pencil-edit'
import SearchIcon from '@/icons/search-icon'
import SendAlt from '@/icons/send-alt'
import TickDouble from '@/icons/tick-double'
import { CampaignInterface, initialCampaign, organizations, OrganizationAdmin, adminOrganizations } from '@/utils/data'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import map from "../../../../images/map.svg"
import Image from 'next/image'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import FilterAlt from '@/icons/filter-alt'
import Pagination from '@/components/Pagination'
import AnalyticsModal from '@/components/AnalyticsModal'
import AdminAnalyticModal from '@/components/admin/AdminAnalyticModal'


type Props = {}

const Analytics = (props: Props) => {

  const timeDropdownRef = useRef<HTMLDivElement>(null);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const contentDropdownRef = useRef<HTMLDivElement>(null);
  const [isContentDropdownOpen, setIsContentDropdownOpen] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [isFirstDropdownOpen, setIsFirstDropdownOpen] =
    useState<boolean>(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] =
    useState<boolean>(false);

  // Refs for the dropdown containers
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
      if (
        timeDropdownRef.current &&
        !timeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTimeDropdownOpen(false);
      }
      if (
        contentDropdownRef.current &&
        !contentDropdownRef.current.contains(event.target as Node)
      ) {
        setIsContentDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [organization, setOrganizations] =
    useState<OrganizationAdmin[]>(adminOrganizations);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof OrganizationAdmin;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof OrganizationAdmin) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedOrganizations = [...organization].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setOrganizations(sortedOrganizations);
  };



  interface TabItem {
    id: number;
    title: string;
    value: number;
    isActive: boolean;
  }



  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Function to handle "select all" checkbox
  const handleSelectAll = () => {
    if (selectedItems.length < organizations.length) {
      // Select all organizations
      setSelectedItems(organizations.map((_, index) => index));
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };
  const getFilteredOrganizations = () => {

    return organization.filter((organ) => {
      const matchesSearch = organ.industry
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesSearch;
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
    organizations.length > 0 && selectedItems.length === organizations.length;
  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < organizations.length;
  const [isOpen, setIsOpen] = useState(false);
  const value = 35;
  const percentage = Math.min((value / 100) * 100, 100);
  // Define the type for the chart data
  interface DataItem {
    name: string;
    value: number;
  }

  // Sample data
  const data: DataItem[] = [
    { name: "Documents", value: 121799 },
    { name: "Images", value: 66734 },
    { name: "Audio", value: 21567 },
    { name: "Video", value: 11387 },
    { name: "Others", value: 7806 },

  ];
  interface MergedDataItem extends DataItem {
    color: string;
  }



  // Colors for the pie chart
  const COLORS = ["#E6F7FE", "#8AD8FB", "#54C6FA", "#009BE1", "#0079AF"];


  const mergedData: MergedDataItem[] = data.map((item, index) => ({
    ...item,
    color: COLORS[index]
  }));
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  return (
    <div>
      {isOpenModal && <AdminAnalyticModal setIsOpen={setIsOpenModal} />}
      <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
        <div className="flex items-center gap-4">
          <div className=" flex items-center bg-white justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
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

      <div className="w-full mt-4 py-8 px-6 flex flex-col gap-[10px]  bg-white border border-[#E4E7EC] rounded-lg">
        <div className="flex gap-4 items-center">
          <p className="text-[16px]  font-medium">Engagement Performance</p>
          <button onClick={() => setIsOpenModal((prev) => !prev)}>
            <PencilEdit color="#00AAF7" height={24} width={24} />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl bg-white border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Total Opens</span>
              <span className="text-[#344054] text-xl font-semibold">
            0
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
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl bg-white border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-[13px]">Opt Ins</span>
              <span className="text-[#344054] text-xl font-semibold">
              0
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
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl bg-white border-[#E4E7EC]  border-solid  ">
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
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl bg-white border-[#E4E7EC]  border-solid  ">
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
        <div className=" p-4 lg:p-6 bg-white  w-full border rounded-lg flex lg:flex-row flex-col gap-10 h-full">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
              <div className="flex gap-2 items-center">
                <p className="text-lg  font-medium ">Campaign Performance</p>
                <span className="cursor-pointer">
                  <HelpCircle color="#98A2B3" />
                </span>
              </div>
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

            <CampaignPerformanceChart type='admin' />
          </div>
          <div className="h-[24rem] hidden lg:block bg-[#F0F1F3] w-px "></div>
          <div className="w-full lg:w-1/2  flex flex-col">
            <p className="font-medium text-md  mt-0">Campaign Summary</p>
            <div className="flex flex-col mt-6 gap-2 justify-between  flex-1">
              <div className="pb-4 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Total Campaigns</span>
                <span className="font-medium text-sm">25</span>
              </div>{" "}
              <div className="pb-4 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Active Campaigns</span>
                <span className="font-medium text-sm">1435</span>
              </div>{" "}
              <div className="pb-4 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Failed Campaigns</span>
                <span className="font-medium text-sm">19</span>
              </div>
              <div className="pb-4 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">
                  Successful Campaigns
                </span>
                <span className="font-medium text-sm">1</span>
              </div>
              <div className="pb-4 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Scheduled vs. Sent Campaigns</span>
                <span className="font-medium text-sm">30/200</span>
              </div>
              <div className="pb-4 border-b border-b-[#F0F1F3] flex items-center justify-between">
                <span className="text-grey-400 text-sm">Average Time to Send</span>
                <span className="font-medium text-sm">2 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-4 w-full mt-5">
        <div className="w-full gap-3  p-4 lg:p-6 bg-white   border rounded-lg  h-full">
          <div className="flex w-full justify-between items-start">
            <div className="flex flex-col">
              <p className="text-[18px] font-medium">Active Opt Ins</p>
              <div className="flex gap-2 mt-4"><span className='text-lg font-medium'>16,843</span>  <div className="py-[2px] pl-[10px] flex gap-1 items-center pr-[8px] text-xs bg-success-50 text-[#344054] rounded-2xl">
                <ArrowUp color="#12B76A" height={12} width={12} />
                <span className="text-success-700  font-medium">7.2%</span>
              </div></div>
            </div>
            <div ref={timeDropdownRef} className="relative">
              <Button
                onClick={() => setIsTimeDropdownOpen((prev) => !prev)}
                className="!px-4 !py-[10px] !text-sm"
                size="md"
                text="7 Days"
              />
              {isTimeDropdownOpen && (
                <div className="w-32 mt-2 bg-white absolute drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[0.9px] border-[#F0F1F3] rounded-[10px] p-2 flex flex-col gap-2 z-50">
                  {["7 Days", "30 Days", "6 Months", "12 Months"].map((item) => (
                    <div
                      key={item}
                      className="text-[#383E49] font-normal text-[13px] rounded-lg cursor-pointer px-[10px] py-2 hover:bg-[#F9FAFB]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          <div className="flex mt-6 gap-4 items-center w-full">
            <Image src={map} alt='map' className=' object-contain' />
            <div className="flex flex-col gap-8 w-full">
              <div className="flex items-center gap-2">
                <div className="size-10 p-3 rounded-full border  font-medium text-grey-800 flex items-center justify-center border-grey-100 ">LG</div>
                <div className="flex flex-col w-full">
                  <span>Lagos</span>
                  <div className="flex gap-3 w-full items-center ">
                    <div className="w-full rounded-full h-2  bg-[#E6F7FE]">
                      <div
                        className="bg-[#00AAF7] h-2  rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className='text-[#383E49]'>30%</span>

                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-10 p-3 rounded-full border  font-medium text-grey-800 flex items-center justify-center border-grey-100 ">AK</div>
                <div className="flex flex-col w-full">
                  <span>Akwa-Ibom</span>
                  <div className="flex gap-3 w-full items-center ">
                    <div className="w-full rounded-full h-2  bg-[#E6F7FE]">
                      <div
                        className="bg-[#00AAF7] h-2  rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className='text-[#383E49]'>30%</span>

                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-10 p-3 rounded-full border  font-medium text-grey-800 flex items-center justify-center border-grey-100 ">KN</div>
                <div className="flex flex-col w-full">
                  <span>Kano</span>
                  <div className="flex gap-3 w-full items-center ">
                    <div className="w-full rounded-full h-2  bg-[#E6F7FE]">
                      <div
                        className="bg-[#00AAF7] h-2  rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className='text-[#383E49]'>30%</span>

                  </div>
                </div>
              </div><div className="flex items-center gap-2">
                <div className="size-10 p-3 rounded-full border  font-medium text-grey-800 flex items-center justify-center border-grey-100 ">LG</div>
                <div className="flex flex-col w-full">
                  <span>Lagos</span>
                  <div className="flex gap-3 w-full items-center ">
                    <div className="w-full rounded-full h-2  bg-[#E6F7FE]">
                      <div
                        className="bg-[#00AAF7] h-2  rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className='text-[#383E49]'>30%</span>

                  </div>
                </div>
              </div><div className="flex items-center gap-2">
                <div className="size-10 p-3 rounded-full border  font-medium text-grey-800 flex items-center justify-center border-grey-100 ">LG</div>
                <div className="flex flex-col w-full">
                  <span>Lagos</span>
                  <div className="flex gap-3 w-full items-center ">
                    <div className="w-full rounded-full h-2  bg-[#E6F7FE]">
                      <div
                        className="bg-[#00AAF7] h-2  rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className='text-[#383E49]'>30%</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 gap-3  p-4 lg:p-6 bg-white   border rounded-lg flex flex-col h-full">
          <div className="flex justify-between items-center w-full mb-4">
            <p className="text-lg  font-medium">Top Content</p>

            <div ref={contentDropdownRef} className="relative">
              <Button
                onClick={() => setIsContentDropdownOpen((prev) => !prev)}
                className="!px-4 !py-[10px] !text-sm"
                size="md"
                text="12 months"
              />
              {isContentDropdownOpen && (
                <div className="w-32 mt-2 bg-white absolute drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-[0.9px] border-[#F0F1F3] rounded-[10px] p-2 flex flex-col gap-2 z-50">
                  {["7 Days", "30 Days", "6 Months", "12 Months"].map((item) => (
                    <div
                      key={item}
                      className="text-[#383E49] font-normal text-[13px] rounded-lg cursor-pointer px-[10px] py-2 hover:bg-[#F9FAFB]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
          <div className="w-full flex items-center justify-center -mt-1"><PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%" // Center X
              cy="50%" // Center Y
              outerRadius={100} // Size of the pie
              fill="#8884d8"
              dataKey="value" // Key to fetch values
              nameKey="name" // Key to fetch names

            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

          </PieChart></div>

          <div className="flex flex-col gap-4">
            {mergedData.map((item, index) => (<div key={index} className='flex items-center justify-between'>
              <div className="flex items-center gap-2">
                <div className={`size-2 rounded-full`} style={{ backgroundColor: item.color }}></div>
                <div>{item.name}</div>
              </div>
              <span className='text-sm font-medium'>{item.value.toLocaleString()}</span>

            </div>))}
          </div>
        </div>
      </div>

      <div className="w-full mt-5 bg-white rounded-[12px] border border-solid border-[#E4E7EC]">
        <div className="flex flex-col lg:flex-row lg:gap-4 px-6 py-4 gap-8 lg:items-center  justify-between">
          <div className="text-lg font-medium">Top Performing Organizations</div>

          <div className=" flex items-center gap-2">
            <SearchInput
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<SearchIcon color="#667085" />}
            />

            <Button
              size="sm"
              onClick={() => setIsOpenFilter(true)}
              className="!h-[40px]"
              text="Filters"
              icon_style="leading-icon"
              iconComponent={<FilterAlt color="#383E49" />}
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto px-4 mt-6">
          <table className="w-full b">
            <thead className="text-grey-600  rounded sticky top-0 z-10">
              <tr className="bg-[#F9FAFB]">
                <th className="pl-6 pr-2 py-2 rounded-s-lg">
                  <div className="flex items-center text-nowrap gap-2 text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                    <Checkbox
                      checked={isAllSelected}
                      indeterminate={isIndeterminate}
                      onClick={handleSelectAll}
                    />
                    <span> OrganizationAdmin Name</span>
                    <div
                      onClick={() => handleSort("organizationName")}
                      className={` transition-transform duration-300   ${sortConfig?.key === "organizationName" &&
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
                    Industry
                    <div
                      onClick={() => handleSort("industry")}
                      className={` transition-transform duration-300   ${sortConfig?.key === "industry" &&
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
                    Total Campaigns
                    <div
                      onClick={() => handleSort("totalCampaigns")}
                      className={` transition-transform duration-300   ${sortConfig?.key === "totalCampaigns" &&
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
                    Total Credits Used
                    <div
                      onClick={() => handleSort("totalCreditsUsed")}
                      className={` transition-transform duration-300   ${sortConfig?.key === "totalCreditsUsed" &&
                        sortConfig.direction === "asc"
                        ? "transform rotate-180"
                        : ""
                        }`}
                    >
                      <ArrowUp color={"#5D6679"} />
                    </div>
                  </div>
                </th>
                <th className="p-2" onClick={() => handleSort("optInRate")}>
                  <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                    Opt In Rate
                    <div
                      className={` transition-transform duration-300   ${sortConfig?.key === "optInRate" &&
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
                    Actions
                  </div>
                </th>
              </tr>
            </thead>
            {organization.length != 0 && (
              <tbody>
                {getFilteredOrganizations().map((campaign, index) => (
                  <tr
                    key={index}
                    className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                  >
                    <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                      <Checkbox
                        checked={selectedItems.includes(index)}
                        onClick={() => handleSelectItem(index)}
                      />{" "}

                      {campaign.organizationName}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                      {campaign.industry}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {campaign.totalCampaigns}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {Number(campaign.totalCreditsUsed).toLocaleString()}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {campaign.optInRate}
                    </td>

                    <td className="text-sm font-medium text-grey-800 p-2">
                      <div className="flex gap-x-2 justify-start">

                        <div className="h-8 w-8 p-2 jus flex items-center rounded-lg border border-[#E4E7EC]">
                          <Eye color="#858D9D" height={16} width={16} />
                        </div>
                        <div className="h-8 w-8 p-2 jus flex items-center rounded-lg border border-[#E4E7EC]">
                          <DotV color="#858D9D" />
                        </div>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {organization.length == 10 && (
            <div className="w-full py-4 pt-[11px]  px-6 rounded-lg ">
              <Pagination />
            </div>
          )}
        </div>
      </div>


    </div>
  )
}

export default Analytics