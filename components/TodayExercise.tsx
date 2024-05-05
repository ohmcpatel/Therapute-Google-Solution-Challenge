
'use client';
import React, { useEffect, useState } from 'react';
import Carousel from './ImageCarousel';
import "../app/globals.css"
import { db } from '../app/firebase';
import { getFirestore, collection, addDoc, getDoc, setDoc, doc, query, where, getDocs, updateDoc } from "firebase/firestore";

interface Slide {
    name: string;
    img: string;
    desc: string;
}
export default function TodayExercise() {
    const [carousel, setCarousel] = useState<Slide[]>([]);

    async function fetchData() {
        const q = query(collection(db, 'todayExercises'));
        const querySnapshot = await getDocs(q);
        // Convert each DocumentData object to Slide
        const carouselData: Slide[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            // Assuming the structure of data in Firestore matches Slide interface
            return {
            name: data.name,
            img: data.img,
            desc: data.desc
            };
        });
        setCarousel(carouselData);
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="flex flex-col items-center bg-blue p-5 rounded-xl" style={{backgroundColor: '#0165e5'}}>
            <h2 className="todaysExersices align-center text-white mb-3">Today's Exercises</h2>
            <Carousel slides={carousel}/>
        </div>
    );
}
