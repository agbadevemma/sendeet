"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data

interface CampaignPerformanceData {
  day: string;
  performance: number;
}

// Sample data with type annotation
const data: CampaignPerformanceData[] = [
  { day: "Mon", performance: 20 },
  { day: "Tue", performance: 40 },
  { day: "Wed", performance: 60 },
  { day: "Thu", performance: 50 },
  { day: "Fri", performance: 70 },
  { day: "Sat", performance: 80 },
  { day: "Sun", performance: 90 },
];

type Props = {
  type?: "admin" | "organization"
}
const CampaignPerformanceChart = ({ type = "organization" }: Props) => {
  const allZero = data.every((item) => item.performance === 0);
  return (
    <div className="h-[245px] w-full mt-10">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <defs>
            {type === "admin" ? <linearGradient id="paint0_linear_1385_22205" x1="337" y1="0.125" x2="337" y2="179.636" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00AAF7" />
              <stop offset="1" stop-color="#00AAF7" stop-opacity="0" />
            </linearGradient> :
             <linearGradient
              id="paint"
              x1="290"
              y1="108"
              x2="288"
              y2="-61"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00E9C4" stop-opacity="0" />
              <stop offset="0.619345" stop-color="#00836E" stop-opacity="0.1" />
            </linearGradient>}
          </defs>
          <CartesianGrid
            vertical={false}
            stroke="#F2F4F7"
            strokeDasharray="0"
          />
          <XAxis
            dataKey="day"
            tickFormatter={(day) => day}
            tickMargin={12}
            interval={0}
            tick={{ fontSize: 12, fill: "#667085" }}
            axisLine={{ stroke: allZero ? "#00AAF7" : "#F2F4F7" }}
            tickLine={false}

          />
          <YAxis
            domain={[0, 100]} // Extend range to 100
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 100]} // Explicitly define tick values
            axisLine={false}
            tick={{ fontSize: 12, fill: "#667085" }}
            tickFormatter={(value) =>
              `${value === 0 ? value.toFixed(2) : value.toFixed(1)}%`
            }
            tickMargin={10}
            tickLine={false}
          />
          {/* <Tooltip
            formatter={(value: any) =>
              `${value === 0 ? value.toFixed(2) : value.toFixed(1)}%`
            }
          /> */}
          {!allZero && (
            <Tooltip
              formatter={(value: any) =>
                `${value === 0 ? value.toFixed(2) : value.toFixed(1)}%`
              }
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
              }}
            />
          )}
          <Area
            type="monotone"
            dataKey="performance"
            stroke={type == "admin" ? "#009BE1" : "#00E9C4"}
            fillOpacity={1}
            fill="url(#paint)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CampaignPerformanceChart;
