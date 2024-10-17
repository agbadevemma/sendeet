import React from "react";
import Image from "next/image";

type Props = {
  id?: string;
  name?: string;
  checked?: boolean;
  indeterminate?: boolean; // Add indeterminate prop
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
};

const Checkbox = ({
  id = "",
  name,
  checked = false, // Default to false
  indeterminate = false, // Default to false (not indeterminate)
  onChange,
  onBlur,
  className,
}: Props) => {
  return (
    <div className={`${className}`}>
      <div className="">
        <input
          type="checkbox"
          id={id}
          name={name}
          // Use ref to directly manipulate DOM for indeterminate state
          checked={checked} // Controlled checkbox state
          onChange={onChange}
          onBlur={onBlur}
          className={`w-4 h-4 peer cursor-pointer border form-checkbox focus:ring-0 ${
            checked || indeterminate ? "border-blue-500" : "border-gray-300"
          } rounded-[4px]`}
        />
        
      </div>
    </div>
  );
};

export default Checkbox;
