'use client'
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

interface TimestampEvent {
  time: number;
  description: string;
}

const VideoAnalysis = () => {
  const [accuracyScore, setAccuracyScore] = useState<string>('94.2%');
  const [events, setEvents] = useState<TimestampEvent[]>([
    { time: 5 * 60 + 26, description: 'Event 1' },
    { time: 10 * 60 + 46, description: 'Event 2' }
  ]);
  const videoRef = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);

  const jumpToTime = (event: TimestampEvent) => {
    if (videoRef.current) {
      videoRef.current.seekTo(event.time, 'seconds');
      setPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-2/3 mx-12 my-4">
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
          <ReactPlayer
            ref={videoRef}
            url="https://www.youtube.com/watch?v=7dYTw-jAYkY"
            playing={playing}
            controls
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
        <div className="bg-gray-700 rounded-xl p-4 mt-4 text-white text-center">
          Accuracy Score: {accuracyScore}
        </div>
      </div>
      <div className="w-1/4 bg-gray-800 p-4 rounded-xl overflow-auto" style={{ marginTop: '1rem', minHeight: '225px', maxHeight: '10%' }}> 
        <h2 className="text-white text-lg font-bold mb-4">Timestamps</h2>
        <div className="bg-blue-500 rounded-xl p-4 my-4">
          {events.map(event => (
            <button
              key={event.time}
              onClick={() => jumpToTime(event)}
              className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg p-2 block w-full mb-2"
            >
              {formatTime(event.time)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoAnalysis;
