import { Doughnut } from "react-chartjs-2";

// Donut Chart Component
const DonutChart: React.FC = () => {
    const data = {
      labels: ['Opt In', 'Opt Out'],
      datasets: [
        {
          data: [762, 215],
          backgroundColor: ['#4CAF50', '#FFC107'],
          hoverBackgroundColor: ['#388E3C', '#FFA000'],
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: {
          position: 'bottom' as const,
        },
      },
    };
  
    return <Doughnut data={data} options={options} />;
  };
  