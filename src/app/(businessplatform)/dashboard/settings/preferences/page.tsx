"use client";
import Button from "@/components/buttons/Button";
import TextButton from "@/components/buttons/TextButton";
import ToggleButton from "@/components/ToggleButton";
import React, { useState } from "react";

type Props = {};
type ToggleStates = {
  [key: string]: boolean; // Add an index signature to allow dynamic key access
};
const Preferences = (props: Props) => {
  const [toggleStates, setToggleStates] = useState<ToggleStates>({
    campaignPush: true,
    campaignEmail: true,
    creditsPush: true,
    creditsEmail: true,
    remindersPush: true,
    remindersEmail: true,
  });

  const handleToggle = (key: keyof ToggleStates) => {
    setToggleStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      {" "}
      <p className="text-[18px] size font-medium ">Notification Settings</p>
      <p className="text-xs text-[#667085]">
        Select when and how you’ll be notified
      </p>
      <div className="mt-6 pt-5 pb-5 flex items-center border-t border-b  border-t-[#E4E7EC]">
        <div className="flex flex-col w-full  max-w-[454px]">
          {" "}
          <p className="text-[18px] size font-medium text-[#344054]">
            Campaign Completion
          </p>
          <p className="text-xs text-[#667085]">
            These are notifications for updates on campaigns and other content.
          </p>
        </div>
        <div className="flex flex-col gap-5 mx-auto">
          <div className="flex gap-2">
            <ToggleButton
              onToggle={() => handleToggle("campaignPush")}
              isToggled={toggleStates.campaignPush}
            />
            <span className="text-grey-800  text-sm  font-medium">Push</span>
          </div>
          <div className="flex gap-2">
            <ToggleButton
              onToggle={() => handleToggle("campaignEmail")}
              isToggled={toggleStates.campaignEmail}
            />
            <span className="text-grey-800  text-sm  font-medium">Email</span>
          </div>
        </div>
      </div>
      <div className=" pt-5 pb-5 flex items-center border-b  border-b-[#E4E7EC]">
        <div className="flex flex-col w-full  max-w-[454px]">
          {" "}
          <p className="text-[18px] size font-medium text-[#344054]">
            Low Credits
          </p>
          <p className="text-xs text-[#667085]">
            These are notifications for when you’re running low on Sendeet
            credits.
          </p>
        </div>
        <div className="flex flex-col gap-5 mx-auto">
          <div className="flex gap-2">
            <ToggleButton
              onToggle={() => handleToggle("creditsPush")}
              isToggled={toggleStates.creditsPush}
            />
            <span className="text-grey-800  text-sm  font-medium">Push</span>
          </div>
          <div className="flex gap-2">
            <ToggleButton
              onToggle={() => handleToggle("creditsEmail")}
              isToggled={toggleStates.creditsEmail}
            />
            <span className="text-grey-800  text-sm  font-medium">Email</span>
          </div>
        </div>
      </div>
      <div className=" pt-5 pb-5 flex items-center  border-b  border-b-[#E4E7EC]">
        <div className="flex flex-col w-full  max-w-[454px]">
          {" "}
          <p className="text-[18px] size font-medium text-[#344054]">
            Reminders
          </p>
          <p className="text-xs text-[#667085]">
            These are notifications to remind you of updates you might have
            missed.
          </p>
        </div>
        <div className="flex flex-col gap-5 mx-auto">
          <div className="flex gap-2">
            <ToggleButton
              onToggle={() => handleToggle("remindersPush")}
              isToggled={toggleStates.remindersPush}
            />
            <span className="text-grey-800  text-sm  font-medium">Push</span>
          </div>
          <div className="flex gap-2">
            <ToggleButton
              onToggle={() => handleToggle("remindersEmail")}
              isToggled={toggleStates.remindersEmail}
            />
            <span className="text-grey-800  text-sm  font-medium">Email</span>
          </div>
        </div>
      </div>
      <div className="flex mt-16 items-center justify-end gap-3 mb-10">
          <TextButton
            text="Cancel"
            size="sm"
            className="font-semibold text-md"
          />
          <Button
            text="Save Changes"
            type="primary"
            size="sm"
            className="font-semibold text-md"
          />
        </div>
    </div>
  );
};

export default Preferences;
