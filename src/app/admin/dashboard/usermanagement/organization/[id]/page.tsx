"use client";
import Button from "@/components/buttons/Button";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import ArrowUp from "@/icons/arrow-up";
import Building5 from "@/icons/building-5";
import pngfile from "../../../../../../images/filetypes/png.svg";
import DotV from "@/icons/dot-v";
import Eye from "@/icons/eye";
import FileDownload from "@/icons/file-download";
import FilterAlt from "@/icons/filter-alt";
import SearchIcon from "@/icons/search-icon";
import SendAlt from "@/icons/send-alt";
import UserAdd from "@/icons/user-add";
import UserGroup from "@/icons/user-group";
import UserTick from "@/icons/user-tick";
import { initialTransactions, organizations, Transaction } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import illustration from "../../../../../../images/creditillustration.svg";
import React, { useEffect, useRef, useState } from "react";
import ChevronDown from "@/icons/cheveron-down";
import ChevronLeft from "@/icons/chevron-left";
import CalendarAlt from "@/icons/calender-alt";
import Mail from "@/icons/mail";
import Call from "@/icons/call";
import MapMarker from "@/icons/map-marker";
import Coinstack from "@/icons/coinstack";
import DateRangePicker from "@/components/DateRangePicker";
import Calendar from "@/icons/calendar";
import Multiply from "@/icons/multiply";
import Receipt from "@/icons/receipt";
import Plus from "@/icons/plus";

type Props = {};

const OrganizationId = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [status, setStatus] = useState<string>("Active");

  interface TabItem {
    id: number;
    title: string;
    isActive: boolean;
  }
  const [tabs, setTabs] = useState<Array<TabItem>>([
    { id: 1, title: "Activity", isActive: true },
    { id: 2, title: "Credits", isActive: false },
  ]);
  const handleTabClick = (selectedId: number) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.id == selectedId,
      }))
    );
  };
  const activities = Array.from({ length: 20 }, (_, i) => i + 1);
  const [openViewIndex, setOpenViewIndex] = useState<number | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isCalenderOpen, setIsCalenderOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<Array<string>>([]);
  const [selectedDateRange, setSelectedDateRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({ startDate: null, endDate: null });

  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);
  const [filteredTransactions, setFilteredTransactions] =
    useState<Transaction[]>(initialTransactions);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction;
    direction: "asc" | "desc";
  } | null>(null);

  const viewRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const filterTransactions = () => {
    let filtered = transactions;

    // Filter by credit used or unused
    if (filter.includes("Credit used")) {
      filtered = filtered.filter(
        (transaction) => typeof transaction.creditUsed == "number"
      );
    }
    if (filter.includes("Credit unused")) {
      filtered = filtered.filter(
        (transaction) => transaction.creditUsed === "-"
      );
    }

    // Filter by date range
    if (selectedDateRange.startDate && selectedDateRange.endDate) {
      filtered = filtered.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
          transactionDate >= selectedDateRange.startDate! &&
          transactionDate <= selectedDateRange.endDate!
        );
      });
    }

    setFilteredTransactions(filtered);
  };

  const handleSort = (key: keyof Transaction) => {
    const direction =
      sortConfig?.key === key && sortConfig.direction === "asc"
        ? "desc"
        : "asc";

    const sortedTransactions = [...transactions].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setTransactions(sortedTransactions);
  };

  const formatDate = (date: Date | undefined | null) => {
    if (!date) {
      return "No date available";
    }
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const handleDateRangeChange = (startDate: Date, endDate: Date) => {
    setSelectedDateRange({ startDate, endDate });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node)
    ) {
      setIsCalenderOpen(false);
    }
    if (viewRef.current && !viewRef.current.contains(event.target as Node)) {
      setOpenViewIndex(null);
    }
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    filterTransactions(); // Apply filter changes
  }, [filter, selectedDateRange]);
  return (
    <div>
      <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <Building5 color="#383E49" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">
              Organization{" "}
              <span className="text-[#D0D5DD] mx-1 text-xl font-normal">/</span>
              <span className="text-primary-600 text-sm font-medium text-[14px]  ml-2">
                BrightMinds Education
              </span>
            </p>
            <p className="text-sm text-grey-500">
              Manage Organization profiles, track activity, and oversee their
              campaigns
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            size="sm"
            iconComponent={<FileDownload color="#383E49" />}
            icon_style="leading-icon"
            text="Export"
          />
          <Button
            className=""
            iconComponent={
              <ChevronDown color="#ffffff" height={20} width={20} />
            }
            type="primary"
            text="Organization Actions"
            icon_style="trailing icon"
          />
        </div>
      </div>
      <div className="w-full mt-8 rounded-[12px] p-4 border border-[#E4E7EC]">
        <div className="w-full flex max-w-[810px] gap-3">
          <Link href={"/admin/dashboard/usermanagement/audience"}>
            <Button
              iconComponent={<ChevronLeft color="black" />}
              className="!p-2 !w-8 !h-8"
              icon_style="icon-only"
            />
          </Link>
          <div className="w-full   ">
            <div className="flex  flex-col gap-2">
              <div className="flex items-center gap-3">
                {" "}
                <p className="text-[20px] font-bold text-[#101928]">
                  BrightMinds Education
                </p>
                <p className="px-4 text-sm bg-[#E0F2FE] rounded-xl text-[#065986] font-medium">
                  Education
                </p>
                <p className="px-4 text-sm bg-success-50 rounded-xl text-success-500 font-medium">
                  Connected
                </p>
              </div>
              <div className="   mt-3 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <CalendarAlt color="#667085" />
                  <span className="text-xs">Joined 22 October, 2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <UserGroup color="#667085" />
                  <span className="text-xs">50-150</span>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center  gap-10 w-full">
              <div className="flex items-start flex-col w-full max-w-[345px] ">
                <span className="text-[13.8px] text-grey-800 font-medium ">
                  Contact Information
                </span>
                <div className="py-4 px-6 flex gap-4 flex-col w-full mt-4 bg-[#F9FAFB] rounded-lg ">
                  <div className="flex items-center gap-2 ">
                    <Mail color="#667085" height={20} width={20} />{" "}
                    <span className="text-grey-500 text-[13px]">
                      hello@brightmindsedu.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2  ">
                    <Call color="#667085" height={20} width={20} />{" "}
                    <span className="text-grey-500 text-[13px]">
                      +234 8143 21 9109
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-col w-full max-w-[345px] ">
                <span className="text-[13.8px] text-grey-800 font-medium ">
                  Location
                </span>
                <div className="py-4 px-6 flex  w-full bg-[#F9FAFB] mt-4 rounded-lg ">
                  <div className="flex items-start gap-2 ">
                    <MapMarker color="#667085" height={20} width={20} />{" "}
                    <p className="text-grey-500 text-[13px]">
                      Off Ladi Kwali Way before the mango tree at the junction
                      with a yellow gate beside the house{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-b border-b-[#E4E7EC]">
          <div className="flex overflow-auto px-1 lg:px-[46px] gap-2 lg:gap-6  h-[62px] items-end">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex text-sm w-[84px]  gap-[7px]  justify-center cursor-pointer items-center pb-3  ${
                  tab.isActive
                    ? "border-b-2  border-b-primary-400"
                    : " border-b-2 border-b-transparent"
                }`}
              >
                <span
                  className={
                    tab.isActive ? "text-primary-400" : "text-grey-500"
                  }
                >
                  {tab.title}
                  {tab.title === "Draft" && "s"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-h-[700px] px-10 pt-10 overflow-y-auto">
          {tabs[0].isActive ? (
            activities.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`h-5 w-5 p-4 rounded-lg flex items-center justify-center border ${
                      status === "Active"
                        ? "bg-primary-50 border-[#00AAF780]/[0.5]"
                        : "bg-success-50 border-success-500"
                    }`}
                  >
                    <SendAlt
                      color={status === "Active" ? "black" : "#0F973D"}
                    />
                  </div>
                  {index < activities.length - 1 && (
                    <div className="h-24 w-px bg-grey-50"></div>
                  )}
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <p className="text-grey-700 text-sm">12 October, 2024</p>
                    <span className="text-xs text-grey-500">Just now</span>
                  </div>
                  <p className="mt-2 text-grey-500 text-sm">
                    Opened
                    <span className="font-medium mx-2 text-grey-900">
                      Promo Summer Class
                    </span>
                    message
                  </p>
                  <div className="mt-3 flex gap-3 items-start">
                    <Image src={pngfile} alt="file type" />
                    <div>
                      <p className="font-medium text-sm text-grey-700">
                        Summer School.png
                      </p>
                      <p className="text-xs text-grey-500">720 KB</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              {" "}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
                {/* Insight Cards */}
                <Card
                  title="Current Credit Balance"
                  value="23"
                  mainIcon={
                    <Coinstack height={20} width={20} color="#667085" />
                  }
                />

                <Card
                  title="Total Credits Purchased"
                  value="23"
                  mainIcon={
                    <Coinstack height={20} width={20} color="#667085" />
                  }
                />

                <Card
                  title="Credits Used"
                  value="88.9%"
                  oppositeFlow={true}
                  mainIcon={
                    <Coinstack height={20} width={20} color="#667085" />
                  }
                />

                <Card
                  title="Avg. Monthly Credits"
                  value="456"
                  oppositeFlow={true}
                  mainIcon={
                    <Coinstack height={20} width={20} color="#667085" />
                  }
                />
              </div>
              <div className="rounded-xl mt-7  h-full w-full border border-[#E4E7EC] ">
                <div className="flex flex-col lg:flex-row lg:gap-4 px-6 py-4 gap-8 lg:items-center  justify-between">
                  <div className="flex  flex-col gap-1">
                    <p className=" text-[18px] font-medium text-[#101828]">
                      Credit Purchase History
                    </p>
                    <p className=" text-sm text-[#667085]">
                      Keep track of credit purchases and usage
                    </p>
                  </div>
                  <div className="flex gap gap-x-[18px] ">
                    <div className="relative">
                      <Button
                        size="sm"
                        text="Filters"
                        icon_style="leading-icon"
                        iconComponent={<FilterAlt color="#383E49" />}
                        onClick={() => {
                          if (filter.length < 2) {
                            setIsFilterOpen(true);
                          } else {
                            setIsFilterOpen(false);
                          }
                        }}
                      />
                      {isFilterOpen && (
                        <div
                          ref={filterRef}
                          className="absolute mt-2 w-fsull bg-white gap-y-2 rounded-lg p-4 px-2  items-center shadow-sm z-30 flex flex-col"
                        >
                          {!filter.includes("Credit used") && (
                            <div
                              onClick={() => {
                                setFilter((prev) => {
                                  return [...prev, "Credit used"];
                                });
                                setIsFilterOpen(false);
                              }}
                              className="rounded-sm py-1 cursor-pointer  hover:bg-[#F9FAFB] w-full text-sm whitespace-nowrap "
                            >
                              Credit used
                            </div>
                          )}
                          {/* {!filter.includes("Credit unsed") && (
                    <div
                      onClick={() => {
                        setFilter((prev) => {
                          return [...prev, "Credit unsed"];
                        });
                        setIsFilterOpen(false);
                      }}
                      className="rounded-sm py-1 cursor-pointer  hover:bg-[#F9FAFB] w-full text-sm whitespace-nowrap "
                    >
                      Credit unused
                    </div>
                  )} */}
                        </div>
                      )}
                    </div>
                    <div ref={calendarRef} className="relative">
                      <Button
                        size="sm"
                        iconComponent={<Calendar color="#383E49" />}
                        icon_style="leading-icon"
                        className={
                          selectedDateRange.startDate === null
                            ? ""
                            : "!font-[480] !text-sm !text-grey-800"
                        }
                        onClick={() => {
                          if (selectedDateRange.startDate === null) {
                            setIsCalenderOpen((prev) => !prev);
                          } else {
                            setSelectedDateRange({
                              startDate: null,
                              endDate: null,
                            });
                            setIsCalenderOpen((prev) => !prev);
                          }
                        }}
                        text={
                          selectedDateRange.startDate === null
                            ? "Select dates"
                            : `${formatDate(
                                selectedDateRange.startDate
                              )} - ${formatDate(selectedDateRange.endDate)}`
                        }
                      />

                      {isCalenderOpen && (
                        <div className="absolute z-30 w-full flex items-center justify-center lg:block lg:w-fit   left-1 lg:-left-[32rem] lg:right-32  mt-2">
                          <DateRangePicker
                            handleDateRangeChange={handleDateRangeChange}
                            setFilteredTransactions={setFilteredTransactions}
                            setIsCalenderOpen={setIsCalenderOpen}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {filter.length !== 0 && (
                  <div className="px-6 flex items-center gap-2">
                    {" "}
                    {filter.map((item, index) => (
                      <div
                        key={index}
                        className=" flex items-center rounded-full px-3 py-1 border w-fit gap-2"
                      >
                        <span className="text-grey-500 text-sm"> {item}</span>{" "}
                        <span
                          onClick={() =>
                            setFilter((prev) =>
                              prev.filter((_, ind) => ind !== index)
                            )
                          }
                        >
                          <Multiply color="#667085" height={11} width={11} />
                        </span>
                      </div>
                    ))}
                    <span className="text-grey-50 tex">|</span>
                    <span
                      onClick={() => setFilter([])}
                      className="text-grey-500 text-sm cursor-pointer"
                    >
                      Reset
                    </span>
                  </div>
                )}
                <div className="flex flex-col w-full mx-auto px-6 overflow-auto mt-[18px]  max-h-[814px] ">
                  <table className="w-full">
                    <thead className="text-grey-600 rounded sticky top-0 z-10">
                      <tr className="bg-[#F9FAFB]">
                        <th
                          className="pl-6 pr-2 py-2 rounded-s-lg"
                          onClick={() => handleSort("code")}
                        >
                          <div className="flex items-center text-nowrap gap-2 text-sm text-[#5D6679] font-medium w-full cursor-pointer">
                            Transaction code{" "}
                            <div
                              className={` transition-transform duration-300   ${
                                sortConfig?.key === "code" &&
                                sortConfig.direction === "asc"
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                            >
                              <ArrowUp color={"#5D6679"} />
                            </div>
                          </div>
                        </th>
                        <th className="p-2" onClick={() => handleSort("date")}>
                          <div className="relative">
                            <div className="flex items-center text-nowrap gap-2 text-sm text-[#5D6679] font-medium w-full cursor-pointer">
                              Date{" "}
                              <div
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
                          </div>
                        </th>
                        <th
                          className="p-2"
                          onClick={() => handleSort("creditPurchased")}
                        >
                          <div className="flex items-center text-nowrap gap-2 text-sm text-[#5D6679] font-medium w-full cursor-pointer">
                            Credit purchased{" "}
                            <div
                              className={` transition-transform duration-300   ${
                                sortConfig?.key === "creditPurchased" &&
                                sortConfig.direction === "asc"
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                            >
                              <ArrowUp color={"#5D6679"} />
                            </div>
                          </div>
                        </th>
                        <th
                          className="p-2"
                          onClick={() => handleSort("description")}
                        >
                          <div className="flex items-center text-nowrap gap-2 text-sm text-[#5D6679] font-medium w-full cursor-pointer">
                            Description{" "}
                            <div
                              className={` transition-transform duration-300   ${
                                sortConfig?.key === "description" &&
                                sortConfig.direction === "asc"
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                            >
                              <ArrowUp color={"#5D6679"} />
                            </div>
                          </div>
                        </th>
                        <th
                          className="p-2"
                          onClick={() => handleSort("creditUsed")}
                        >
                          <div className="flex items-center text-nowrap gap-2 text-sm text-[#5D6679] font-medium w-full cursor-pointer">
                            Credit used{" "}
                            <div
                              className={` transition-transform duration-300   ${
                                sortConfig?.key === "creditUsed" &&
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
                          <div className="flex items-center text-nowrap text-sm text-[#5D6679] font-medium">
                            Status
                          </div>
                        </th>
                      </tr>
                    </thead>

                    {transactions.length !== 0 && (
                      <tbody>
                        {filteredTransactions.map((transaction, index) => (
                          <tr
                            key={transaction.code}
                            className="border-b border-b-grey-50 hover:bg-gray-50"
                          >
                            <td className="font-medium text-sm text-grey-800 p-4 pl-6">
                              {transaction.code}
                            </td>
                            <td className="font-medium text-sm text-grey-800 p-2 pr-8">
                              {transaction.date}
                            </td>
                            <td className="font-medium text-sm text-grey-800 p-2">
                              {transaction.creditPurchased}
                            </td>
                            <td className="font-medium text-sm text-grey-800 p-2">
                              {transaction.description}
                            </td>
                            <td className="font-medium text-sm text-grey-800 p-2">
                              {transaction.creditUsed}
                            </td>
                            <td className="font-medium text-sm text-grey-800 p-2">
                              <div className="flex gap-x-6 justify-start">
                                <div className="w-[94px]">
                                  {" "}
                                  <p
                                    className={`flex items-center min-h-[24px]   justify-center font-medium py-[2px] text-sm px-[10px] rounded-2xl ${
                                      transaction.status === "successful"
                                        ? "bg-success-50 text-success-800 w-[94px]"
                                        : transaction.status === "Pending"
                                        ? "text-warning-700 bg-warning-50 w-full text-nowrap"
                                        : "bg-red-50 text-red-800 w-[61px] "
                                    }`}
                                  >
                                    {transaction.status === "Pending"
                                      ? "In Progress"
                                      : transaction.status}
                                  </p>
                                </div>
                                <div ref={viewRef} className="relative">
                                  <div
                                    onClick={() =>
                                      setOpenViewIndex(
                                        openViewIndex === index ? null : index
                                      )
                                    }
                                    className="h-8 w-8 p-2 jus flex items-center rounded-lg border border-[#E4E7EC] cursor-pointer"
                                  >
                                    <DotV color="#101928" />
                                  </div>
                                  {openViewIndex === index && (
                                    <div
                                      ref={viewRef}
                                      className="absolute rounded-[10px]  min-w-[163px] flex flex-col gap-4 p-4 border-[0.9px] border-grey-50 bg-white z-[50] -right-1 mt-1  py-2 px-2"
                                    >
                                      <Link
                                        href={"credits/transaction-details"}
                                      >
                                        {" "}
                                        <div className="w-full flex items-center gap-4 group  group-hover:text-[#009BE1] hover:bg-[#F9FAFB] p-2 cursor-pointer  text-grey-800 rounded-lg">
                                          <Receipt color="#383E49" />
                                          <span className="text-xs whitespace-nowrap">
                                            Transaction details
                                          </span>
                                        </div>
                                      </Link>
                                      <Link href={""}>
                                        <div className="w-full flex items-center gap-4 group  group-hover:text-[#009BE1] hover:bg-[#F9FAFB] p-2 text-grey-800 cursor-pointer rounded-lg">
                                          <FileDownload color="#383E49" />
                                          <span className="text-xs whitespace-nowrap">
                                            Export Receipt
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    )}
                  </table>
                  {transactions.length == 0 && (
                    <div className="w-full h-80 flex flex-col  mt-32 mb-32 items-center justify-center mx-auto">
                      <Image src={illustration} alt="img" className="mx-auto" />
                      <p className="text-lg font-semibold">
                        Oops....nothing to see here
                      </p>
                      <p className="text-[#475367] text-sm max-w-[260px] w-full mt-1">
                        Tap the button below to top up credits and share content
                        with your contacts
                      </p>
                      <Link href={"credits/topup"}>
                        <Button
                          size="sm"
                          iconComponent={<Plus color="#fff" />}
                          icon_style="leading-icon"
                          type="primary"
                          className="mt-7 !py-2 !px-3"
                          text="Top up Credits"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              </div>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default OrganizationId;
