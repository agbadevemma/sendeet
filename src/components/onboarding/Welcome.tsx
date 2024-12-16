"use client";
import Image from "next/image";
import React from "react";
import image1 from "../../images/onboarding/illustration.svg";
import Button from "../buttons/Button";
import Multiply from "@/icons/multiply";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setOnboarding } from "@/lib/slices/miscellaneousSlice";

type Props = {};

const Welcome = (props: Props) => {
  const onboarding = useAppSelector((state) => state.miscellaneous.onboarding);
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(setOnboarding(null))}
      className={`fixed h-screen w-full  bg-black/35  top-0 left-0 z-[100] flex items-center justify-center lg:px-0 px-4 md:px-8 ${
        onboarding === "welcome" ? "visible" : "invisible"
      }`}
    >
      {" "}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-[527px] bg-white   flex flex-col rounded-2xl transition-all duration-500 ${
          onboarding === "welcome" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full h-full bg-[#E6F7FE] rounded-t-2xl p-4 pb-8 pt-10 relative">
          <Image src={image1} alt="" className="mx-auto -mb-8" />
          <button
            onClick={() => dispatch(setOnboarding(null))}
            className="absolute top-2 rounded-lg flex items-center justify-center right-4 bg-white border border-[#E4E7EC] p-1.5 mt-1"
          >
            <Multiply color="#101928" />
          </button>
        </div>
        <div className="w-full h-full bg-white rounded-b-2xl p-4 text-center mt-5 px-8 pb-8">
          <p className="font-semibold text-[20px] "> Welcome, Tunde! 🎉</p>
          <p className="text-grey-600 text-[14.7px] mt-1">
            Take a quick tour to discover what Sendeet is all about. Don't
            worry, the tour is quick and can be skipped anytime!
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button text="No thanks" className="!px-4"    onClick={() => dispatch(setOnboarding(null))} />
            <Button type="primary" text="Give me a tour" className="!px-4"    onClick={() => dispatch(setOnboarding("step1"))} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
