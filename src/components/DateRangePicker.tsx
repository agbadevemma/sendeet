import React, { useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Button from "./buttons/Button";
import { initialTransactions, Transaction } from "@/utils/data";
import InputField from "./InputField";
// Import custom CSS to hide the left UI
interface MyDateRangePickerProps {
  handleDateRangeChange: (startDate: Date, endDate: Date) => void;

  setIsCalenderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateRangePicker: React.FC<MyDateRangePickerProps> = ({
  handleDateRangeChange,

  setIsCalenderOpen,
}) => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [tempState, setTempState] = useState<Range[]>([...state]);

  const handleSelect = (ranges: RangeKeyDict) => {
    setTempState([ranges.selection]); // Update temporary state
  };

  const handleApply = () => {
    setState(tempState); // Update main state with selected range
    const { startDate, endDate } = tempState[0];
    if (startDate && endDate) {
      handleDateRangeChange(startDate, endDate); // Call parent callback
    }
    // setIsCalenderOpen(false);
  };

  const handleCancel = () => {
    // setTempState(state);
    // setFilteredTransactions(initialTransactions);
    setIsCalenderOpen(false);
    // Reset temporary state to the original selection
  };
  const formatDate = (date: Date | undefined) => {
    if (!date) {
      return "No date available"; // You can customize this message
    }
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short", // Abbreviated month name
      day: "numeric", // Numeric day
    }).format(date);
  };

  return (
    <div className="bg-white !rounded-lg shadow-xl">
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        months={2}
        direction="horizontal"
        moveRangeOnFirstSelection={false}
        ranges={tempState} // Use tempState to manage the UI selection
        showDateDisplay={false} // hide date display
        className=" custom-date-range rounded-t-lg" // Add custom class
      />
      <div className="mt-0 flex gap-4 pt-4  w-full px-2 pb-4 items-center justify-between border-t bord">
        <div className=" flex items-center gap-4">
          <InputField
            inputType="text"
            placeholder=""
            label=""
            value={formatDate(state[0].startDate)}
            inputclassName="!text-xs !px-0 whitespace-nowrap"
            className="!py-2 !px-2 !w-24 "
          />
          <span className="text-grey-500">–</span>
          <InputField
            inputType="text"
            placeholder=""
            label=""
            inputclassName="!text-xs"
            value={formatDate(state[0].endDate)}
            className="!py-2 !px-2 !w-24 whitespace-nowrap"
          />
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <Button onClick={handleApply} className="!px-4 " text="Apply" />
          <Button
            onClick={handleCancel}
            className="!px-4"
            type="primary"
            text="Cancel"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
