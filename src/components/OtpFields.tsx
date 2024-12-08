import React, { useState, useRef, useEffect } from "react";

type Props = {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
};

const OtpFields: React.FC<Props> = ({otp, setOtp}) => {
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const [isResendActive, setIsResendActive] = useState<boolean>(false);
  const [resendTimer, setResendTimer] = useState<number>(60);
  const inputRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRef.current[activeOTPIndex]?.focus();
  }, [activeOTPIndex]);
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .trim()
      .slice(0, otp.length);

    const newOtp = [...otp];
    for (let i = 0; i < pasteData.length; i++) {
      newOtp[i] = pasteData[i];
    }

    setOtp(newOtp);
    setActiveOTPIndex(
      pasteData.length < otp.length ? pasteData.length : otp.length - 1
    );
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        setActiveOTPIndex(index + 1);
      }
    }
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target as HTMLInputElement;

    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];

      if (otp[index]) {
        // Clear the current field if it has a value
        newOtp[index] = "";
        setOtp(newOtp);
        setActiveOTPIndex(index - 1);
      } else if (index > 0) {
        // Move focus to the previous input field
        setActiveOTPIndex(index - 1);
      }
    } else {
      const newOtp = [...otp];
      newOtp[index] = value;
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleOnClick = (index: number) => {
    setActiveOTPIndex(index);
  };

  return (
    <div className="flex items-center justify-center w-full">
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRef.current[index] = el; // No return value here, ensuring void return type
          }}
          pattern="[0-9]*"
          //   placeholder={activeOTPIndex === index ? "8" : "-"}
          type="text"
          inputMode="numeric"
          className={`max-w-[80px] lg:max-w-[80px] h-[80px] shadow-xs p-2 border spin-button-none bg-transparent outline-none text-center font-semibold text-[38px] font-manrope border-primary-300 border-solid transition mx-3 rounded-lg focus:ring-primary-50  focus:ring-4  text-primary-600 `}
          value={value}
          maxLength={1}
          onChange={(e) => handleOnChange(e, index)}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
          onClick={() => handleOnClick(index)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export default OtpFields;
