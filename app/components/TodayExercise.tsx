
'use client';
import Carousel from './ImageCarousel';
import data from "./CarouselData";
import "../globals.css"
export default function TodayExercise() {
    return (
        <div className="flex flex-col items-center bg-blue p-5 rounded-xl" style={{backgroundColor: '#0165e5'}}>
            <h2 className="todaysExersices align-center text-white mb-3">Today's Exercises</h2>
            <div className="">
            <Carousel slides={data}/>
            </div>
        </div>
    );
}
