"use client";
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/Checkbox";
import ExploreCard from "@/components/onboarding/ExploreCard";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import ArrowUp from "@/icons/arrow-up";
import DotV from "@/icons/dot-v";
import Eye from "@/icons/eye";
import FileDownload from "@/icons/file-download";
import FilterAlt from "@/icons/filter-alt";
import Money1 from "@/icons/money-1";
import Plus from "@/icons/plus";
import SearchIcon from "@/icons/search-icon";
import UserAdd from "@/icons/user-add";
import UserGroup from "@/icons/user-group";
import { useAppDispatch } from "@/lib/hooks";
import { setExplore } from "@/lib/slices/miscellaneousSlice";

import illustration from "../../../../images/illustration3.svg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { audienceData2, AudienceData2 } from "@/utils/data";
import PencilEdit from "@/icons/pencil-edit";
import Bin from "@/icons/bin";
import Tag from "@/icons/tag";
import AddContact from "@/components/AddContact";
import BulkImport from "@/components/BulkImport";

type Props = {};

const Audience = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setExplore("singlecontact"));
  }, []);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [audienceData, setAudienceData] =
    useState<AudienceData2[]>(audienceData2);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const isAllSelected =
    audienceData.length > 0 && selectedItems.length === audienceData.length;
  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < audienceData.length;
  const [sortConfig, setSortConfig] = useState<{
    key: keyof AudienceData2;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof AudienceData2) => {
    const direction =
      sortConfig?.key === key && sortConfig.direction === "asc"
        ? "desc"
        : "asc";

    const sortedOrganizations = [...audienceData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setAudienceData(sortedOrganizations);
  };

  // Function to handle "select all" checkbox
  const handleSelectAll = () => {
    if (selectedItems.length < audienceData.length) {
      // Select all audienceData
      setSelectedItems(audienceData.map((_, index) => index));
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };

  const getFilteredOrganis = () => {
    const searchableFields: (keyof AudienceData2)[] = ["name", "phoneNumber"];

    return audienceData.filter((organization) => {
      // Check if any of the specified fields match the search query
      const matchesFields = searchableFields.some((field) =>
        organization[field]
          ?.toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );

      // Check if the registration date matches the search query

      // Return true if any condition matches
      return matchesFields;
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
      <div>
        {/* <AddContact setIsOpen={setIsOpen} isOpen={isOpen} /> */}
        <BulkImport isOpen={isOpen} setIsOpen={setIsOpen} />
        <div>
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
                <UserGroup color="black" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">Audience</p>
                <p className="text-sm text-grey-800">
                  View, import, and organize your contact list for more
                  effective campaign targeting
                </p>
              </div>
            </div>
            <div className="flex  gap-3 mt-4 lg:mt-0">
              <div className="relative w-full">
                <ExploreCard
                  arrowClassName="-translate-x-1/2  !left-auto  !top-2  !-right-2.5 "
                  currentStep="singlecontact"
                  bodyClassName="top-[0rem]  !-left-[21rem] "
                  description="Quickly add a new contact to your audience list manually."
                  onNext={() => dispatch(setExplore("bulkcontact"))}
                  title="Manually add a single contact"
                />{" "}
                <Button
                  size="sm"
                  iconComponent={<UserAdd color="#383E49" />}
                  icon_style="leading-icon"
                  text="Add Contact"
                />
              </div>
              <div className="relative w-full">
                <ExploreCard
                  arrowClassName="-translate-x-1/2  !left-auto  !-top-1.5 !right-1 "
                  currentStep="bulkcontact"
                  bodyClassName="top-[0rem]  !-left-[10rem]  mt-14  "
                  description="Quickly add a new contact to your audience list manually."
                  onNext={() => dispatch(setExplore("bulkcontact"))}
                  title="Manually add a single contact"
                />{" "}
                <Button
                  size="sm"
                  onClick={() => setIsOpen(true)}
                  iconComponent={<Plus color="#fff" />}
                  icon_style="leading-icon"
                  type="primary"
                  text="Import Contacts"
                />
              </div>
            </div>
          </div>
          <div className="rounded-xl mt-7 px-6  h-full w-full border border-[#E4E7EC] ">
            <div className="flex flex-col lg:flex-row lg:gap-4  py-4 gap-8 lg:items-center  justify-between">
              <div className="text-lg font-medium">
                {audienceData2.length} Audience
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
                  className1="!h-[40px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  icon={<SearchIcon color="#667085" />}
                />
              </div>
            </div>
            <div className="overflow-x-auto ">
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
                        <span>Name</span>
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
                        Phone number
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

                    <th className="p-2 ">
                      <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                        Tags
                        <div
                          onClick={() => handleSort("tags")}
                          className={` transition-transform duration-300   ${
                            sortConfig?.key === "tags" &&
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
                        Subscription
                        <div
                          onClick={() => handleSort("subscription")}
                          className={` transition-transform duration-300   ${
                            sortConfig?.key === "subscription" &&
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
                        Actions
                      </div>
                    </th>
                  </tr>
                </thead>

                {audienceData2.length !== 0 && (
                  <tbody className="">
                    {getFilteredOrganis().map((audience, index) => (
                      <tr
                        key={audience.id}
                        className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                      >
                        <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                          <Checkbox
                            checked={selectedItems.includes(index)}
                            onClick={() => handleSelectItem(index)}
                          />
                          {audience.name}
                        </td>
                        <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                          {audience.phoneNumber}
                        </td>

                        <td className="text-sm font-medium text-grey-800 p-2  ">
                          <div className="flex gap-2 items-center">
                            {audience.tags.map((tag) => (
                              <span className="flex text-xs items-center gap-2 p-2 px-4 bg-[#EFF8FF] text-[#175CD3] rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="text-sm font-medium p-2">
                          <div
                            className={`flex  w-fit items-center gap-[6px]  py-[2px] pl-2 pr-[10px] rounded-2xl ${
                              audience.subscription == "Opted In"
                                ? "bg-success-50 text-success-700"
                                : "bg-[#F2F4F7] text-[#344054]"
                            }`}
                          >
                            {" "}
                            <div
                              className={`h-2 w-2 bg-success-700 rounded-full  ${
                                audience.subscription == "Opted In"
                                  ? " bg-success-700"
                                  : "bg-[#344054]"
                              }`}
                            ></div>{" "}
                            <div className=" "> {audience.subscription}</div>
                          </div>
                        </td>
                        <td className="text-sm font-medium gap-2 text-grey-800 p-2 flex items-center">
                          <Link
                            href={`/admin/dashboard/usermanagement/organization/${audience.id}`}
                          >
                            <Button
                              size="sm"
                              icon_style="icon-only"
                              iconComponent={<PencilEdit color="#858D9D" />}
                              text="Edit"
                            />
                          </Link>
                          <Button
                            size="sm"
                            onClick={() => setIsModalOpen(true)}
                            iconComponent={<Tag color="#858D9D" />}
                            icon_style="icon-only"
                          />
                          <Button
                            size="sm"
                            iconComponent={<Bin color="#858D9D" />}
                            icon_style="icon-only"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
            {audienceData.length >= 10 && (
              <div className="w-full  pt-[11px] pb-[16px] p-6 ">
                <Pagination />
              </div>
            )}
            {audienceData.length === 0 && (
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
      </div>
    </div>
  );
};

export default Audience;
