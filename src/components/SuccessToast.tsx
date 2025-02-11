import CheckCircle from "@/icons/check-circle";
import React from "react"; // Assuming you're using this icon or any other
// Define the types for the props
interface SuccessToastProps {
  message: string;
  details?: string;
  middleText?: string;
}

const SuccessToast: React.FC<SuccessToastProps> = ({
  message,
  details,
  middleText,
}) => {
  return (
    <div className="flex items-start justify-between w-full py-2 px-4">
      <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-success-50 border border-success-500">
        <CheckCircle color="#0F973D" />
      </div>
      <div className="gap-1 flex flex-col mr-4 w-full">
        <p className="!text-[14px] !font-medium text-[#101828] w-full">{message}</p>
        {middleText && (
          <p className="!text-[14px] !font-medium text-primary-500">
            {middleText}
          </p>
        )}
        <p className="!text-[14px] !font-normal text-[#667085]">{details}</p>
      </div>
    </div>
  );
};

export default SuccessToast;
