import Button from "@/components/buttons/Button";
import Calendar from "@/icons/calendar";
import FileDownload from "@/icons/file-download";
import FilterAlt from "@/icons/filter-alt";
import IconStack from "@/icons/icon-stack";
import Money1 from "@/icons/money-1";
import Plus from "@/icons/plus";
import React from "react";

type Props = {};

const Credits = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
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
        <div className="flex gap-4 px-6 py-4  items-center  justify-between">
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
      <div className="flex w-full mx-auto px-6">
        <table className="bg-[#F9FAFB]">
         <thead className="text-grey-600">
          <tr>
            <th className="flex items-center">Transaction code</th>
            <th className="flex items-center">Date</th>
          </tr>
         </thead>
        </table>
      </div>
    </div>
  );
};

export default Credits;
