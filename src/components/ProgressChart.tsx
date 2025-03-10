import React from "react";
import Chart from "react-apexcharts";

interface ProgressChartProps {
  innerValue: number;
  outerValue: number;
  maxValue: number;

}

const ProgressChart: React.FC<ProgressChartProps> = ({
  innerValue,
  outerValue,
  maxValue,

}) => {
  const innerPercentage = (innerValue / maxValue) * 100;
  const outerPercentage = (outerValue / maxValue) * 100;

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      toolbar: {
        show: false, // Hide chart menu
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "45%", // Adjust size to leave space for text
        },
        track: {
          background: "#EFEFEF",
          strokeWidth: "100%",
        },
        dataLabels: {
          show: false,
          name: {
            offsetY: -5,
            color: "#555",
            fontSize: "14px",
          },
          value: {
            color: "#111",
            fontSize: "22px",
            fontWeight: "bold",
          },
        },
      },
    },
    fill: {
      colors: ["#54C6FA", "#B0E5FD"], // Custom colors
    },
    stroke: {
      lineCap: "round",
    },
    grid: {
      padding: { top: -30, right: -40, bottom: -20, left: -40 }, // 🔹 Remove chart padding
    },
    labels: ["Contacts", "Other"],
    tooltip: {
      enabled: false, // Disable hover tooltips
    },
    states: {
      hover: {
        filter: {
          type: "none", // Disable hover effects
        },
      },
      active: {
        filter: {
          type: "none", // Disable click effects
        },
      },
    },
  };

  const series = [outerPercentage, innerPercentage];

  return (
    <div className="relative flex justify-center items-center w-full h-[350px]">
      <Chart
        options={options}
        series={series}
        type="radialBar"
        width="100%"
        height="100%"
      />

      <div className="absolute m-auto  text-gray-700 flex flex-col items-center">
        <span className="text-grey-500 text-sm">Contacts</span>
        <span className="font-medium text-2xl"> {maxValue}</span>
      </div>
    </div>
  );
};

export default ProgressChart;
