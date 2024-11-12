import React, { useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Button from "./buttons/Button";
// Import custom CSS to hide the left UI

const DateRangePicker: React.FC = () => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [tempState, setTempState] = useState<Range[]>([...state]);
  const handleSelect = (ranges: RangeKeyDict) => {
    setTempState([ranges.selection]);
  };

  const handleApply = () => {
    setState(tempState);
  };

  const handleCancel = () => {
    setTempState(state); // Reset to the original selection
  };
  return (
    <div className="bg-white !rounded-lg shadow-xl">
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={tempState} // Use tempState to manage the UI selection
        showDateDisplay={false} // hide date display
        className=" custom-date-range rounded-t-lg" // Add custom class
      />
      <div className="mt-0 flex gap-4 pt-4  w-full px-2 pb-2 justify-end border-t bord">
        <Button
          onClick={handleApply}
          className="px-4"
          text="Apply"
        />
        <Button
          onClick={handleCancel}
          className="px-4"
          type="primary"
          text="Cancel"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
