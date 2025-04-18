import React, { useEffect, useRef } from "react";
import Image from "next/image";
import arrowdown from "../images/icons/chevron-down.svg";
import check from "../images/icons/check.svg";

interface SelectFieldProps {
  label?: string;
  placeholder?: string;
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
  options?: Array<{ value: string; label: string }>;
  onSelect: (value: string) => void;
  value?: string;
  error?: boolean;
  errorText?: string;
  name: string;
  icon?: React.ReactNode;
  labelClassName?: string;
  colored?: boolean;
  optionLabelClassName?: string;
  selectedOptionclassName?: string;
  fieldclassName?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label = "Label",
  placeholder = "Select an option",
  className = "",
  colored = false,
  isOpen,
  onToggle,
  options = [],
  onSelect,
  value,
  icon,
  error = false,
  errorText = "",
  labelClassName,
  optionLabelClassName,
  selectedOptionclassName,
  fieldclassName,
  name,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        onToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (optionValue: string) => {
    onSelect(optionValue);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="flex flex-col gap-1.5">
        <label
          className={`text-[#344054] text-sm lg:text-md  whitespace-nowrap ${labelClassName}`}
        >
          {label}
        </label>
        <div
          className={`flex justify-between items-center gap-2 rounded-lg px-2.5 py-2.5 border ${error ? "border-[#D42620]" : "border-grey-100"
            } ${isOpen
              ? "shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_#E6F7FE]  border-[#8AD8FB]"
              : "shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]  "
            } cursor-pointer ${fieldclassName} `}
          onClick={onToggle}
        >
          <div
            className={`text-sm w-full flex gap-1.5  items-center whitespace-nowrap ${selectedOption ? "text-[#344054]" : "text-[#B9BDC7]"
              }`}
          >
            {icon && <span>{icon}</span>}
            {!colored && (
              <span className={`${selectedOptionclassName} text-sm`}>{selectedOption ? selectedOption.label : placeholder}</span>
            )}
            {colored && (
              <span>
                {selectedOption ? (
                  <div className="bg-[#ECFDF3]  text-success-700 px-2 py-0.5 gap-1 text-sm font-medium flex items-center rounded-lg ">
                    {" "}
                    <span className="h-2 w-2 rounded-full  text-sm bg-[#12B76A]"></span>{" "}
                    {selectedOption.label}
                  </div>
                ) : (
                  placeholder
                )}
              </span>
            )}
          </div>
          <Image
            src={arrowdown}
            alt="Dropdown arrow"
            className={`transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""
              }`}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className={`absolute ${className} z-50 w-full border mt-1 max-h-80 overflow-y-auto p-1 rounded-lg border-[#F2F4F7] shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] bg-white`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-[14px] py-[10px] text-md  flex  ${option.value === value ? "bg-gray-100" : ""
                }   justify-between items-center hover:bg-[#F9FAFB] hover:text-primary-600 cursor-pointer text-[#344054] `}
              onClick={() => handleSelect(option.value)}
            >
              <span className={`${optionLabelClassName} text-sm`}>{option.label}</span>
              <span>
                {option.value === value ? <Image src={check} alt="icon" /> : ""}
              </span>
            </div>
          ))}
        </div>
      )}
      {error && errorText && (
        <p className=" text-[#D42620] text-xs">{errorText}</p>
      )}
    </div>
  );
};

export default SelectField;
