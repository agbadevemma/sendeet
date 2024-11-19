import React from "react";
import { ResponsiveContainer, Surface } from "recharts";

type HeatmapData = {
  day: string;
  hours: number[]; // Engagement values for each hour (0-23)
};

const heatmapData: HeatmapData[] = [
  {
    day: "Monday",
    hours: [
      0, 1, 2, 3, 2, 1, 0, 3, 5, 7, 8, 9, 5, 4, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0,
    ],
  },
  {
    day: "Tuesday",
    hours: [
      1, 3, 2, 5, 7, 9, 8, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 2, 1, 4, 6, 7, 8, 3,
    ],
  },
  {
    day: "Wednesday",
    hours: [
      0, 1, 1, 1, 2, 2, 3, 5, 6, 7, 6, 5, 4, 3, 3, 2, 1, 0, 0, 1, 2, 3, 4, 3,
    ],
  },
  {
    day: "Thursday",
    hours: [
      0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 0,
    ],
  },
  {
    day: "Friday",
    hours: [
      1, 1, 2, 3, 3, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0,
    ],
  },
  {
    day: "Saturday",
    hours: [
      0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 1, 2, 3, 4, 5, 6, 7,
    ],
  },
  {
    day: "Sunday",
    hours: [
      3, 3, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 2, 1, 0,
    ],
  },
];

const Heatmap = () => {
  const cellSize = 20;
  const flattenedData = heatmapData.flatMap((row, rowIndex) =>
    row.hours.map((value, colIndex) => ({
      day: row.day,
      hour: colIndex,
      engagement: value,
    }))
  );
  const hourLabels = [
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

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={heatmapData.length * cellSize}>
        <Surface height={heatmapData.length * cellSize} width={500}>
          {heatmapData.map((row, rowIndex) =>
            row.hours.map((value, colIndex) => (
              <rect
                key={`${rowIndex}-${colIndex}`}
                x={colIndex * 20}
                y={rowIndex * 20}
                width={20}
                height={20}
                fill={`rgba(0, 0, 255, ${value / 10})`} // Change color based on value
              />
            ))
          )}
          
           {heatmapData.map((dayData, rowIndex) => (
            <text
              key={`label-${dayData.day}`}
              x={-10}
              y={rowIndex * cellSize + cellSize / 1.5}
              textAnchor="end"
              fontSize="14"
              fill="#000"
            >
              {dayData.day}
            </text>
          ))}
        </Surface>
      </ResponsiveContainer>
    </div>
  );
};

export default Heatmap;
