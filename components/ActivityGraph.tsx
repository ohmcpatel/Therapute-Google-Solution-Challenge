import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { db } from '../app/firebase';
import { getDocs, query, collection } from 'firebase/firestore';

interface ExerciseData {
  date: string;
  count: number;
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
          chartInstanceRef.current.destroy();
        }
        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: exerciseData.map(data => formatDate(data.date)),
            datasets: [
              {
                label: 'Exercise Accuracy',
                data: exerciseData.map(data => data.count),
                borderColor: 'rgb(1, 101, 229)',
                tension: 0.4,
                fill: true, // Fills below the line
                backgroundColor: 'pink', // Adjust fill color and opacity
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
                  color: 'black',
                },
                ticks: {
                  color: 'black',
                },
                grid: {
                  display: false,
                },
              },
              y: {
                title: {
                  display: true,
                  text: '',
                  color: 'black',
                },
                ticks: {
                  color: 'black',
                },
                beginAtZero: true,
                grid: {
                  display: true,
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
      Chart.defaults.font.family = 'inter';
    }
  }, [exerciseData]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };

  return (
    <div style={{ width: '600px', height: '600px' }}>
      <canvas className="" ref={chartRef}></canvas>
    </div>
  );
};

export default ExerciseGraph;
