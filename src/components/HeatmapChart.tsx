"use client";
import React from "react";

import { activityData } from "@/utils/data";

const HeatmapChart: React.FC = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];

  const highestValue = activityData.reduce(
    (max, item) => Math.max(max, item.count),
    0
  );

  const getIntensity = (count: number): number => {
    return highestValue !== 0 ? count / highestValue : 0;
  };

  const colorCodes: Array<string> = [
    "#E6F7FE",
    "#B0E5FD",
    "#54C6FA",
    "#00AAF7",
    "#0099DE",
    "#0088C6",
    "#006694",
    "#004C6F",
    "#003B56",
    "#002A42",
  ];
  const getColorFromIntensity = (intensity: number): string => {
    const colorIndex = Math.min(
      Math.floor(intensity * colorCodes.length),
      colorCodes.length - 1
    );
    return colorCodes[0];
  };

  return (
    <div className="w-full flex h-full gap-4">
      <div className="flex flex-col">
        {days.map((day) => (
          <div
            key={day}
            className="h-[40px] flex items-center justify-center text-[#667085] text-xs"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="grid grid-cols-[repeat(24,1fr)] w-full">
          {/* Render rows for each day */}
          {days.map((day) => (
            <React.Fragment key={day}>
              {hours.map((hour) => {
                const dataPoint = activityData.find(
                  (item) => item.day === day && item.hour === hour
                );
                const intensity = getIntensity(dataPoint?.count || 0);
                const color = getColorFromIntensity(intensity);

                return (
                  <div
                    key={`${day}-${hour}`}
                    title={`${
                      dataPoint?.count || 0
                    } activities on ${day} at ${hour}`}
                    className="h-[40px] w-full"
                  >
                    <div
                      className="w-full h-full border border-white"
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center w-full justify-between mt-8">
          {/* Render hours without AM/PM */}
          {hours.map((hour, idx) => {
            const hourWithoutAmPm = hour.replace(/AM|PM/gi, "").trim(); // Remove AM/PM
            return (
              <div key={idx} className="text-center text-[#667085] text-xs">
                {hourWithoutAmPm}
              </div>
            );
          })}
        </div>
        <div className="flex items-center mt-6">
          <div className="w-full h-px bg-[#F0F1F3] mr-2"></div>
          <span className=" text-[#667085] text-xs">AM</span>
          <div className="w-full h-px bg-[#F0F1F3] mx-2"></div>{" "}
          <div className="w-full h-px bg-[#F0F1F3] "></div>
          <span className="mx-1 text-[#667085] text-xs">PM</span>
          <div className="w-full h-px bg-[#F0F1F3] ml-2"></div>
        </div>
        <div className="w-full  flex flex-row mt-10">
          {colorCodes.map((item, index) => (
           
              <div
                key={index}
                className={`w-full h-[16px]`}
                style={{backgroundColor:item}}
              ></div>
            
          ))}
        </div>
        <div className="w-full flex items-center justify-between mt-2">
          <p className=" text-xs text-[#667085]">Lowest Engagement</p>
          <p className=" text-xs text-[#667085]">Highest Engagement</p>
        </div>
      </div>
    </div>
  );
};

export default HeatmapChart;
