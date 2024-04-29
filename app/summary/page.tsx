'use client'

//Page.tsx
import React, { useEffect, useState } from 'react';
import ActivityGraph from '../components/ActivityGraph';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const Page: React.FC = () => {
  const [graphData, setGraphData] = useState<ChartData | undefined>();

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setGraphData({
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00'],
        datasets: [
          {
            label: 'Push-ups',
            data: [10, 20, 15, 30, 25],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
          {
            label: 'Sit-ups',
            data: [5, 15, 10, 20, 25],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          }
        ],
      });
    }, 1000); // Delay to simulate asynchronous data fetching
  }, []);

  return (
    <div className="activity-container" style={{ width: '600px', height: '400px', margin: '20px auto', padding: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center' }}>Activity Tracker</h1>
      {graphData ? <ActivityGraph data={graphData} /> : <p>Loading data...</p>}
    </div>
  );
};

export default Page;
