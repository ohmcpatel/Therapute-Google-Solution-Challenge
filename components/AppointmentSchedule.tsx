'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { db } from '../app/firebase';
import { getDocs, collection, query } from "firebase/firestore";

interface Schedule {
    date: string;
    link: string;
}

export default function AppointmentSchedule() {
    const router = useRouter();
    const [schedule, setSchedule] = useState<Schedule[]>([]);

    async function fetchData() {
        const q = query(collection(db, 'appointments'));
        const querySnapshot = await getDocs(q);
        // Convert each DocumentData object to Schedule
        const scheduleData: Schedule[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                date: data.date.toDate().toLocaleString(),
                link: data.link,
            };
        });
        setSchedule(scheduleData);
    }

    useEffect(() => {
        fetchData();
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
        <div className="flex flex-col items-center pl-7 pr-1 pt-5 w-full rounded-md" style={{backgroundColor: '#ffffff', borderColor: '#0165e5', borderWidth: '1px', borderStyle: 'solid', boxShadow: '0px 0px 3px 1px rgba(1, 101, 229, 0.5)'}}>
            <h2 className="text-black mb-6 text-2xl">Appointment Schedule</h2>
            <div className=" overflow-auto w-full flex flex-wrap justify-between" style={{ maxHeight: '5rem', scrollbarWidth: 'thin', scrollbarColor: '#dedcff rgba(255, 255, 255, 0.0)'}}>
                {schedule.map((s, index) => (
                    <div key={index} className="w-full sm:w-1/2 mb-4 px-3">
                        <div className="w-full flex flex-row justify-between p-3 rounded-xl bg-white text-gray-800 shadow-md" style={{borderColor: 'black', borderWidth: '1px'}}>
                            <h3 className="text-md">{s.date}</h3>
                            <button
                                className="ml-10 px-3 py-2 rounded-full text-sm bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                                onClick={() => handleClick(s.link)}
                            >
                                Reschedule/Cancel
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="mt-5 mb-5 px-6 py-3 rounded-full text-sm font-semibold bg-blue-500 text-white"
                onClick={() => handleClick("https://engageware.com/")}
            >
                Book New Appointment
            </button>
        </div>
    );
}
