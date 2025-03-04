"use client";
import Button from "@/components/buttons/Button";
import TextButton from "@/components/buttons/TextButton";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import Spinner from "@/components/spinner";
import ToggleButton from "@/components/ToggleButton";
import {
  useGetNotificationSettingsQuery,
  useUpdateNotificationPreferencesMutation,
} from "@/lib/slices/userApi";
import React, { useState, useEffect } from "react";

const Settings = () => {
  // const { data: settings, isLoading } =
  //   useGetNotificationSettingsQuery(undefined);
  const [updateSettings, { isLoading: updating }] =
    useUpdateNotificationPreferencesMutation();
  const [creditAmount, setCreditAmount] = useState("");

  const [toggleStates, setToggleStates] = useState({
    campaignPush: false,
    campaignEmail: false,
    creditsPush: false,
    creditsEmail: false,
    creditsSMS: false,
    remindersEmail: false,
  });

  // ✅ Sync API settings with local state when loaded
  // useEffect(() => {
  //   if (settings) {
  //     setToggleStates({
  //       campaignPush: settings.campaignCompletionPush ?? false,
  //       campaignEmail: settings.campaignCompletionEmail ?? false,
  //       creditsPush: settings.lowCreditsPush ?? false,
  //       creditsEmail: settings.lowCreditsEmail ?? false,
  //       remindersPush: settings.remindersPush ?? false,
  //       remindersEmail: settings.remindersEmail ?? false,
  //     });
  //   }
  // }, [settings]);

  const handleToggle = (key: keyof typeof toggleStates) => {
    setToggleStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ✅ Update all settings at once when "Save Changes" is clicked
  const handleSaveChanges = async () => {
    await updateSettings({
      campaignCompletionPush: toggleStates.campaignPush,
      campaignCompletionEmail: toggleStates.campaignEmail,
      lowCreditsPush: toggleStates.creditsPush,
      lowCreditsEmail: toggleStates.creditsEmail,
      remindersPush: toggleStates.creditsSMS,
      remindersEmail: toggleStates.remindersEmail,
    });
  };

  // if (isLoading||updating)
  //   return (
  //     <div className="h-screen w-full flex items-center justify-center">
  //       <Spinner />
  //     </div>
  //   );

  return (
    <div className="px-6 py-4">
      <p className="text-[18px] size font-medium text-[#344054]">
        Credit Alert Threshold
      </p>
      <p className="text-xs text-[#667085]">
        Set a low credit threshold to receive notifications when Organizationes
        are close to exhausting their balance
      </p>
      <div className="w-full mt-8">
        <InputField
          label="Credit Amount"
          labelClassName={"text-sm"}
          size="sm"
          inputType=""
          placeholder="Minimum credit balance for triggering low credit alerts"
          inputclassName="placeholder:text-xs"
          className="w-full max-w-[348px] !h-[44px] "
          name="lastName"
          value={creditAmount}
          onChange={(e) => setCreditAmount(e.target.value)}
        />
      </div>
      {/* Campaign Completion */}
      <div className="mt-6 pt-5 p flex flex-col gap-4 border-t  border-t-[#E4E7EC]">
        <div className="flex flex-col w-full ">
          <p className="text-[18px] size font-medium text-[#344054]">
            Other Alert Configurations
          </p>
          <p className="text-xs text-[#667085]">
            Receive alerts for content delivery failure, platform or system
            issues affecting message delivery or account status.
          </p>
        </div>

        <div className="flex  gap-2 mt-4">
          <Checkbox checked={true} />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-[#383E49]">
              Content Delivery Failure
            </p>
            <p className="text-sm text-[#667085]">
              Enable alerts for failed message deliveries.
            </p>
          </div>
        </div>

        <div className="flex  gap-2 mt-4">
          <Checkbox checked={true} />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-[#383E49]">
              Platform Issues
            </p>
            <p className="text-sm text-[#667085]">
              Enable notifications for system or platform issues that might
              affect Organization operations.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 pb-5 flex flex-col gap-4 border-t  border-t-[#E4E7EC]">
        <div className="flex flex-col w-full ">
          <p className="text-[18px] size font-medium text-[#344054]">
            Notification Channels
          </p>
          <p className="text-xs text-[#667085]">
            We may still send you important notifications about your account
            outside of your notification settings.
          </p>
        </div>

        <div className="flex  gap-14 mt-4">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-[#383E49]">Alerts</p>
            <p className="text-sm text-[#667085]">
              These are notifications for alerts on the system.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <ToggleRow
              label="Push"
              toggled={toggleStates.creditsPush}
              onToggle={() => handleToggle("creditsPush")}
            />
            <ToggleRow
              label="Email"
              toggled={toggleStates.creditsEmail}
              onToggle={() => handleToggle("creditsEmail")}
            />
            <ToggleRow
              label="SMS"
              toggled={toggleStates.creditsEmail}
              onToggle={() => handleToggle("creditsSMS")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Reusable Toggle Row
const ToggleRow = ({
  label,
  toggled,
  onToggle,
}: {
  label: string;
  toggled: boolean;
  onToggle: () => void;
}) => (
  <div className="flex gap-2 w-full  ">
    <ToggleButton onToggle={onToggle} isToggled={toggled} />
    <span className="text-grey-800 text-sm font-medium w-[86px] ">{label}</span>
  </div>
);

export default Settings;
