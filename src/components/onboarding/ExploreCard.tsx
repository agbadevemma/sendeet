"use client";
import React from "react";
import TextButton from "../buttons/TextButton";
import Button from "../buttons/Button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setExplore, setOnboarding } from "@/lib/slices/miscellaneousSlice";
import Link from "next/link";

type Props = {
  title: string; // Example: "Key Metrics Panel"
  arrowClassName: string;
  bodyClassName?: string;
  currentStep:
    | "credit"
    | "startcampaign"
    | "singlecontact"
    | "bulkcontact"
    | "sendcampaign"; // Example: "step1"
  href: string;
  description: string; // Example: "Here, you can monitor key metrics..."
  onSkip?: () => void; // Callback for "Skip Tour" button
  onNext?: () => void; // Callback for "Next" button
};

const ExploreCard = ({
  currentStep,
  title,
  description,
  href,
  arrowClassName,
  bodyClassName,
  onSkip,
  onNext,
}: Props) => {
  const dispatch = useAppDispatch();
  const explore = useAppSelector((state) => state.miscellaneous.explore);
  return (
    <div className={` ${explore === currentStep ? "visible" : "invisible"}`}>
      <div
        className={`absolute  p-5 py-6  ${bodyClassName} bg-white z-[100] shadow-3xl rounded-lg w-[20rem] transition-all ease-in-out  duration-500 ${
          explore === currentStep ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`absolute left-1/2 ${arrowClassName} w-3 h-3 bg-white rotate-45`}
        ></div>

        <p className="text-[15px] font-semibold">{title}</p>
        <p className="text-[12px] text-grey-800">{description}</p>

        <div className="flex items-center justify-end gap-4 mt-4 w-full   ">
          <TextButton
            text="Not Now"
            type="primary"
            onClick={() => dispatch(setExplore(null))}
          />
          <Link href={href}>
            <Button
              text="Try It"
              type="primary"
              className="!px-4"
              onClick={onNext}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
