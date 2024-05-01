'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

interface Exercise {
    name: string;
    link: string;
    date: string;
}

export default function ExerciseHistory() {
    const router = useRouter();
    const [history, setHistory] = useState<Exercise[]>([])
    const list: Exercise[] = [
        {
            name: 'Dumbell Thrust',
            date: '4/17/24',
            link: '#',
        },
        {
            name: 'Dumbell Thrust',
            date: '4/17/24',
            link: '#'
        },
        {
            name: 'Dumbell Thrust',
            date: '4/17/24',
            link: '#'
        },
        {
            name: 'Dumbell Thrust',
            date: '4/17/24',
            link: '#'
        },
        {
            name: 'Dumbell Thrust',
            date: '4/17/24',
            link: '#'
        },
    ];

    useEffect(() => {
        setHistory(list);
    }, []);

    function handleClick(link: string) {
        router.push(`/history?param1=${link}`)
    }

    return (
        <div className="flex flex-col items-center pl-7 pt-5 pb-4 rounded-xl" style={{ backgroundColor: '#0165e5' }}>
            <h2 className="text-white" style={{ fontSize: '1.5rem' }}>Exercise History</h2>
            <div style={{ maxHeight: '40vh', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#8eb9ec rgba(0, 0, 0, 0.1)', borderRadius: '25px'}}>
                {history.map((e, index) => (
                    <div key={index} className="flex justify-between items-center p-4 mb-4 rounded-2xl">
                        <h4 className="align-center text-white mr-12">{e.date}</h4>
                        <h4 className="align-center text-white">{e.name}</h4>
                        <button className="px-6 py-2 rounded-full text-sm text-black font-semibold text-lg"
                            style={{ backgroundColor: '#6ab9f7', marginLeft: '6rem' }}
                            onClick={() => handleClick(e.link)}>
                            View
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
