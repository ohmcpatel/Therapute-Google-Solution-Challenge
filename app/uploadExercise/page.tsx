<<<<<<< HEAD
"use client"

import React, { useRef } from "react";
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';


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
      <div className="flex flex-col items-center min-h-screen pt-20 mt-20">
        <h1 className="text-3xl font-bold mb-10">Upload your {search} video </h1>
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
        <p className="text-gray-500 mt-5">Click the image to upload your video</p>
      </div>
  );
};

export default ExercisePage;
=======
"use client"

import React, { useRef } from "react";
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

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
    <div className="flex flex-col items-center min-h-screen pt-20 mt-20">
      <h1 className="text-3xl font-bold mb-10">Upload your {search} video </h1>
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
      <p className="text-gray-500 mt-5">Click the image to upload your video</p>
    </div>
  );
};

export default ExercisePage;
>>>>>>> e0b1892f3b3088d5d929bebf3e094df282dae262
