// NestedDonutChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const NestedDonutChart: React.FC = () => {
  const totalContacts = 1045; // Total contacts in the center

  // Data for the nested donut chart
  const data = {
    labels: ['Opt In', 'Opt Out'], // Labels for outer ring
    datasets: [
      // Outer ring
      {
        data: [762, 215], // Opt In and Opt Out data
        backgroundColor: ['#4fa7f7', '#d4d8de'], // Colors for the outer ring
        hoverBackgroundColor: ['#4fa7f7', '#d4d8de'], // Optional hover effect
        borderWidth: 0, // Remove borders for clean look
      },
      // Inner ring
      {
        data: [totalContacts], // Total Contacts value
        backgroundColor: ['#c5ebfd'], // Single color for inner ring
        hoverBackgroundColor: ['#c5ebfd'],
        borderWidth: 0,
      },
    ],
  };

  // Options for the chart
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '80%', // Adjust cutout for donut look
    plugins: {
      tooltip: {
        enabled: true, // Enable hover tooltips
      },
      legend: {
        display: false, // Hide legend to match the design
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
      <Doughnut data={data} options={options} />
      {/* Centered Inner Text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Contacts</p>
        <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{totalContacts}</p>
      </div>
    </div>
  );
};

export default NestedDonutChart;
