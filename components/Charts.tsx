import React from 'react';
import ActivityGraph from './ActivityGraph';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { useState, useMemo } from 'react';

const Charts: React.FC = () => {

  const [status, setStatus] = useState(new Set(['January']));
  const [timeframe, setTimeframe] = useState(new Set(['past-1-week']));

  const statusValue = useMemo(() => Array.from(status).join(', ').replaceAll('_', ' '), [status]);
  const timeframeValue = useMemo(() => Array.from(timeframe).join(', ').replaceAll('_', ' '), [timeframe]);

  const daysInMonth = new Date(2024, 5, 0).getDate(); // Change the year and month as needed
  const activityData = Array.from({ length: daysInMonth }, () =>
    Math.floor(Math.random() * 4)
  );

  const shades = ['bg-gray-200', 'bg-gray-400', 'bg-gray-600', 'bg-black'];
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < daysInMonth; i++) {
      days.push(
        <div key={i} className="flex flex-col items-center">
          <div className={`w-5 h-5 ${shades[activityData[i]]} rounded`}></div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="flex flex-row gap-4 p-4 h-full w-full">
      <div className="w-1/3 p-4 flex flex-col justify-center h-full">
        <div className=" md:text-left mb-4">
          <h2 className="text-md text-gray-500">Average Activity Rate</h2>
          <p className="text-2xl text-black ">14 Days</p>
          <p className="text-gray-500 text-md">May 2024</p>
        </div>

        <div className="grid grid-cols-7 gap-2 flex-grow" style={{height: '90%'}}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="flex justify-center text-black">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>

          <div className="flex items-center justify-center flex mt-4 text-sm px-2 py-2" style={{borderColor: '#000000', borderWidth: '1px', borderStyle: 'solid', borderRadius: '1rem'}}>
            <span className="mr-2 font-md text-black">Less</span>
            <div className="flex space-x-4">
              {shades.map((shade, index) => (
                <div key={index} className={`w-5 h-5 ${shade} rounded`}></div>
              ))}
            </div>
            <span  className="ml-2 text-black">More</span>
          </div>
      </div>

      <div className='w-2/3 p-4 mt-2 flex flex-col items-middle justify-center h-full mr-2'>
      <div className="flex space-x-4">
        <div className='w-full flex flex-row justify-between' style={{marginTop: '60px'}}>
          <h3 className="text-center text-gray-500 font mt-5" style={{marginLeft: '12rem'}}>Average Form Accuracy:</h3>
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
                {months.map((month) => (
            <DropdownItem color="black" key={month}>
              {month}
            </DropdownItem>
          ))}
              </DropdownMenu>
            </Dropdown>

        </div>
            
        </div>
          
      <ActivityGraph />
      </div>
    </div>
  );
};

export default Charts;
