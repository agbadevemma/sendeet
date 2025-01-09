"use client";
import ArrowUp from "@/icons/arrow-up";
import Bin from "@/icons/bin";
import Check from "@/icons/check";
import Copy from "@/icons/copy";
import DotV from "@/icons/dot-v";
import Eye from "@/icons/eye";
import EyeSlash from "@/icons/eye-slash";
import PencilEdit from "@/icons/pencil-edit";
import { ApiInterfaceTable, apiTable } from "@/utils/data";
import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = {};

const Api = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const [selectedIndexes, setSelectedIndexes] = useState<{
    visibility: number | null;
    copy: number | null;
  }>({
    visibility: null,
    copy: null,
  });
  const [sortConfig, setSortConfig] = useState<{
    key: keyof ApiInterfaceTable | null;
    direction: "asc" | "desc" | null;
  }>({
    key: null,
    direction: null,
  });

  const handleToggleVisibility = (index: number | null) => {
    setSelectedIndexes((prev) => ({
      ...prev,
      visibility: prev.visibility === index ? null : index,
    }));
  };

  const handleCopy = useCallback((index: number, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setSelectedIndexes((prev) => ({
        ...prev,
        copy: index,
      }));
      setTimeout(() => {
        setSelectedIndexes((prev) => ({
          ...prev,
          copy: null,
        }));
      }, 2000); // Reset after 2 seconds
    });
  }, []);
  const handleSort = (key: keyof ApiInterfaceTable) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

  const sortedApiTable = [...apiTable].sort((a, b) => {
    if (sortConfig.key === null) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="flex flex-col max-w-[700px] gap-1">
        <p className="text-[18px] size font-medium">API Key Management</p>
        <p className="text-xs text-[#667085]">
          API keys allow integrations with external platforms like WhatsApp.
          Treat keys as passwords and avoid sharing them with unauthorized
          parties.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto h-[600px]">
        <table className="w-full">
          <thead className="text-grey-600 rounded  top-0 z-10">
            <tr className="bg-[#F9FAFB]">
              <th className="pl-6 pr-2 py-2 rounded-s-lg">
                <div className="flex items-center text-nowrap gap-2 text-[#5D6679] text-sm font-medium w-full cursor-pointer">
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
                    <ArrowUp color={"#5D6679"} height={16} width={16} />
                  </div>
                </div>
              </th>
              <th className="p-2 pr-0 ">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-fit cursor-pointer">
                  Value
                </div>
              </th>

              <th className="p-2 ">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                  Last used
                  <div
                    onClick={() => handleSort("lastUsed")}
                    className={` transition-transform duration-300   ${
                      sortConfig?.key === "lastUsed" &&
                      sortConfig.direction === "asc"
                        ? "transform rotate-180"
                        : ""
                    }`}
                  >
                    <ArrowUp color={"#5D6679"} height={16} width={16} />
                  </div>
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer">
                  Created
                  <div
                    onClick={() => handleSort("created")}
                    className={` transition-transform duration-300   ${
                      sortConfig?.key === "created" &&
                      sortConfig.direction === "asc"
                        ? "transform rotate-180"
                        : ""
                    }`}
                  >
                    <ArrowUp color={"#5D6679"} height={16} width={16} />
                  </div>
                </div>
              </th>
              <th className="p-2  rounded-e-lg">
                <div className="flex items-center text-nowrap gap-2  text-[#5D6679] text-sm font-medium w-full cursor-pointer"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedApiTable.map((audience, index) => (
              <tr key={audience.id} className=" cursor-pointer ">
                <td className="text-sm text-nowrap  font-medium flex  gap-2 items-center text-grey-800 p-4 pl-6">
                  {audience.name}
                </td>
                <td className="text-sm font-medium text-grey-800 p-2">
                  <div className="p-2  w-full max-w-[302px] rounded-[6px] flex items-center justify-between border border-grey-100 bg-grey-50  text-grey-400 ">
                    {index === selectedIndexes.visibility ? (
                      <p className="text-xs">{audience.value}</p>
                    ) : (
                      "*******************************"
                    )}

                    {index === selectedIndexes.visibility ? (
                      <button onClick={() => handleToggleVisibility(null)}>
                        <Eye color="#667185" height={20} width={20} />
                      </button>
                    ) : (
                      <button onClick={() => handleToggleVisibility(index)}>
                        <EyeSlash color="#667185" height={20} width={20} />
                      </button>
                    )}

                    {index === selectedIndexes.copy ? (
                      <Check color="#0B6B2B" height={20} width={20} />
                    ) : (
                      <button onClick={() => handleCopy(index, audience.value)}>
                        <Copy color="#667185" height={20} width={20} />
                      </button>
                    )}
                  </div>
                </td>
                <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                  {audience.lastUsed}
                </td>
                <td className="text-sm font-medium text-grey-800 p-2 pr-8">
                  {audience.created}
                </td>

                <td className="text-sm font-medium gap-2 px-10 text-grey-800 p-2 flex items-center">
                  {" "}
                  <div className="relative" ref={modalRef}>
                    <div
                      onClick={() => setIsModalOpen(true)}
                      className="h-8 w-8 p-2 jus flex items-center rounded-lg border border-[#E4E7EC]"
                    >
                      <DotV color="#101928" />
                    </div>
                    <div
                      className={`absolute top-6 z-[100] right-0 h-[80px]  border-grey-50 bg-white border-[0.9px] w-[163px] pl-[7px] pr-[4px] pb-[3px] pt-[5px] rounded-[10px] filter drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] ${
                        isModalOpen ? "" : "hidden"
                      }`}
                    >
                      <div className="flex rounded-lg hover:bg-[#F9FAFB] hover:text-primary-600 py-2 px-[10px] text-grey-800 text-xs items-center gap-2">
                        <PencilEdit color="#009BE1" height={16} width={16} />{" "}
                        <span>Edit API key</span>
                      </div>
                      <div className="flex rounded-lg hover:bg-[#F9FAFB] hover:text-primary-600 py-2 px-[10px] text-grey-800 text-xs items-center gap-2">
                        <Bin color="#009BE1" height={16} width={16} />{" "}
                        <span>Delete API key</span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Api;
