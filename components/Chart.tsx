
"use client"
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const Chart = () => {
  return (
    <div className='flex items-center justify-between w-[90dvw] flex-wrap md:flex-nowrap gap-4'>
    <div className='bg-[#18181b]/90 w-[100%] md:w-[49%] rounded-2xl p-2 px-6 backdrop-blur-md'>
      <h3 className='text-2xl font-bold text-white mb-0'>
        Text Statistici
      </h3>
      <span className='text-gray-400 text-xs'>
        Actualizat acum 5 minute
      </span>
        <Line data={data} options={options} />
    </div>
    <div className='bg-[#18181b]/90  w-[100%] md:w-[49%]  rounded-2xl p-2 px-6 backdrop-blur-md'>
      <h3 className='text-2xl font-bold text-white mb-0'>
        Text Statistici
      </h3>
      <span className='text-gray-400 text-xs'>
        Actualizat acum 5 minute
      </span>
        <Line data={data} options={options} />
    </div>
    </div>
  )
}

export default Chart