import React from "react";
import ReactApexChart from "react-apexcharts";

const AudienceMetricsChart = () => {
  const options = {
    chart: {
      type: "donut" as const,
    },
    labels: ["Opt In", "Opt Out"],
    colors: ["#4D9AF0", "#E8F0FE"], // Custom colors to match the visual style
    title: {
      text: "Audience Metrics",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Contacts",
              formatter: () => "1045", // Total contacts
            },
          },
        },
      },
    },
  };

  const series = [762, 215]; // Opt In and Opt Out values

  return (
    <div className="p-4">
      <ReactApexChart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default AudienceMetricsChart;
