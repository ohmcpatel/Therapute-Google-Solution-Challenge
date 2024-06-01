"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { db } from '../app/firebase';
import { getFirestore, collection, addDoc, getDoc, setDoc, doc, query, where, getDocs, updateDoc } from "firebase/firestore";

interface Exercise {
    name: string;
    link: string;
    date: string;
}

export default function ExerciseHistory() {
    const router = useRouter();
    const [history, setHistory] = useState<Exercise[]>([])
    async function fetchData() {
        const q = query(collection(db, 'history'));
        const querySnapshot = await getDocs(q);
        // Convert each DocumentData object to Slide
        const historyData: Exercise[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            //convert date timestamp to mm/dd/yy
            const dateObject = data.date.toDate();
            const month = dateObject.getMonth() + 1; // Month is zero-based, so add 1
            const day = dateObject.getDate();
            const year = dateObject.getFullYear() % 100; // Get last two digits of the year
            // Format date in mm/dd/yy format
            const dateString = `${month}/${day}/${year}`;

            // Assuming the structure of data in Firestore matches Slide interface
            return {
            name: data.name,
            date: dateString,
            link: data.link,
            };
        });
        setHistory(historyData);
    }
    useEffect(() => {
        fetchData();
    }, []);

    function handleClick(link: string) {
        router.push(`/history?param1=${link}`)
    }

    return (
        <div className="flex flex-col w-full items-center pl-7 pr-1 pt-5 pb-4 rounded-md" style={{ backgroundColor: '#ffffff', borderColor: '#0165e5', borderWidth: '1px', borderStyle: 'solid', boxShadow: '0px 0px 3px 1px rgba(1, 101, 229, 0.5)' }}>
            <h2 className="text-black text-2xl mb-4">Exercise History</h2>
            <div className="overflow-auto w-full flex flex-wrap justify-between" style={{scrollbarWidth: 'thin', scrollbarColor: '#dedcff rgba(255, 255, 255, 0.0)'}}>
                {history.map((exercise, index) => (
                    <div className="w-full sm:w-1/2 mb-4" key={index} style={{ width: 'calc(50% - 0.5rem)', marginRight: '0.5rem' }}>
                        <div className="flex justify-between w-full items-center p-3 rounded-2xl bg-white text-black" style={{borderColor: 'black', borderWidth: '1px'}}>
                            <h4 className="pr-5 pl-3 text-md">{exercise.date}</h4>
                            <h4 className="pr-5 text-md">{exercise.name}</h4>
                            <button className="px-6 py-2 rounded-full text-sm font-semibold bg-blue-400"
                                onClick={() => handleClick(exercise.link)}>
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
    
}
