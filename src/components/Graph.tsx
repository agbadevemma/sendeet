"use client";
import { ChartData } from "@/utils/data";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

type Props = {
  data: ChartData[];
};

const formatNumber = (value: number) => {
  return value.toLocaleString();
};

const Graph = ({ data }: Props) => {
  // Check whether data contains subscribers/unsubscribers or optin/optout
  const hasSubscribers = data.some((item) => item.subscribers !== undefined);
  const hasOptin = data.some((item) => item.optin !== undefined);

  const allZero = data.every((item) =>
    hasSubscribers
      ? item.subscribers === 0 && item.unsubscribers === 0
      : item.optin === 0 && item.optout === 0
  );

  return (
    <div className="mt-5 w-full">
      <ResponsiveContainer width="100%" height={214}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -24, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#00E9C4" stopOpacity={0.4} />
              <stop offset="1" stopColor="#00836E" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSecondary" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#00AAF7" stopOpacity={0.4} />
              <stop offset="1" stopColor="#00AAF7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#F2F4F7" />
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

          {hasSubscribers && (
            <>
              <Area
                type="monotone"
                dataKey="subscribers"
                stroke="#00E9C4"
                fillOpacity={1}
                fill="url(#colorPrimary)"
              />
              <Area
                type="monotone"
                dataKey="unsubscribers"
                stroke="#00AAF7"
                fillOpacity={1}
                fill="url(#colorSecondary)"
              />
            </>
          )}

          {hasOptin && (
            <>
              <Area
                type="monotone"
                dataKey="optin"
                stroke="#00E9C4"
                fillOpacity={1}
                fill="url(#colorPrimary)"
              />
              <Area
                type="monotone"
                dataKey="optout"
                stroke="#00AAF7"
                fillOpacity={1}
                fill="url(#colorSecondary)"
              />
            </>
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
