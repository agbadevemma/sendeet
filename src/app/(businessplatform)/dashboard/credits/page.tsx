import Button from "@/components/buttons/Button";
import ArrowUp from "@/icons/arrow-up";
import Calendar from "@/icons/calendar";
import DotV from "@/icons/dot-v";
import FileDownload from "@/icons/file-download";
import FilterAlt from "@/icons/filter-alt";
import IconStack from "@/icons/icon-stack";
import Money1 from "@/icons/money-1";
import Plus from "@/icons/plus";
import React from "react";

type Props = {};

const Credits = (props: Props) => {
  interface Transaction {
    code: string;
    date: string;
    creditPurchased: string;
    description: string;
    creditUsed: string;
    status: "successful" | "pending" | "failed";
  }
  const transactions: Transaction[] = [
    {
      code: "TXN12345",
      date: "10/10/24",
      creditPurchased: "500",
      description: "Purchased 500 credits",
      creditUsed: "-",
      status: "successful",
    },
    {
      code: "TXN12346",
      date: "10/11/24",
      creditPurchased: "1000",
      description: "Purchased 1000 credits",
      creditUsed: "-",
      status: "successful",
    },
    {
      code: "TXN12347",
      date: "10/12/24",
      creditPurchased: "200",
      description: "Purchased 200 credits",
      creditUsed: "50",
      status: "pending",
    },
  ];
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
          <Button
            size="sm"
            iconComponent={<Plus color="#fff" />}
            icon_style="leading-icon"
            type="primary"
            text="Top up Credits"
          />
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
          <div className="flex gap gap-x-[18px]">
            <Button
              size="sm"
              text="Filters"
              icon_style="leading-icon"
              iconComponent={<FilterAlt color="#383E49" />}
            />
            <Button
              size="sm"
              iconComponent={<Calendar color="#383E49" />}
              icon_style="leading-icon"
              text="Select dates"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full mx-auto px-6 overflow-auto mt-[18px]">
        <table className=" w-full">
          <thead className="text-grey-600 rounded">
            <tr className="bg-[#F9FAFB]">
              <th className=" pl-6 pr-2 py-2  rounded-s-lg">
                <div className="flex items-center text-nowrap gap-2 w-full">
                  Transaction code <ArrowUp color="#5D6679" />
                </div>
              </th>
              <th className=" p-2">
                <div className="flex items-center text-nowrap gap-2 w-full">
                  Date
                  <ArrowUp color="#5D6679" />
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2">
                  Credit purchased <ArrowUp color="#5D6679" />
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2">
                  Description <ArrowUp color="#5D6679" />
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center text-nowrap gap-2">
                  Credit used <ArrowUp color="#5D6679" />
                </div>
              </th>
              <th className="p-2 rounded-e-lg">
                <div className="flex items-center text-nowrap">Status</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={transaction.code}
                className="border-b border-b-grey-50 hover:bg-gray-50"
              >
                <td className="font-medium text-grey-800 p-4 pl-6">
                  {transaction.code}
                </td>
                <td className="font-medium text-grey-800 p-2 pr-8">
                  {transaction.date}
                </td>
                <td className="font-medium text-grey-800 p-2">
                  {transaction.creditPurchased}
                </td>
                <td className="font-medium text-grey-800 p-2">
                  {transaction.description}
                </td>
                <td className="font-medium text-grey-800 p-2">
                  {transaction.creditUsed}
                </td>
                <td className="font-medium text-grey-800 p-2">
                  <div className="flex gap-x-2">
                    <p
                      className={`flex items-center  min-h-[24px] w-[94px] justify-center font-medium py-[2px] text-sm px-[10px] rounded-2xl
                  ${
                    transaction.status === "successful"
                      ? "bg-success-50 text-success-800"
                      : "bg-yellow-50 text-yellow-800"
                  }`}
                    >
                      {transaction.status}
                    </p>
                    <div className="h-8 w-8 p-2 flex items-center rounded-lg border border-[#E4E7EC]">
                      <DotV color="#101928" />
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

export default Credits;
