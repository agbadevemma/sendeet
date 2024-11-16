import AdminBarChart from "@/components/admin/AdminBarChart";
import Button from "@/components/buttons/Button";
import Graph from "@/components/Graph";
import ArrowDown from "@/icons/arrow-down";
import ArrowUp from "@/icons/arrow-up";
import Building5 from "@/icons/building-5";
import Elements from "@/icons/elements";
import Eye from "@/icons/eye";
import FileDownload from "@/icons/file-download";
import Money1 from "@/icons/money-1";
import TickDouble from "@/icons/tick-double";
import UserAdd from "@/icons/user-add";
import UserGroup from "@/icons/user-group";
import UserRemove from "@/icons/user-remove";
import UserTick from "@/icons/user-tick";
import Link from "next/link";
import React from "react";

type Props = {};

const AdminDashboard = (props: Props) => {
  return (
    <div className="">
      <div className="w-full ">
        <div className="flex  flex-col md:flex-row gap-6 lg:gap-0 justify-between lg:items-center ">
          <div className="flex items-center gap-4">
            <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
              <Elements color="black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">Dashboard</p>
              <p className="text-sm text-grey-500">
                Welcome back, Testing Company
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
          </div>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-5 w-full gap-4 mt-12">
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-sm">Total Users</span>
              <span className="text-[#344054] text-xl font-semibold">
                1,943,219
              </span>
              <div className="flex items-center gap-[6px]  ">
                <div className="px-1 rounded-[10px] text-xs flex  items-center gap-[2px] text-error-600 bg-error-50">
                  <ArrowDown height={12} width={12} color="#971B17" /> 1%
                </div>
                <span className="text-error-600 text-xs">vs last week</span>
              </div>
            </div>
            <div className="rounded-full p-[10px] border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <UserGroup color="#667085" height={20} width={20}/>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-sm">Active Users</span>
              <span className="text-[#344054] text-xl font-semibold">1,751,369</span>
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
              <UserTick  height={20} width={20} color="#667085" />
            </div>
          </div>
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-sm">Total Businesses</span>
              <span className="text-[#344054] text-xl font-semibold">342,891</span>
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
              <Building5 color="#667085" height={20} width={20} />
            </div>
          </div>{" "}
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-sm">Total Subscribers</span>
              <span className="text-[#344054] text-xl font-semibold">1,325,464</span>
                <div className="flex text-success-600 items-center gap-[6px] ">
                {" "}
                <div className="px-1 rounded-[10px] text-xs flex w-fit items-center gap-[2px] text-success-600 bg-success-50">
                  <ArrowUp color="#12B76A" height={12} width={12} />
                  <span className="font-medium">2%</span>
                </div>
                <span className=" text-xs">vs lastweek</span>
              </div>
            </div>
            <div className="rounded-full p-[10px] flex-nowrap border border-solid border-grey-[#E4E7EC] flex items-center justify-center flex-shrink-0">
              <UserAdd color="#667085" height={20} width={20} />
            </div>
          </div>{" "}
          <div className="p-4 flex items-center justify-between  w-full border gap-4 rounded-xl border-[#E4E7EC]  border-solid  ">
            <div className="flex flex-col gap-2">
              <span className="text text-sm">Total Opt outs</span>
              <span className="text-[#344054] text-xl font-semibold">235,987</span>
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
              <UserRemove color="#667085" height={20} width={20} />
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-col w-full gap-x-4 mt-12">
          <div className=" p-4 lg:p-6  w-full border rounded-xl flex lg:flex-row flex-col gap-10 h-full">
            <div className="w-full">
              <div className="flex  items-center gap-4">
                <p className="text-[16px] font-medium w-full">Credit Usage</p>
                <Button
                  size="md"
                  text="12 Months"
                  className="!px-4 !py-[10px]"
                />
              </div>

              <div className="flex item-center  justify-between mt-1 w-full ">
                <div className="flex justify-between lg:justify-normal  items-center lg:gap-4 w-full mt-2 ">
                  <span className="text-xl lg:text-3xl font-medium">
                    $107,843.82
                  </span>
                  <div className="py-[2px] pl-[10px] flex gap-1 items-center pr-[8px] text-xs bg-success-50 text-[#344054] rounded-2xl">
                    <ArrowUp color="#12B76A" height={12} width={12} />
                    <span className="text-success-700 font-medium">7.2%</span>
                  </div>
                </div>
              </div>
              <div className="flex  w-full justify-end  items-center gap-[13px] mt-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-100 rounded-full"></span>
                  <span className="text-gray-500 text-[13px]">Purchased</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-800 rounded-full"></span>
                  <span className="text-gray-500 text-[13px]">Used</span>
                </div>
              </div>
              <AdminBarChart />
            </div>
            <div className="h-96 hidden lg:block bg-[#F0F1F3] w-px mt-6"></div>
            <div className="w-full lg:w-1/2  flex flex-col">
              <p className="font-medium text-md ">Low Credit Balance</p>
              <div className="flex flex-col mt-6 gap-4  flex-1">
                {["", "", "", "", "", "", ""].map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-4 border-b broder-b-[#F0F1F3] "
                  >
                    <p className="text-[#667085] text-sm">
                      HealthyLife Pharmacy
                    </p>
                    <div className="flex items-center gap-3">
                      <Button
                        className=" !h-8 !w-8 !p-0"
                        icon_style="icon-only"
                        iconComponent={
                          <Eye color="#858D9D" height={16} width={16} />
                        }
                      />
                      <Button
                        className=" !h-8 !w-8 !p-0"
                        icon_style="icon-only"
                        iconComponent={
                          <Money1 color="#858D9D" height={16} width={16} />
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:p-6 p-4  border rounded-xl h-full">
            <div className="w-full">
              <div className="flex  items-center gap-4">
                <p className="text-[18px] font-medium w-full">
                  Audience Growth
                </p>
                <Button
                  size="md"
                  text="12 Months"
                  className="!px-4 !py-[10px]"
                />
              </div>
              <p className="text-grey-500 text-md mb-2 mt-4">
                Total Subscribers
              </p>
              <div className="flex item-center  justify-between mt-1 ">
                <div className="flex items-center justify-between lg:justify-normal lg:gap-4 w-full">
                  <span className=" text-xl lg:text-3xl font-medium">
                    4,538
                  </span>
                  <div className="py-[2px] pl-[10px] flex gap-1 items-center pr-[8px] text-xs bg-success-50 text-[#344054] rounded-2xl">
                    <ArrowUp color="#12B76A" height={12} width={12} />
                    <span className="text-success-700 font-medium">7.2%</span>
                  </div>
                </div>
              </div>
              <div className="flex  w-full justify-end  items-center gap-[13px] mt-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  <span className="text-gray-500 text-[13px]">Subscribers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D4B2] rounded-full"></span>
                  <span className="text-gray-500 text-[13px]">
                    Unsubscribers
                  </span>
                </div>
              </div>

              <Graph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
