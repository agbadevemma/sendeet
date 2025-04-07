"use client";
import React from "react";
import TextButton from "../buttons/TextButton";
import Button from "../buttons/Button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setOnboarding } from "@/lib/slices/miscellaneousSlice";

type Props = {
  step: string; // Example: "Step 1 of 4"
  title: string; // Example: "Key Metrics Panel"
  arrowClassName: string;
  bodyClassName?: string;
  currentStep: "step1" | "step2" | "step3" | "step4" | "completed"; // Example: "step1"
  description: string; // Example: "Here, you can monitor key metrics..."
  onSkip?: () => void; // Callback for "Skip Tour" button
  onNext?: () => void; // Callback for "Next" button
};

const OnboardCard = ({
  step,
  currentStep,
  title,
  description,
  arrowClassName,
  bodyClassName,
  onSkip,
  onNext,
}: Props) => {
  const dispatch = useAppDispatch();
  const onboarding = useAppSelector((state) => state.miscellaneous.onboarding);
  return (
    <div>

    <div className={` ${onboarding === currentStep  ? "visible" : "invisible"}`}>
      <div
        className={`absolute z-[25]  p-5 py-8  ${bodyClassName} bg-white z-[80] shadow-2xl rounded-lg w-[20rem] transition-all ease-in-out  duration-500 ${
          onboarding === currentStep ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`absolute left-1/2 ${arrowClassName} w-3 h-3 z-[80] bg-white rotate-45`}
        ></div>
        <p className="text-[#858D9D] text-[13.5px]">{step}</p>
        <p className="mt-4 text-[15px] font-semibold">{title}</p>
        <p className="text-[12px] text-grey-800">{description}</p>
        {currentStep !== "step4" ? (
          <div className="flex items-center justify-end gap-4 mt-4 w-full z-[100]  ">
            <TextButton
              text="Skip Tour"
              onClick={() => dispatch(setOnboarding(null))}
            />
            <Button
              text="Next"
              type="primary"
              className="!px-4"
              onClick={onNext}
            />
          </div>
        ) : (
          <div className="flex items-center justify-end gap-4 mt-4 w-full z-[100]  ">
            <Button
              text="Finish"
              type="primary"
              className="!px-4"
              onClick={onNext}
            />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default OnboardCard;
