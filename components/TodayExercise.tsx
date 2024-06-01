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
        //fetch document with matching user id
        const q = query(collection(db, 'todayExercises'), where('uid', '==', 'IDzKazZW3qN1WXOoCOcJv5gquvd2'));
        const i = await getDocs(q);
        //get subcollection of that document with today's exercises
        const querySnapshot = await getDocs(collection(i.docs[0].ref, 'todayExercises'))
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
        <div className="flex flex-col bg-blue p-3 w-full h-full rounded-md" style={{backgroundColor: '#ffffff', borderColor: '#0165e5', borderWidth: '1px', borderStyle: 'solid', boxShadow: '0px 0px 3px 1px rgba(1, 101, 229, 0.5)'}}>
            <h2 className="todaysExersices align-left text-gray-500 m-2 mb-3">Today's Exercises</h2>
            <Carousel slides={carousel}/>
        </div>
    );
}