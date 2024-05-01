'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

interface Schedule {
    date: string;
    link: string;
}

export default function AppointmentSchedule() {
    const router = useRouter();
    const [schedule, setSchedule] = useState<Schedule[]>([])
    const list: Schedule[] = [
        {
            date: "4/17/24",
            link: "#",
        },
        {
            date: "4/17/24",
            link: "#",
        },
        {
            date: "4/17/24",
            link: "#",
        },
    ];

    useEffect(() => {
        setSchedule(list);
    }, []);

    function handleClick(link: string) {
        const url = `${link}`;
        const win = window.open(url, '_blank');
        if (win) {
        win.focus();
        } else {
        router.push(url);
        }
    }
    return (
        <div className="flex flex-col justify-between items-center gap-4 p-9 rounded-xl" style={{ backgroundColor: '#0165e5' }}>
          <h2 className="text-white mb-3" style={{ fontSize: '1.2rem' }}>Appointment Schedule: </h2>
          {schedule.map((s, index) => (
            <div className="flex justify-between items-center mb-2">
              <h3 className="align-center text-white" style={{marginRight: '100px'}}>{s.date}</h3>
              <button className="px-6 py-2 rounded-full text-sm text-black font-semibold"
                style={{ backgroundColor: '#6ab9f7' }}
                onClick={() => handleClick(s.link)}>
                Reschedule/Cancel
              </button>
            </div>
          ))}
          <button className="px-6 py-2 rounded-full text-sm text-black font-semibold"
                style={{ backgroundColor: '#6ab9f7' }}
                onClick={() => handleClick("https://engageware.com/")}>
                Book New Appointment
              </button>
        </div>
      );      
}