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
import { initialTransactions, Transaction } from "@/utils/data";
import React, { useEffect, useRef, useState } from "react";
import illustration from "../../../../images/creditillustration.svg";
import Image from "next/image";
import Link from "next/link";
import DateRangePicker from "@/components/DateRangePicker";
import Receipt from "@/icons/receipt";

type Props = {};

const Credits = (props: Props) => {
  const [openViewIndex, setOpenViewIndex] = useState<number | null>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);




  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);
  const [isCalenderOpen, setIsCalenderOpen] = useState<boolean>(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof Transaction) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedTransactions = [...transactions].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setTransactions(sortedTransactions);
  };

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const handleClickOutside = (event: MouseEvent) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
          setIsCalenderOpen(false); // Close calendar if click is outside
        }
        if (viewRef.current && !viewRef.current.contains(event.target as Node)) {
          setOpenViewIndex(null); // Close dropdown if click is outside
        }
        if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
          setIsFilterOpen(false); // Close filter if click is outside
        }
      };
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <Money1 color="black" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Credits</p>
            <p className="text-sm text-grey-500">
              Manage your credits to send bulk messages
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
          <Link href={"credits/topup"}>
            <Button
              size="sm"
              iconComponent={<Plus color="#fff" />}
              icon_style="leading-icon"
              type="primary"
              text="Top up Credits"
            />
          </Link>
        </div>
      </div>

      <div className=" w-full max-w-[361px] mt-[25px] gap-4 px-6  py-4 flex items-center rounded-xl border border-[#E4E7EC] ">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-[#475367] text-sm">Credit Balance</span>
          <span className="text-[30px] font-semibold text-[#344054]">0</span>
          <span className="text-primary-600 text-xs">Approx. 0 messages</span>
        </div>

        <div className="rounded-full p-[10px] border border-solid border-[#E4E7EC]">
          <IconStack color="#667085" />
        </div>
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
            <div className="relative"  >
              <Button
                size="sm"
                text="Filters"
                icon_style="leading-icon"
                iconComponent={<FilterAlt color="#383E49" />}
                onClick={() => setIsFilterOpen((prev) => !prev)}
              />
              {isFilterOpen && (
                <div ref={filterRef} className="absolute mt-2 w-full bg-white gap-y-2 rounded-lg p-4 px-2 items-center shadow-sm z-30 flex flex-col">
                  <div className="rounded-sm py-1 cursor-pointer  hover:bg-[#F9FAFB] w-full text-xs whitespace-nowrap ">
                    Credit used
                  </div>
                  <div className="rounded-sm py-1 cursor-pointer  hover:bg-[#F9FAFB] w-full text-xs whitespace-nowrap ">
                    Credit unused
                  </div>
                </div>
              )}
            </div>
            <div ref={calendarRef} className="relative">
              <Button
                size="sm"
                iconComponent={<Calendar color="#383E49" />}
                icon_style="leading-icon"
                text="Select dates"
                onClick={() => setIsCalenderOpen(true)}
              />
              {isCalenderOpen && (
                <div className="absolute z-30 w-full flex items-center justify-center lg:block lg:w-fit   left-1 lg:-left-64 lg:right-10  mt-4">
                  <DateRangePicker />
                </div>
              )}
            </div>
          </div>
        </div>

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
                <th className="p-2" onClick={() => handleSort("description")}>
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
                <th className="p-2" onClick={() => handleSort("creditUsed")}>
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
                {transactions.map((transaction, index) => (
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
                              <Link href={"credits/transaction-details"}>
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
                Tap the button below to top up credits and share content with
                your contacts
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
      </div>
    </div>
  );
};

export default Credits;
