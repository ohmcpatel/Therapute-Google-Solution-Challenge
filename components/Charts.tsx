import React from 'react';
import ActivityGraph from './ActivityGraph';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

// Register the necessary components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Charts: React.FC = () => {
  const daysInMonth = new Date(2024, 5, 0).getDate(); // Change the year and month as needed
  const activityData = Array.from({ length: daysInMonth }, () =>
    Math.floor(Math.random() * 4)
  );

  const shades = ['bg-gray-200', 'bg-gray-400', 'bg-gray-600', 'bg-black'];

  const chartData = {
    labels: ['11/13', '11/14', '11/15', '11/16', '11/17', '11/18', '11/19', '11/20', '11/21', '11/22'],
    datasets: [
      {
        label: 'Average Form Accuracy',
        data: [10, 60, 80, 70, 90, 50, 10, 30, 40, 60],
        fill: true,
        backgroundColor: 'rgba(66, 153, 225, 0.6)',
        borderColor: '#4299E1',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < daysInMonth; i++) {
      days.push(
        <div key={i} className="flex flex-col items-center">
          <div className={`w-5 h-5 ${shades[activityData[i]]} rounded`}></div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="flex p-4 h-full">
      <div className="w-1/2 p-4 flex flex-col justify-center h-full">
        <div className=" md:text-left mb-4">
          <h2 className="text-md text-gray font-semibold">Average Activity Rate</h2>
          <p className="text-xl">14 Days</p>
          <p className="text-gray-500 text-md">May 2024</p>
        </div>

        <div className="grid grid-cols-7 gap-2 flex-grow" style={{height: '90%'}}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="flex justify-center font-semibold">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>

          <div className="flex items-center justify-center flex mt-4 text-sm px-2 py-2" style={{borderColor: '#000000', borderWidth: '1px', borderStyle: 'solid', borderRadius: '1rem'}}>
            <span className="mr-2 font-md">Less</span>
            <div className="flex space-x-4">
              {shades.map((shade, index) => (
                <div key={index} className={`w-5 h-5 ${shade} rounded`}></div>
              ))}
            </div>
            <span  className="ml-2">More</span>
          </div>
      </div>

      <div className="w-1/2 p-3 mt-7 flex items-center justify-center h-full">
        <ActivityGraph />
      </div>
    </div>
  );
};

export default Charts;
