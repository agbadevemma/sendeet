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
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AudienceData2 } from "@/utils/data";
import PencilEdit from "@/icons/pencil-edit";
import Bin from "@/icons/bin";
import Tag from "@/icons/tag";
import AddContact from "@/components/AddContact";
import BulkImport from "@/components/BulkImport";
import Multiply from "@/icons/multiply";
import SelectField from "@/components/SelectField";
import DeleteModal from "@/components/DeleteModal";
import TagsModal from "@/components/TagsModal";
import EditContact from "@/components/EditContact";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "@/lib/slices/contactApi";
import Spinner from "@/components/spinner";
import { toast } from "react-toastify";
import UserCross from "@/icons/user-cross";
import useLogout from "@/hooks/useLogout";

type Props = {};

interface Option {
  value: string;
  label: string;
}

const Audience = (props: Props) => {
  const dispatch = useAppDispatch();
  const {
    data,
    error,
    isLoading: isContactsLoading,
  } = useGetContactsQuery(undefined);

  console.log("contacts", error);
  const { handleLogout } = useLogout({role:"organization"});
  useEffect(() => {
    setAudienceData(data);
    if (error) {
      if ("status" in error) {
        // Now TypeScript knows error is FetchBaseQueryError
        const errorMessage =
          error.data &&
          typeof error.data === "object" &&
          "message" in error.data
            ? (error.data as { message?: string }).message
            : "An unexpected error occurred";

        if (error.status === 401) {
          console.log("Unauthorized! Logging out...");
          toast.error(
            <div className="flex items-start justify-between w-full py-2 px-4">
              <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-error-50 border border-error-500 shadow">
                <UserCross color="#D42620" />
              </div>
              <div className="gap-1 flex flex-col mr-4 w-full">
                <p className="!text-[14px] !font-medium text-[#101828]">
                  An error occurred
                </p>
                <p className="w-full !text-[14px] !font-normal text-[#667085]">
                  {errorMessage}
                </p>
              </div>
            </div>,
            {
              className:
                "text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]",
              progressClassName: "bg-red-200",
              icon: false,
            }
          );
          handleLogout();
        } else {
          toast.error(
            <div className="flex items-start justify-between w-full py-2 px-4">
              <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-error-50 border border-error-500 shadow">
                <UserCross color="#D42620" />
              </div>
              <div className="gap-1 flex flex-col mr-4 w-full">
                <p className="!text-[14px] !font-medium text-[#101828]">
                  Failed to Add contacts
                </p>
                <p className="w-full !text-[14px] !font-normal text-[#667085]">
                  {errorMessage}
                </p>
              </div>
            </div>,
            {
              className:
                "text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]",
              progressClassName: "bg-red-200",
              icon: false,
            }
          );
        }
      } else {
        console.error("Unexpected error format:", error);
      }
    }
  }, [data, error]);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenAddContact, setIsOpenAddContact] = useState<boolean>(false);
  const [isOpenEditContact, setIsOpenEditContact] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenTagModal, setIsOpenTagModal] = useState<boolean>(false);
  const [audienceData, setAudienceData] = useState<AudienceData2[]>([]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const isAllSelected =
    audienceData?.length > 0 && selectedItems.length === audienceData.length;
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
      setSelectedItems(audienceData.map((audience, index) => audience.id));
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };

  const getFilteredOrganis = () => {
    const searchableFields: (keyof AudienceData2)[] = [
      "firstName",
      "lastName",
      "phoneNumber",
    ];

    return audienceData?.filter((organization) => {
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
  const handleSelectItem = (audienceId: number) => {
    setSelectedItems((prev) => {
      if (prev.includes(audienceId)) {
        // Remove if already selected
        return prev.filter((i) => i !== audienceId);
      } else {
        // Add if not selected
        return [...prev, audienceId];
      }
    });
  };

  // For the select Fields
  const [statusOpen, setStatusOpen] = useState<boolean>(false);
  const [tagsOpen, setTagsOpen] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string>("");

  const statusOptions: Option[] = [
    { value: "Opted In", label: "Opted In" },
    { value: "Opted Out", label: "Opted Out" },
  ];

  const tagOptions: Option[] = [
    { value: "sales", label: "sales" },
    { value: "church", label: "church" },
    { value: "financial", label: "financial" },
  ];

  const handleStatusSelect = (value: string) => {
    setSelectedStatus(value);
    setStatusOpen(false);
  };

  const handleTagSelect = (value: string) => {
    setSelectedTags(value);
    setTagsOpen(false);
  };

  // Filter dopdown
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenFilter(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (isContactsLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  // if (error) return <p>Error loading contacts</p>;
  return (
    <div>
      <div>
        {/* Modals */}
        {isOpenAddContact && (
          <AddContact
            setIsOpen={setIsOpenAddContact}
            isOpen={isOpenAddContact}
          />
        )}
        {isOpen && <BulkImport isOpen={isOpen} setIsOpen={setIsOpen} />}
        {isOpenDeleteModal && (
          <DeleteModal
            setIsOpen={setIsOpenDeleteModal}
            selectedItems={selectedItems}
            isOpen={isOpenDeleteModal}
            setSelectedItems={setSelectedItems}
            selectedIndex={selectedIndex}
          />
        )}
        {/* {isOpenTagModal && <TagsModal setIsOpen={setIsOpenTagModal} isOpen={isOpenTagModal} setHighlightedItems={setSelectedItems} selectedIndex={selectedIndex} />} */}
        {isOpenEditContact && (
          <EditContact
            setIsOpen={setIsOpenEditContact}
            setIsOpenDeleteModal={setIsOpenDeleteModal}
            isOpen={isOpenEditContact}
            selectedIndex={selectedIndex}
            setSelectedItems={setSelectedItems}
          />
        )}
        <div>
          {/* main Page */}
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className=" flex items-center bg-white justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
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
                  onClick={() => setIsOpenAddContact(true)}
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
                />
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
          {selectedItems.length > 0 && (
            <div className="rounded-xl mt-7 xl:px-8 py-4    h-full w-full border bg-white border-[#E4E7EC] p-2  gap-4 flex lg:flex-row flex-col items-center justify-between ">
              <div className="flex items-center  gap-3 lg:gap-4">
                <span className="font-medium text-sm text-[#667085]">
                  {" "}
                  {selectedItems.length} Audience Selected
                </span>
                <Button
                  text="Unselect"
                  icon_style="txt"
                  onClick={() => setSelectedItems([])}
                />
              </div>
              <div className="flex items-center gap-3 lg:gap-4">
                <Button
                  type="destructive"
                  iconComponent={<Bin color="#fff" height={20} width={20} />}
                  onClick={() => setIsOpenDeleteModal(true)}
                  text="Delete Contacts"
                  icon_style="leading-icon"
                />
                <Button
                  iconComponent={<Tag color="#1D2939" height={20} width={20} />}
                  text="Manage tags"
                  onClick={() => setIsOpenTagModal(true)}
                  icon_style="leading-icon"
                />
              </div>
            </div>
          )}
          <div className="rounded-xl mt-7 px-6  h-full w-full border bg-white border-[#E4E7EC] ">
            <div className="flex flex-col lg:flex-row lg:gap-4  py-4 gap-8 lg:items-center  justify-between">
              <div className="text-lg font-medium">{data?.length} Audience</div>

              <div className="flex gap items-center gap-x-[18px] ">
                <div ref={dropdownRef} className="relative">
                  <Button
                    size="sm"
                    onClick={() => setIsOpenFilter(true)}
                    className="!h-[40px]"
                    text="Filters"
                    icon_style="leading-icon"
                    iconComponent={<FilterAlt color="#383E49" />}
                  />

                  <div
                    className={`w-[362px] ${
                      isOpenFilter ? "visible" : "invisible"
                    } border border-[#E4E7EC] right-0 shadow-xs  py-3 rounded-2xl absolute bg-white mt-4`}
                  >
                    <div
                      className="w-full border-b flex items-center justify-between  px-4 
                    pb-2"
                    >
                      <span className="font-semibold text-md">Filter</span>
                      <Button
                        text="Cancel"
                        icon_style="icon-only"
                        onClick={() => setIsOpenFilter(false)}
                        className="!h-8 !w-8"
                        size="sm"
                        iconComponent={
                          <Multiply color="#101928" height={16} width={16} />
                        }
                      />
                    </div>

                    <div
                      ref={dropdownRef}
                      className=" px-4 flex flex-col gap-8 my-10"
                    >
                      <SelectField
                        isOpen={statusOpen}
                        name="status"
                        label="Status"
                        fieldclassName="h-[38px]"
                        colored={true}
                        onToggle={() => setStatusOpen(!statusOpen)}
                        options={statusOptions}
                        onSelect={handleStatusSelect}
                        value={selectedStatus}
                        placeholder="Select status"
                      />
                    </div>

                    <div className="mt-4 px-4 gap-4 pt-4 border-t flex  w-full items-center">
                      <div className="w-full">
                        <Button
                          size="sm"
                          className="!w-full"
                          onClick={() => {
                            setSelectedTags("");
                            setSelectedStatus("");
                          }}
                          icon_style="txt"
                          text="Reset"
                        />
                      </div>
                      <div className="w-full">
                        <Button
                          size="sm"
                          className="!w-full"
                          type="primary"
                          icon_style="txt"
                          onClick={() => setIsOpenFilter(false)}
                          text="Apply"
                        />
                      </div>
                    </div>
                  </div>
                </div>

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
                        Last Engagement
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

                {data?.length !== 0 && (
                  <tbody>
                    {getFilteredOrganis()?.map((audience, index) => (
                      <tr
                        key={audience.id}
                        className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                      >
                        <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                          <Checkbox
                            checked={selectedItems.includes(audience.id)}
                            onClick={() => handleSelectItem(audience.id)}
                          />
                          {audience.firstName + " " + audience.lastName}
                        </td>
                        <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                          {audience.phoneNumber
                            .replace(/^.*\+/, "+")
                            .replace(/-/g, "")}
                        </td>

                        <td className="text-sm font-medium text-grey-800 p-2  ">
                          02/10/24
                          {/* <div className="flex gap-2 items-center">
                            {audience?.tags.map((tag) => (
                              <span className="flex text-xs items-center gap-2 py-[2px] pl-2 pr-[10px] bg-[#EFF8FF] text-[#175CD3] rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div> */}
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
                              className={`h-2 w-2 rounded-full  ${
                                audience.subscription == "Opted In"
                                  ? " bg-success-500"
                                  : "bg-grey-500"
                              }`}
                            ></div>{" "}
                            <div className="text-sm ">
                              {" "}
                              {audience.subscription ?? "Opted Out"}
                            </div>
                          </div>
                        </td>
                        <td className="text-sm font-medium gap-2 text-grey-800 p-2 flex items-center">
                          <Button
                            size="sm"
                            icon_style="icon-only"
                            onClick={() => {
                              setIsOpenEditContact(true);
                              // console.log("sm", selectedIndex);
                              setselectedIndex(audience.id);
                            }}
                            iconComponent={
                              <PencilEdit
                                color="#858D9D"
                                height={16}
                                width={16}
                              />
                            }
                            text="Edit"
                          />

                          {/* <Button
                            size="sm"
                            onClick={() => { setIsOpenTagModal(true); setselectedIndex(audience.id); }}
                            // setIsOpenTagModal
                            iconComponent={<Tag color="#858D9D" height={16} width={16} />}
                            icon_style="icon-only"
                          /> */}
                          <Button
                            size="sm"
                            onClick={() => {
                              setIsOpenDeleteModal(true);
                              setselectedIndex(audience.id);
                            }}
                            iconComponent={
                              <Bin color="#858D9D" height={16} width={16} />
                            }
                            icon_style="icon-only"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
            {audienceData?.length >= 10 && (
              <div className="w-full  pt-[11px] pb-[16px] p-6 ">
                <Pagination />
              </div>
            )}
            {audienceData?.length === 0 && (
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
