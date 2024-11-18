import Multiply from "@/icons/multiply";
import PencilEdit from "@/icons/pencil-edit";
import React, { useState } from "react";
import TextButton from "./buttons/TextButton";
import Button from "./buttons/Button";
import SelectField from "./SelectField";
import UserGroup from "@/icons/user-group";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
type FieldState = {
  isOpen: boolean;
  selectedValue: string | undefined;
};
const AnalyticsModal = ({ setIsOpen }: Props) => {
  // Independent states for each select field
  // Independent states for each select field with the corrected type
  const [fieldsState, setFieldsState] = useState<FieldState[]>([
    { isOpen: false, selectedValue: undefined },
    { isOpen: false, selectedValue: undefined },
    { isOpen: false, selectedValue: undefined },
    { isOpen: false, selectedValue: undefined },
  ]);

  // Options for the select field
  const options: Array<{ value: string; label: string }> = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  // Function to toggle a specific dropdown
  const handleToggle = (index: number): void => {
    setFieldsState((prev) =>
      prev.map((field, i) =>
        i === index ? { ...field, isOpen: !field.isOpen } : field
      )
    );
  };

  // Function to handle selection for a specific field
  const handleSelect = (index: number, value: string): void => {
    setFieldsState((prev) =>
      prev.map((field, i) =>
        i === index ? { ...field, selectedValue: value, isOpen: false } : field
      )
    );
  };
  return (
    <div>
      <div className="w-full h-screen bg-black/50 fixed top-0 left-0 z-50 flex items-center justify-center px-4 overflow-auto py-10 pt-64 md:pt-0 ">
        <div className="w-full p-6 bg-white max-w-[1021px] h-fit  border border-grey-100 rounded-[12px] ">
          <div className="w-full flex gap-4 items-start justify-between">
            <div className="flex gap-4">
              <div className="p-3 flex items-center justify-center h-12 w-12 rounded-lg shadow-[0px_1px_1px_0px_rgba(16,24,40,0.10)] border border-grey-50">
                <PencilEdit color="#383E49" height={24} width={24} />
              </div>
              <div className="flex flex-col">
                <p className="lg:text-2xl font-semibold">
                  Customize your metrics
                </p>
                <p className="text-grey-600 text-md">
                  Select the metrics that matter most to your analysis.{" "}
                </p>
              </div>
            </div>
            <div
              onClick={() => setIsOpen(false)}
              className="p-1 flex items-center justify-center h-8 w-8 rounded-lg  border border-grey-200"
            >
              <Multiply color="#383E49" height={16} width={16} />
            </div>
          </div>
          <div className="w-full grid sm:grid-cols-2 xl:grid-cols-4 lg:gap-5 my-6">
            {["Total Opens", "Opt Ins", "Opt Outs", "Avg. Engagement"].map(
              (placeholder, index) => (
                <div
                  key={index}
                  className="border border-grey-200 rounded-lg p-2 gap-5 flex flex-col w-full"
                >
                  <SelectField
                    icon={<UserGroup color="#858D9D" />}
                    placeholder={placeholder}
                    onToggle={() => handleToggle(index)}
                    options={options}
                    onSelect={(value) => handleSelect(index, value)}
                    value={fieldsState[index].selectedValue}
                    isOpen={fieldsState[index].isOpen}
                    className="w-full"
                    name=""
                    label=""
                  />
                  <p className="text-[#344054] text-xl font-semibold mt-4">
                    1,943,219
                  </p>
                </div>
              )
            )}
          </div>
        <div className="w-full flex justify-end items-center gap-4">
          <TextButton text="Cancel" onClick={() => setIsOpen(false)} />
          <Button
            icon_style="txt"
            type="primary"
            text="Save Changes"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="!py-2 !px-4"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsModal;
