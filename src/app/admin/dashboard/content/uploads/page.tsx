"use client";
import Button from "@/components/buttons/Button";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import Pagination from "@/components/Pagination";
import ArrowUp from "@/icons/arrow-up";
import DotV from "@/icons/dot-v";
import Eye from "@/icons/eye";

import FilterAlt from "@/icons/filter-alt";

import SearchIcon from "@/icons/search-icon";
import illustration from "../../../../../images/illustrationfiles.svg";
import SendAlt from "@/icons/send-alt";
import {
  Campaign,
  mockCampaignData,
  mockUploadsData,
  Uploads,
} from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FileIcon from "@/icons/file-icon";
import FileAlt from "@/icons/file-alt";
import Video from "@/icons/video";
import ImageIcon from "@/icons/imageicon";
import MusicIcon from "@/icons/music";
import mp3img from "../../../../../images/filetypes/mp3.svg";
import gifimg from "../../../../../images/filetypes/gif.svg";
import pngimg from "../../../../../images/filetypes/png.svg";
import xlsimg from "../../../../../images/filetypes/xls.svg";

type Props = {};

interface TabItem {
  id: number;
  title: string;
  isActive: boolean;
}
interface SortConfig {
  key: keyof Uploads; // Restrict to keys of Campaign
  direction: "asc" | "desc";
}
const Upload = (props: Props) => {
  const [uploadData, setUploadData] = useState(mockUploadsData); // Changed variable name to reflect uploads
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // State to track selected items
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [tabs, setTabs] = useState<Array<TabItem>>([
    { id: 1, title: "Campaigns", isActive: true },
    { id: 2, title: "Uploads", isActive: false }, // "Uploads" tab is active
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
    "Document",
    "Images",
    "Audio",
  ]);

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSort = (key: keyof Uploads) => {
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
  const sortedUploads = () => {
    // Renamed to reflect "uploads"
    let sortableUploads = [...uploadData]; // Renamed variable to match uploads

    if (sortConfig !== null) {
      sortableUploads.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableUploads;
  };

  const getFilteredUploads = () => {
    // Filter by search query
    const filteredBySearch = sortedUploads().filter((upload) =>
      upload.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Filter by active filter tab
    return filteredBySearch.filter((upload) => {
      const fileExtension = getFileExtension(upload.fileName).toLowerCase();
  
      if (activeFilter === "All") {
        return true; // Show all uploads
      }
  
      const filterMappings: { [key: string]: string[] } = {
        Document: ["xlsx"],
        Images: ["gif", "png"],
        Audio: ["mp3"],
      };
  
      return filterMappings[activeFilter]?.includes(fileExtension);
    });
  };
  

  const handleSelectItem = (index: number) => {
    const isSelected = selectedItems.includes(index);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length < mockUploadsData.length) {
      // Renamed variable to "mockUploadsData"
      setSelectedItems(mockUploadsData.map((_, index) => index)); // Renamed to reflect uploads
    } else {
      setSelectedItems([]);
    }
  };

  const isAllSelected =
    mockUploadsData.length > 0 &&
    selectedItems.length === mockUploadsData.length;
  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < mockUploadsData.length;
  const getFileExtension = (fileName: string): string => {
    const match = fileName.match(/\.(\w+)$/);
    return match ? match[1] : "";
  };
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 pb-10 mt-10">
        {/* Insight Cards */}
        <Card
          title="Documents"
          value="0 Files"
          coloredbackground="!border-none bg-success-50"
          className="py-6"
          mainIcon={<FileIcon height={20} width={20} color="#0F973D" />}
        />

        <Card
          title="Videos"
          value="0 Files"
          oppositeFlow={true}
          coloredbackground="!border-none bg-warning-50"
          className="py-6"
          mainIcon={<Video height={20} width={20} color="#F3A218" />}
        />

        <Card
          title="Images"
          value="0 Files"
          coloredbackground="!border-none bg-primary-50"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<ImageIcon height={20} width={20} color="#00AAF7" />}
        />
        <Card
          title="Audio"
          value="0 Files"
          oppositeFlow={true}
          coloredbackground="!border-none bg-[#F4EBFF]"
          className="py-6"
          mainIcon={<MusicIcon height={20} width={20} color="#7F56D9" />}
        />
        <Card
          title="Other"
          value="0 Files"
          oppositeFlow={true}
          className="py-6"
          mainIcon={<FileAlt height={20} width={20} color="#667085" />}
        />
      </div>
      <div className="w-full border-[#E4E7EC] border rounded-[12px] bg-white px-4">
        <div className="flex lg:flex-row flex-col items-center justify-between mt-4 lg:mt-10">
          <div className="flex bg-[#F9FAFB] mt-4 lg:mt-0  justify-between items-center py-1 px-1 rounded-lg max-w-[344px] w-full">
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
        <div className="flex flex-col w-full mx-auto  mt-[18px] max-h-[814px]">
         <div className="w-full overflow-x-auto"> <table className="w-full">
            <thead className="text-grey-600 rounded sticky top-0 z-10">
              <tr className="bg-[#F9FAFB]">
                <th className="pl-6 pr-2 py-2 rounded-s-lg">
                  <div className="flex items-center text-nowrap gap-2 text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                    <Checkbox
                      checked={isAllSelected}
                      indeterminate={isIndeterminate}
                      onClick={handleSelectAll}
                    />
                    <span>File Name</span>
                    <div
                      onClick={() => handleSort("fileName")}
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "fileName" &&
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
                    Date Uploaded
                    <div
                      onClick={() => handleSort("dateUploaded")}
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "dateUploaded" &&
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
                    Uploaded By
                    <div
                      onClick={() => handleSort("uploadedBy")}
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "uploadedBy" &&
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
                    File Size
                    <div
                      onClick={() => handleSort("fileSize")}
                      className={` transition-transform duration-300   ${
                        sortConfig?.key === "fileSize" &&
                        sortConfig.direction === "asc"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    >
                      <ArrowUp color={"#5D6679"} />
                    </div>
                  </div>
                </th>
                <th className="p-2 rounded-e-lg ">
                  <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                   status
                  </div>
                </th>

                <th className="p-2 rounded-e-lg ">
                  <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                    Actions
                  </div>
                </th>
              </tr>
            </thead>

            {uploadData.length !== 0 && (
              <tbody>
                {getFilteredUploads().map((upload, index) => (
                  <tr
                    key={upload.id}
                    className="border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"
                  >
                    <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                      <Checkbox
                        checked={selectedItems.includes(index)}
                        onClick={() => handleSelectItem(index)}
                      />
                      <Image
                        src={
                          getFileExtension(upload.fileName) === "xls"
                            ? xlsimg
                            : getFileExtension(upload.fileName) === "png"
                            ? pngimg
                            : getFileExtension(upload.fileName) === "mp3"
                            ? mp3img
                            : gifimg
                        }
                        alt=""
                      />
                      {upload.fileName}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                      {upload.dateUploaded}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {upload.uploadedBy}
                    </td>
                    <td className="text-sm font-medium text-grey-800 p-2">
                      {upload.fileSize}
                    </td>

                    <td className="text-sm font-medium  p-2">
                      <div
                        className={`p-1 px-2 whitespace-nowrap  ${
                          upload.status === "Successful"
                            ? "bg-success-50 text-success-700"
                            : upload.status === "In Progress"
                            ? " text-warning-700 bg-warning-50"
                            : "text-error-700 bg-[#FEF3F2]"
                        } rounded-2xl flex items-center gap-2 w-fit`}
                      >
                        <div
                          className={`rounded-full h-2 w-2 text-success-700 ${
                            upload.status === "Successful"
                              ? " bg-success-500"
                              : upload.status === "In Progress"
                              ? "bg-[#F79009] "
                              : "bg-[#F04438]"
                          }`}
                        ></div>
                        {upload.status}
                      </div>
                    </td>
                    <td className="text-sm font-medium gap-2 text-grey-800 p-2 flex items-center">
                      <Link
                        href={`/admin/dashboard/usermanagement/campaignience/${upload.id}`}
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
                        iconComponent={<DotV color="#858D9D" />}
                        icon_style="icon-only"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table></div>
          {mockUploadsData.length >= 10 && (
            <div className="w-full  pt-[11px] pb-[16px] p-6 ">
              <Pagination />
            </div>
          )}
          {mockUploadsData.length == 0 && (
            <div className="w-full h-80 flex flex-col  text-center  mt-32 mb-32 items-center justify-center mx-auto">
              <Image src={illustration} alt="img" className="mx-auto" />
              <p className="text-lg font-semibold">No Files Yet</p>
              <p className="text-[#475367] text-sm max-w-[260px] w-full mt-1">
              Nothing to see here...no uploads have been made
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
