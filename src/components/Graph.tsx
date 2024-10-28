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
  { name: "Jan", subscribers: 4000, unsubscribers: 2400, amt: 2400 },
  { name: "Feb", subscribers: 3000, unsubscribers: 1398, amt: 2210 },
  { name: "Mar", subscribers: 2000, unsubscribers: 9800, amt: 2290 },
  { name: "Apr", subscribers: 2780, unsubscribers: 3908, amt: 2000 },
  { name: "May", subscribers: 1890, unsubscribers: 4800, amt: 2181 },
  { name: "Jun", subscribers: 2390, unsubscribers: 3800, amt: 2500 },
  { name: "Jul", subscribers: 3490, unsubscribers: 4300, amt: 2100 },
  { name: "Aug", subscribers: 4000, unsubscribers: 2400, amt: 2400 },
  { name: "Sep", subscribers: 3000, unsubscribers: 1398, amt: 2210 },
  { name: "Oct", subscribers: 2000, unsubscribers: 9800, amt: 2290 },
  { name: "Nov", subscribers: 2780, unsubscribers: 3908, amt: 2000 },
  { name: "Dec", subscribers: 1890, unsubscribers: 4800, amt: 2181 },
];

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
            axisLine={{ stroke: allZero ? "#00AAF7" : "#F2F4F7" }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fontSize: 12, fill: "#667085" }}
            tickMargin={10}
            tickFormatter={formatNumber}
            tickLine={false}
          />
          {!allZero && (
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
              }}
            />
          )}

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
