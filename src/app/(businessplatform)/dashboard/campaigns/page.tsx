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
import React, { useEffect, useMemo, useState } from "react";
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
import { CampaignInterface, initialCampaign } from "@/utils/data";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleModal } from "@/lib/slices/miscellaneousSlice";

type Props = {};

const Campaign = (props: Props) => {
  const [statusValue, setStatusValue] = useState("");
  const [sortValue, setSortValue] = useState("");
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
    { id: 4, title: "Drafts", value: draftCount, isActive: false },
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
      const matchesTab =
        activeTab === "All" ||
        campaign.status === activeTab ||
        campaign.status === "Draft";
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const isModalOpen = useAppSelector((state) => state.miscellaneous.isModalOpen);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div
       onClick={() => dispatch(toggleModal())}
        className={`fixed w-full h-screen flex items-center justify-end  bg-black/20 top-0 left-0 z-50  p-4   transition-all duration-500 ${
         isModalOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`h-full bg-white  max-w-[475px] sidebar  py overflow-auto w-full rounded-xl mt   transition-all duration-500 p-6   ${
            isModalOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end items-center mt-2  cursor-pointer">
            <div
              onClick={() => dispatch(toggleModal())}
              className="flex items-center p-2 w-fit rounded-lg  justify-center border border-[#E4E7EC]"
            >
              <Multiply color="#5D6679" />
            </div>
          </div>
          <div className="w-full relative grid place-items-center mt-4">
            <Image src={bg} alt="bg" className="w-full" />
            <span className="text-4xl font-semibold text-white absolute z-50">
              MESSAGE TYPE
            </span>
          </div>
          <div className="overflow-auto h-full py-9 max-h-[490px] justify-between gap-4 flex flex-col h-43  p-4 px-4 mt-10 rounded-xl bg-[#F2F4F7]">
            <div className="">
              <p className="text-grey-800 text-sm font-medium">
                Marketing Message
              </p>
              <p className="text-sm text-grey-500">
                Automate follow-ups and provide essential updates to your
                customers. Perfect for order confirmations, account alerts, and
                delivery tracking.
              </p>
            </div>
            <div className="">
              <p className="text-grey-800 text-sm font-medium">
                Utility Message
              </p>
              <p className="text-sm text-grey-500">
                Choose a campaign type to fit your goal. This will affect
                message format, engagement options, and billing.
              </p>
            </div>
            <div className="">
              <p className="text-grey-800 text-sm font-medium">
                Authentication Message
              </p>
              <p className="text-sm text-grey-500">
                Securely verify user identities with one-time passcodes. Ideal
                for account verification, password resets, and login challenges.
              </p>
            </div>
            <div className="">
              <p className="text-grey-800 text-sm font-medium">
                Service Message
              </p>
              <p className="text-sm text-grey-500">
                Provide seamless customer support by addressing inquiries and
                resolving issues. Use this for real-time assistance, feedback
                collection, or issue resolution.
              </p>
            </div>
          </div>
          <Link href={"/createcampaign"}>
            {" "}
            <Button
              text="Continue"
              type="primary"
              size="sm"
              className="mt-10 mb-8"
            />
          </Link>
        </div>
      </div>

      {/* The whole page */}
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <LoudSpeaker color="black" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Campaigns</p>
            <p className="text-sm text-grey-800">
              Create and manage campaigns for your business
            </p>
          </div>
        </div>
        <div className="flex  gap-3 mt-4 lg:mt-0">
          <Button
            size="sm"
            iconComponent={<FileDownload color="#383E49" />}
            icon_style="leading-icon"
            text="Export"
          />
          <Button
            size="sm"
            onClick={() => dispatch(toggleModal())}
            iconComponent={<Plus color="#fff" />}
            icon_style="leading-icon"
            type="primary"
            text="Create Campaign"
          />
        </div>
      </div>

      <div className="flex mt-[25px] w-full border border-[#E4E7EC] rounded-xl flex-col">
        <div className="flex overflow-auto px-1 lg:px-11 gap-8 lg:gap-12 border-t border-t-grey-50 h-[62px] items-end">
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
                className={tab.isActive ? "text-primary-400" : "text-grey-800"}
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
          <div className="text-lg font-medium">
            {campaigns.length} Campaigns
          </div>

          <div className="shadow-xs">
            <SearchInput
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
          {campaigns.length == 0 && (
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

export default Campaign;
