"use client";
import DotV from "@/icons/dot-v";
import { useAppSelector } from "@/lib/hooks";
import { CampaignInterface, initialCampaign } from "@/utils/data";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  return (
    <div className="w-[100px]">
      {" "}
      <p
        className={`flex items-center min-h-[24px] w-fit   justify-center text-sm font-medium py-[2px] pl-[8px] pr-[10px]   gap-[6px] rounded-2xl ${
          status === "Draft"
            ? "bg-[#F2F4F7] text-[#344054] "
            : status === "Active"
            ? "text-warning-500 bg-warning-50"
            : "bg-success-50 text-success-500 "
        }`}
      >
        <div
          className={`h-[6px] w-[6px] rounded-full ${
            status === "Draft"
              ? "bg-[#667085] "
              : status === "Active"
              ? "bg-warning-500 "
              : "bg-success-500"
          }`}
        ></div>
        <span> {status}</span>
      </p>
    </div>
  );
};

const useCampaigns = () => {
  const [campaigns, setCampaigns] =
    useState<CampaignInterface[]>(initialCampaign);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CampaignInterface;
    direction: "asc" | "desc";
  } | null>(null);
  const { isModalOpen, explore } = useAppSelector(
    (state) => state.miscellaneous
  );
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
    const tab = tabs.map((tab) => ({
      ...tab,
      isActive: tab.id == selectedId,
    }));
    // setCampaigns( )
    setTabs(tab);
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
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const isAllSelected =
    campaigns.length > 0 && selectedItems.length === campaigns.length;

  const isIndeterminate =
    selectedItems.length > 0 && selectedItems.length < campaigns.length;

  const columns = useMemo(
    () => [
      {
        label: "Campaign Name",
        key: "campaign",
        className: "",
      },
      {
        label: "Date",
        key: "date",
        className: "",
        // formatter: formatToMoney,
      },
      {
        label: "Delivered",
        key: "delivered",
        className: "!px-10",
        // formatter: formatToMoney,
      },
      {
        label: "Opened",
        key: "open",
        className: "!px-10",
        // formatter: formatToMoney,
      },
      {
        label: "Clicked",
        key: "clicked",
        className: "!px-10",
        // formatter: formatToMoney,
      },
      {
        label: "Status",
        key: "status",
        className: "",
        formatter: (val: string) => <StatusBadge status={val} />,
      },
    ],
    []
  );
  return {
    isAllSelected,
    setSearchQuery,
    searchQuery,
    isIndeterminate,
    handleSelectItem,
    handleSelectAll,
    selectedItems,
    isModalOpen,
    campaigns,
    handleTabClick,
    tabs,
    columns,
    handleSort,
  };
};

export default useCampaigns;
