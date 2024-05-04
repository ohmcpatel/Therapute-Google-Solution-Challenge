

'use client'
import {Image} from "@nextui-org/react";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

interface Comments {
    name: string;
    link: string;
    date: string;
    therapist: string;
    image: string;
}

export default function PTComments() {
    const router = useRouter();
    const [comments, setComments] = useState<Comments[]>([])
    const list: Comments[] = [
        {
            name: 'Dumbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
        {
            name: 'Dumbell Thrust',
            date: '4/17/24',
            link: '#',
            therapist: "Dr. Jane Doe",
            image: '/profilepic.png',
        },
    ];

    useEffect(() => {
        setComments(list);
    }, []);

    function handleClick(link: string) {
        router.push(`/history?param1=${link}`)
    }
    return (
        <div className="p-6 w-full flex flex-col rounded-xl" style={{backgroundColor: '#0165e5'}}>
            <h2 className="text-white mb-3" style={{ fontSize: '1.5rem', textAlign: 'center' }}>Therapist Comments: </h2>
            {comments.map((c, index) => (
                <div className="flex justify-between items-center mb-6 rounded-xl">
                    <Image src={`${c.image}`} alt="Therapist picture" height='60px' width='60px'/>
                    <h4 className="mx-4 text-white">{c.therapist}</h4>
                    <h4 className="mx-4 text-white">{c.date}</h4>
                    <h4 className="mx-4 text-white">{c.name}</h4>
                    <button className="px-3 py-2 rounded-full text-sm text-white font-semibold"
                    style={{ backgroundColor: '#6ab9f7' }}
                    onClick={() => handleClick(c.link)}>
                    View Comments
                    </button>
                </div>
            ))}
        </div>
      );
}
