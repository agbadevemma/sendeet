import React from "react";
import image1 from "../../images/onboarding/illustration2.svg";
import Button from "../buttons/Button";
import { setOnboarding } from "@/lib/slices/miscellaneousSlice";
import Multiply from "@/icons/multiply";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

type Props = {};

const CompletedTour = (props: Props) => {
  const onboarding = useAppSelector((state) => state.miscellaneous.onboarding);
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(setOnboarding(""))}
      className={`fixed h-screen w-full  bg-black/35  top-0 left-0 z-[100] flex items-center justify-center lg:px-0 px-4 md:px-8 ${
        onboarding === "completed" ? "visible" : "invisible"
      }`}
    >
      {" "}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-[527px] bg-white   flex flex-col rounded-2xl transition-all duration-500 ${
          onboarding === "completed" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full h-full bg-[#E6F7FE] rounded-t-2xl p-4 pb-8 pt-10 relative">
          <Image src={image1} alt="" className="mx-auto -mb-8" />
          <button
            onClick={() => dispatch(setOnboarding(""))}
            className="absolute top-2 rounded-lg flex items-center justify-center right-4 bg-white border border-[#E4E7EC] p-1.5 mt-1"
          >
            <Multiply color="#101928" />
          </button>
        </div>
        <div className="w-full h-full bg-white rounded-b-2xl p-4 text-center mt-5 px-8 pb-8">
          <p className="font-semibold text-[20px] "> Tour Completed! 🎉</p>
          <p className="text-grey-600 text-[14.7px] mt-1">
            You're all set to navigate the dashboard like a pro. If you ever
            need help, you can revisit this tour anytime from the Help Center.
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              text="Restart Tour"
              className="!px-4"
              onClick={() => dispatch(setOnboarding("step1"))}
            />
            <Button
              type="primary"
              text="Start Exploring"
              className="!px-4"
              onClick={() => dispatch(setOnboarding(""))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompletedTour;
