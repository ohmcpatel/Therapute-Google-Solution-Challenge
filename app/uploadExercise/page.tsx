"use client"

import React, { useRef, useState } from "react";
import Navbar from '../../components/Navbar';
import {useRouter, useSearchParams} from 'next/navigation';


const ExercisePage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const search = searchParams.get('param1');

  const upload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/test', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      // Assuming the server returns the processed file URL
      const processedFileUrl = URL.createObjectURL(await response.blob());
      setVideoUrl(processedFileUrl);

    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error
    }
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Do something with the selected file
    if (file) {
      console.log("Selected file:", file);
      upload(file); // Upload the selected file
      // router.push('/loading'); // Navigate to the loading page upon file selection
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
        {videoUrl && (
          <video width="1100px" height="auto" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {!videoUrl && (
          <>
            <h1 className="text-3xl font-bold mb-10 text-blue-600">Upload your {search} video </h1>
            <label
              htmlFor="fileInput"
              className="relative cursor-pointer"
            >
              <img
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
          </>
        )}
      </div>
    </div>
  );
};

export default ExercisePage;
