// components/ExerciseHistory.js
import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { useState, useMemo } from 'react';

const ExerciseHistory = () => {
  const [status, setStatus] = useState(new Set(['pending']));
  const [timeframe, setTimeframe] = useState(new Set(['past-1-week']));

  const statusValue = useMemo(() => Array.from(status).join(', ').replaceAll('_', ' '), [status]);
  const timeframeValue = useMemo(() => Array.from(timeframe).join(', ').replaceAll('_', ' '), [timeframe]);

  const exercises = [
    { name: "Knee Extensions", date: "11/12/2024" },
    { name: "Leg Press", date: "11/13/2024" },
    { name: "Hamstring Curls", date: "11/14/2024" },
    { name: "Calf Raises", date: "11/15/2024" },
    { name: "Squats", date: "11/16/2024" },
    { name: "Lunges", date: "11/17/2024" },
    { name: "Deadlifts", date: "11/18/2024" },
    { name: "Step-Ups", date: "11/19/2024" },
    { name: "Leg Extensions", date: "11/20/2024" },
    { name: "Hip Thrusts", date: "11/21/2024" },
    { name: "Glute Bridges", date: "11/22/2024" },
    { name: "Box Jumps", date: "11/23/2024" },
  ];
  

  return (
    <div className="overflow-auto max-h-full p-4" style={{scrollbarWidth: 'none', scrollbarColor: '#ffffff #ffffff'}}>
      <div className="mb-0">
        <h2 className="text-lg ml-1 text-gray-500">Exercise History</h2>
        <p className="text-2xl mt-2 text-black">12 Exercises Pending</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font ml-1 text-gray-500">This Week</span>
        <div className="flex space-x-4">
          <Dropdown
                classNames={{
                    base: "before:bg-default-200", // change arrow background
                    content: "p-0 border-small border-divider bg-background",
                  }}>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
                {statusValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Status selection"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={status}
              onSelectionChange={setStatus}
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}
            >
              <DropdownItem color="black" key="pending">Pending</DropdownItem>
              <DropdownItem key="completed">Completed</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
                {timeframeValue.replace('-', ' ')}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Timeframe selection"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={timeframe}
              onSelectionChange={setTimeframe}
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}
            >
              <DropdownItem key="past-1-week">Past 1 Week</DropdownItem>
              <DropdownItem key="past-2-weeks">Past 2 Weeks</DropdownItem>
              <DropdownItem key="past-1-month">Past 1 Month</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="space-y-4">
        {exercises.map((exercise, index) => (
          <div key={index} className="bg-gradient-to-r from-violet-500 to-violet-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{exercise.name}</h3>
              <p>{exercise.date}</p>
            </div>
            <button className="bg-white rounded-full p-2">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseHistory;
