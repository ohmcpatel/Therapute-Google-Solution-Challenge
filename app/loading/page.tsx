"use client"
// LoadingPage.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "../../components/Navbar";

const LoadingPage: React.FC = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  // Simulate loading process using useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    }, 500); // Simulating progress every 200 milliseconds
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      router.push("/exerciseAnalysis");
    }
  }, [progress, router]);

  return (
    <div>    
      <Navbar />
      <div style={{backgroundColor: '#dedcff'}} className="flex flex-col items-center pt-20 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600">Your video is being processed.</h1>
      <div className="mt-20" style={{ width: 300, height: 300 }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textSize: "20px",
            pathColor: "foreground",
            textColor: "foreground",
            trailColor: "foreground",
          })}
        />
      </div>
  </div>

    </div>

  );
};

export default LoadingPage;
