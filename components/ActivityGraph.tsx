
'use client'

import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { db } from '../app/firebase';
import { getDocs, query, collection } from 'firebase/firestore';

interface ExerciseData {
  date: string; // Date string in ISO format (e.g., '2024-04-30')
  count: number; // Number of exercises for the day
}

const ExerciseGraph: React.FC = () => {
  const [exerciseData, setExerciseData] = useState<ExerciseData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'activityGraph'));
      const querySnapshot = await getDocs(q);
      const data: ExerciseData[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          date: data.date,
          count: data.count,
        };
      });
      // Sort the exerciseData array based on the date in ascending order
      const sortedData = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setExerciseData(sortedData);
    };

    fetchData();
  }, []);

  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy(); // Destroy previous chart instance
        }
        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: exerciseData.map(data => data.date), // Format date labels
            datasets: [
              {
                label: 'Exercises on this Day',
                data: exerciseData.map(data => data.count), // Exercise count data
                borderColor: 'rgb(1, 101, 229)', // Black border color
                tension: 0.4,
                fill: false,
                borderWidth: 1.5,
                pointRadius: 3,
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Date',
                  color: 'black', // White text color
                },
                ticks: {
                  color: 'black', // White tick color
                },
                grid: {
                  display: false, // Hide x-axis grid lines
                },
                
              },
              y: {
                title: {
                  display: true,
                  text: 'Number of Exercises',
                  color: 'black', // White text color
                },
                ticks: {
                  color: 'black', // White tick color
                },
                beginAtZero: true, // Start y-axis at 0
                grid: {
                  display: true, // Hide y-axis grid lines
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
      Chart.defaults.font.size = 16;
      Chart.defaults.font.family = 'sans-serif'
    }
  }, [exerciseData]);

  // Function to format date to mm/dd/yy
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(2);
    return `${month}/${day}/${year}`;
  };

  return (
    <div style={{ height: '98%', width: '100%' }}> {/* Adjust height as needed */}
      <canvas ref={chartRef} style={{ height: '100%', width: '100%' }}></canvas>
    </div>
  );
};

export default ExerciseGraph;
