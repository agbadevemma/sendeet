"use client";
import React from "react";
import { Area } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
} from "recharts";

type Props = {};
interface ChartData {
  name: string;
  subscribers: number;
  unsubscribers: number;
  amt: number;
}
const data: ChartData[] = [
  { name: "Jan", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Feb", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Mar", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Apr", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "May", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Jun", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Jul", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Aug", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Sep", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Oct", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Nov", subscribers: 0, unsubscribers: 0, amt: 0 },
  { name: "Dec", subscribers: 0, unsubscribers: 0, amt: 0 },
];

// const data: ChartData[] = [
//     { name: "Jan", subscribers: 3000, unsubscribers: 1500, amt: 4500 },
//     { name: "Feb", subscribers: 2000, unsubscribers: 1000, amt: 3000 },
//     { name: "Mar", subscribers: 4000, unsubscribers: 2000, amt: 6000 },
//     { name: "Apr", subscribers: 2500, unsubscribers: 1200, amt: 3700 },
//     { name: "May", subscribers: 3500, unsubscribers: 1800, amt: 5300 },
//     { name: "Jun", subscribers: 4500, unsubscribers: 2000, amt: 6500 },
//     { name: "Jul", subscribers: 3800, unsubscribers: 1900, amt: 5700 },
//     { name: "Aug", subscribers: 3200, unsubscribers: 1600, amt: 4800 },
//     { name: "Sep", subscribers: 2700, unsubscribers: 1400, amt: 4100 },
//     { name: "Oct", subscribers: 4100, unsubscribers: 2100, amt: 6200 },
//     { name: "Nov", subscribers: 3300, unsubscribers: 1700, amt: 5000 },
//     { name: "Dec", subscribers: 5000, unsubscribers: 2200, amt: 7200 },
//   ];

const formatNumber = (value: number) => {
  return value.toLocaleString();
};
const Graph = (props: Props) => {
  const allZero = data.every(
    (item) => item.subscribers === 0 && item.unsubscribers === 0
  );
  return (
    <div className="mt-5">
      <ResponsiveContainer width="100%" height={214}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -9, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id="colorsubscribers"
              x1="290"
              y1="108"
              x2="288"
              y2="-61"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9C4" stop-opacity="0" />
              <stop offset="0.619345" stop-color="#00836E" stop-opacity="0.1" />
            </linearGradient>
            <linearGradient
              id="colorunsubscribers"
              x1="320.5"
              y1="0.125"
              x2="320.5"
              y2="179.636"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00AAF7" />
              <stop offset="1" stop-color="#00AAF7" stop-opacity="0" />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            stroke="#F2F4F7"
            strokeDasharray="0"
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#667085" }}
            axisLine={{ stroke: allZero ? "#00AAF7" : "#8884d8" }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fontSize: 12, fill: "#667085" }}
            tickMargin={10}
            tickFormatter={formatNumber}
            tickLine={false}
          />
          {!allZero && <Tooltip />}

          <Area
            type="monotone"
            dataKey="unsubscribers"
            stroke="#00E9C4"
            fillOpacity={1}
            fill="url(#colorsubscribers)"
          />
          <Area
            type="monotone"
            dataKey="subscribers"
            stroke="#00AAF7"
            fillOpacity={1}
            fill="url(#colorunsubscribers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
