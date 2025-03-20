"use client";
import React, { useState } from "react";
import Button from "@/components/buttons/Button";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import ArrowUp from "@/icons/arrow-up";
import Coinstack from "@/icons/coinstack";
import DotV from "@/icons/dot-v";
import Eye from "@/icons/eye";
import FilterAlt from "@/icons/filter-alt";
import Multiply from "@/icons/multiply";
import SearchIcon from "@/icons/search-icon";
import {
  Organization,
  OrganizationCredit,
  organizationCredits,
  organizations,
} from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import illustration from "../../../../images/illustration3.svg";
import Money1 from "@/icons/money-1";
import AdjustOrganizationModal from "@/components/admin/AdjustOrganizationModal";

type Props = {};

const Overview = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [organizationsData, setOrganizationsData] =
    useState<OrganizationCredit[]>(organizationCredits);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const isAllSelected =
    organizationsData.length > 0 &&
    selectedItems.length === organizationsData.length;
  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < organizationsData.length;
  const [sortConfig, setSortConfig] = useState<{
    key: keyof OrganizationCredit;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof OrganizationCredit) => {
    const direction =
      sortConfig?.key === key && sortConfig.direction === "asc"
        ? "desc"
        : "asc";

    const sortedOrganizations = [...organizationsData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setOrganizationsData(sortedOrganizations);
  };

  // Function to handle "select all" checkbox
  const handleSelectAll = () => {
    if (selectedItems.length < organizationsData.length) {
      // Select all organizationsData
      setSelectedItems(organizationsData.map((_, index) => index));
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };

  const getFilteredOrganizations = () => {
    const searchableFields: (keyof OrganizationCredit)[] = [
      "organizationName",
      "industry",
      "lastPurchase",
    ];

    return organizationsData.filter((organization) => {
      // Check if any of the specified fields match the search query
      const matchesFields = searchableFields.some((field) =>
        organization[field]
          ?.toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );

      // Check if the registration date matches the search query
      const matchesRegistrationDate = organization.creditBalance
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Return true if any condition matches
      return matchesFields || matchesRegistrationDate;
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
  return (
    <div>
      <AdjustOrganizationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 mt-10">
        <Card
          title="Total Revenue Generated"
          value="$0"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Coinstack height={20} width={20} color="#667085" />}
        />
        <Card
          title="Total Revenue Generated"
          value="₦0"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Coinstack height={20} width={20} color="#667085" />}
        />{" "}
        <Card
          title="Total Credits"
          value="0"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Coinstack height={20} width={20} color="#667085" />}
        />{" "}
        <Card
          title="Avg. Credit Balance "
          value="0"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<Coinstack height={20} width={20} color="#667085" />}
        />
      </div>

      <div className="rounded-xl mt-7  h-full w-full border border-[#E4E7EC] ">
        <div className="flex flex-col lg:flex-row lg:gap-4 px-6 py-4 gap-8 lg:items-center  justify-between">
          <div className="text-lg font-medium">Organization Credits</div>

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
              className1="!h-[40px]"
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
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={isIndeterminate}
                    onClick={handleSelectAll}
                  />
                  <span> Organization Name</span>
                  <div
                    onClick={() => handleSort("organizationName")}
                    className={` transition-transform duration-300   ${
                      sortConfig?.key === "organizationName" &&
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
                    className={` transition-transform duration-300   ${
                      sortConfig?.key === "industry" &&
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
                  Credit Balance
                  <div
                    onClick={() => handleSort("creditBalance")}
                    className={` transition-transform duration-300   ${
                      sortConfig?.key === "creditBalance" &&
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
                  Last Purchase
                  <div
                    onClick={() => handleSort("lastPurchase")}
                    className={` transition-transform duration-300   ${
                      sortConfig?.key === "lastPurchase" &&
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
                  Credit Status
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                  Actions
                </div>
              </th>
            </tr>
          </thead>

          {organizationCredits.length !== 0 && (
            <tbody className="">
              {getFilteredOrganizations().map((org, index) => (
                <tr
                  key={org.id}
                  className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                >
                  <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                    <Checkbox
                      checked={selectedItems.includes(index)}
                      onClick={() => handleSelectItem(index)}
                    />
                    {org.organizationName}
                  </td>
                  <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                    {org.industry}
                  </td>
                  <td className="text-sm font-medium text-grey-800 p-2">
                    {org.creditBalance}
                  </td>
                  <td className="text-sm font-medium text-grey-800 p-2">
                    {org.lastPurchase}
                  </td>

                  <td className="text-sm font-medium  p-2">
                    <div
                      className={`p-1 px-2 whitespace-nowrap  ${
                        org.creditStatus === "Normal"
                          ? "bg-success-50 text-success-700"
                          : "bg-[#FEF3F2] text-error-700"
                      } rounded-2xl flex items-center gap-2 w-fit`}
                    >
                      {org.creditStatus}
                    </div>
                  </td>
                  <td className="text-sm font-medium gap-2 text-grey-800 p-2 flex items-center">
                    <Link
                      href={``}
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
                      onClick={() => setIsModalOpen(true)}
                      iconComponent={<Money1 color="#858D9D" />}
                      icon_style="icon-only"
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
        {organizationCredits.length >= 10 && (
          <div className="w-full  pt-[11px] pb-[16px] p-6 ">
            <Pagination />
          </div>
        )}
        {organizationCredits.length === 0 && (
          <div className="w-full h-80 flex flex-col  text-center  mt-32 mb-32 items-center justify-center mx-auto">
            <Image src={illustration} alt="img" className="mx-auto" />
            <p className="text-lg font-semibold">No Organizations Yet</p>
            <p className="text-[#475367] text-sm max-w-[260px] w-full mt-1">
              It looks like no Organizationes have been registered on the
              platform.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
