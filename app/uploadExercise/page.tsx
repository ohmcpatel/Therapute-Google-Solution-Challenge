"use client"

import React, { useRef } from "react";
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';

const ExercisePage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const search = searchParams.get('param1');

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Do something with the selected file
    if (file) {
      console.log("Selected file:", file);
      // Navigate to the loading page upon file selection
      router.push('/loading');
    }
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault(); // Prevent default behavior of the label
    console.log("Clicked the image");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{backgroundColor : "#dedcff"}} className="flex flex-col items-center min-h-screen pt-20">
        <h1 className="text-3xl font-bold mb-10 text-blue-600">Upload your {search} video </h1>
        <label
          htmlFor="fileInput"
          className="relative cursor-pointer"
        >
          <Image
            src="/uploadFile.svg"
            alt="File Upload Icon"
            width={800}
            height={100}
            onClick={handleImageClick}
          />
          <input
            type="file"
            id="fileInput"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            width={100}
            height={100}
          />
        </label>
        <p className="text-blue-600 mt-5">Click the image to upload your video</p>
      </div>
    </div>

  );
};

export default ExercisePage;
