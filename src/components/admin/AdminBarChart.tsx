  "use client";
  import React from "react";
  import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
  } from "recharts";

  // Define the type for your data
  interface ChartData {
    name: string;
    Purchase: number;
    Used: number;
  }

  const data: ChartData[] = [
    { name: "Jan", Purchase: 0, Used: 0 },
    { name: "Feb", Purchase: 0, Used: 0 },
    { name: "Mar", Purchase: 0, Used: 0 },
    { name: "Apr", Purchase: 0, Used: 0 },
    { name: "May", Purchase: 0, Used: 0 },
    { name: "Jun", Purchase: 0, Used: 0 },
    { name: "Jul", Purchase: 0, Used: 0 },
    { name: "Aug", Purchase: 0, Used: 0 },
    { name: "Sep", Purchase: 0, Used: 0 },
    { name: "Oct", Purchase: 0, Used: 0 },
    { name: "Nov", Purchase: 0, Used: 0 },
    { name: "Dec", Purchase: 0, Used: 0 },
];


  const formatNumber = (value: number) => {
    return value.toLocaleString();
  };

  const AdminBarChart: React.FC = () => {
    const allZero = data.every((item) => item.Purchase === 0 && item.Used === 0);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -9, bottom: 0 }}
          
          barGap={0}
          barSize={20}
        >
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
          <CartesianGrid vertical={false} stroke="#F2F4F7" strokeDasharray="0" />
          {!allZero && (
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
              }}
            />
          )}

          <Bar dataKey="Purchase" fill="#0079AF" radius={[6, 6, 0, 0]}  />
          <Bar dataKey="Used" fill="#B0E5FD" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  export default AdminBarChart;
