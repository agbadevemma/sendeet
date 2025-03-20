"use client";
import Button from "@/components/buttons/Button";
import TextButton from "@/components/buttons/TextButton";
import Spinner from "@/components/spinner";
import ToggleButton from "@/components/ToggleButton";
import {
  useGetNotificationSettingsQuery,
  useUpdateNotificationPreferencesMutation,
} from "@/lib/slices/userApi";
import React, { useState, useEffect } from "react";

const Preferences = () => {
  const { data: settings, isLoading } =
    useGetNotificationSettingsQuery(undefined);
  const [updateSettings,{isLoading:updating}] = useUpdateNotificationPreferencesMutation();

  const [toggleStates, setToggleStates] = useState({
    campaignPush: false,
    campaignEmail: false,
    creditsPush: false,
    creditsEmail: false,
    remindersPush: false,
    remindersEmail: false,
  });

  // ✅ Sync API settings with local state when loaded
  useEffect(() => {
    if (settings) {
      setToggleStates({
        campaignPush: settings.campaignCompletionPush ?? false,
        campaignEmail: settings.campaignCompletionEmail ?? false,
        creditsPush: settings.lowCreditsPush ?? false,
        creditsEmail: settings.lowCreditsEmail ?? false,
        remindersPush: settings.remindersPush ?? false,
        remindersEmail: settings.remindersEmail ?? false,
      });
    }
  }, [settings]);

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
      remindersPush: toggleStates.remindersPush,
      remindersEmail: toggleStates.remindersEmail,
    });
  };

  if (isLoading||updating)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <p className="text-[18px] size font-medium">Notification Settings</p>
      <p className="text-xs md:mt-0 mt-1 text-[#667085]">
        Select when and how you’ll be notified
      </p>

      {/* Campaign Completion */}
      <div className="mt-6 pt-5 pb-5 flex items-center border-t border-b border-t-[#E4E7EC]">
        <div className="flex flex-col w-full max-w-[454px]">
          <p className="text-[15px] md:text-[18px] size font-medium text-[#344054]">
            Campaign Completion
          </p>
          <p className="text-xs md:mt-0 mt-1 text-[#667085]">
            These are notifications for updates on campaigns and other content.
          </p>
        </div>
        <div className="flex flex-col gap-5 mx-auto">
          <ToggleRow
            label="Push"
            toggled={toggleStates.campaignPush}
            onToggle={() => handleToggle("campaignPush")}
          />
          <ToggleRow
            label="Email"
            toggled={toggleStates.campaignEmail}
            onToggle={() => handleToggle("campaignEmail")}
          />
        </div>
      </div>

      {/* Low Credits */}
      <div className="pt-5 pb-5 flex items-center border-b border-b-[#E4E7EC]">
        <div className="flex flex-col w-full max-w-[454px]">
          <p className="text-[15px] md:text-[18px] size font-medium text-[#344054]">
            Low Credits
          </p>
          <p className="text-xs md:mt-0 mt-1 text-[#667085]">
            These are notifications for when you’re running low on Sendeet
            credits.
          </p>
        </div>
        <div className="flex flex-col gap-5 mx-auto">
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
        </div>
      </div>

      {/* Reminders */}
      <div className="pt-5 pb-5 flex items-center border-b border-b-[#E4E7EC]">
        <div className="flex flex-col w-full max-w-[454px]">
          <p className="text-[15px] md:text-[18px] size font-medium text-[#344054]">
            Reminders
          </p>
          <p className="text-xs md:mt-0 mt-1 text-[#667085]">
            These are notifications to remind you of updates you might have
            missed.
          </p>
        </div>
        <div className="flex flex-col gap-5 mx-auto">
          <ToggleRow
            label="Push"
            toggled={toggleStates.remindersPush}
            onToggle={() => handleToggle("remindersPush")}
          />
          <ToggleRow
            label="Email"
            toggled={toggleStates.remindersEmail}
            onToggle={() => handleToggle("remindersEmail")}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex mt-16 items-center justify-end gap-3 mb-10">
        <TextButton text="Cancel" size="sm" className="font-semibold text-md" />
        <Button
          text="Save Changes"
          type="primary"
          size="sm"
          className="font-semibold text-md"
          onClick={handleSaveChanges} // ✅ Save changes
        />
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
  <div className="flex gap-2">
    <ToggleButton onToggle={onToggle} isToggled={toggled} />
    <span className="text-grey-800 text-sm font-medium">{label}</span>
  </div>
);

export default Preferences;
