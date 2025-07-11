"use client"
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ProjectActivity() {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Projects Created',
        data: [12, 19, 3, 5, 2, 3, 15],
        backgroundColor: 'rgba(23, 182, 178, 0.8)',
      },
      {
        label: 'Projects Completed',
        data: [8, 15, 2, 4, 1, 2, 10],
        backgroundColor: 'rgba(23, 182, 178, 0.4)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'var(--border-color)',
        },
      },
      x: {
        grid: {
          color: 'var(--border-color)',
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
}