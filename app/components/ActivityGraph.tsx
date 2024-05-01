'use client'
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

interface ExerciseData {
  date: string; // Date string in ISO format (e.g., '2024-04-30')
  count: number; // Number of exercises for the day
}

const ExerciseGraph: React.FC = () => {
  const [exerciseData, setExerciseData] = useState<ExerciseData[]>([]);

  useEffect(() => {
    // Fetch exercise data for the last 7 days (replace with your own data fetching logic)
    const fetchData = async () => {
      try {
        // Mock data for demonstration purposes
        const mockData: ExerciseData[] = [
          { date: '2024-04-24', count: 3 },
          { date: '2024-04-25', count: 5 },
          { date: '2024-04-26', count: 4 },
          { date: '2024-04-27', count: 6 },
          { date: '2024-04-28', count: 2 },
          { date: '2024-04-29', count: 7 },
          { date: '2024-04-30', count: 5 },
        ];
        setExerciseData(mockData);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
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
            labels: exerciseData.map(data => formatDate(data.date)), // Format date labels
            datasets: [
              {
                label: 'Exercises per Day',
                data: exerciseData.map(data => data.count), // Exercise count data
                borderColor: 'rgb(0, 0, 0)', // Black border color
                tension: 0.1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Date',
                  color: 'white', // White text color
                },
                ticks: {
                  color: 'white', // White tick color
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Number of Exercises',
                  color: 'white', // White text color
                },
                ticks: {
                  color: 'white', // White tick color
                },
                beginAtZero: true, // Start y-axis at 0
              },
            },
            plugins: {
              legend: {
                position: 'bottom', // Place legend at the bottom
                labels: {
                  color: 'white', // White legend label color
                },
              },
            },
          },
        });
      }
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

  return <canvas className="w-full mt-5" ref={chartRef}></canvas>;
};

export default ExerciseGraph;
