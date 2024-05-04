

'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/react";

interface Comments {
    name: string;
    link: string;
    date: string;
    therapist: string;
    image: string;
}

export default function PTComments() {
    const router = useRouter();
    const [comments, setComments] = useState<Comments[]>([]);
    const list: Comments[] = [
        {
            name: 'Dumbbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        // Add your other comments here...
    ];

    useEffect(() => {
        setComments(list);
    }, []);

    function handleClick(link: string) {
        router.push(`/history?param1=${link}`)
    }

    return (
        <div className="max-h-[53vh] overflow-y-auto p-6 w-full rounded-xl bg-blue-600">
            <h2 className="text-white mb-6 text-2xl font-bold text-center">Therapist Comments</h2>
            {comments.map((c, index) => (
                <div key={index} className="flex items-center justify-between mb-6 p-4 rounded-xl bg-white shadow-lg">
                    <div className="flex items-center">
                        <Image src={c.image} alt="Therapist picture" height='60px' width='60px' className="rounded-full mr-4" />
                        <div>
                            <h4 className="text-gray-800 font-semibold">{c.therapist}</h4>
                            <p className="text-gray-600">{c.date}</p>
                            <p className="text-gray-700">{c.name}</p>
                        </div>
                    </div>
                    <button className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
                        onClick={() => handleClick(c.link)}>
                        View Comments
                    </button>
                </div>
            ))}
        </div>
    );
}
