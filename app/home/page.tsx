"use client"


import Image from "next/image";
import { Button } from "@nextui-org/button";
import TodayExercise from "../../components/TodayExercise";
import Carousel from '../../components/ImageCarousel';
import History from "../../components/ExerciseHistory";
import Schedule from "../../components/AppointmentSchedule";
import Comments from "../../components/PTComments";
import ActivityGraph from "../../components/ActivityGraph";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RightComponent from "../../components/RightComponent";
import "../globals.css";

interface HomePageProps {
  name: string;
}

const Home: any  = (props: HomePageProps) =>{
  return (
    <div className="" style={{backgroundColor: '#ffffff', height: '100vh'}}>
    <Navbar/>
    <div className="flex justify-between pt-5 pl-6 pr-6" style={{height: '100vh'}}>
      <div className="w-1/2">
        {/**left side */}
        <div className="flex flex-col items-center justify-start w-full" style={{ flex: 1, height: '34vh' }}>
          <TodayExercise />
        </div>
        <div className=" flex flex-col p-5 h-full justify-start rounded-md" style={{ flex: 1, height: '53vh', width: '100%', margin: '0 auto', backgroundColor: '#ffffff', borderColor: '#0165e5', borderWidth: '1px', borderStyle: 'solid', boxShadow: '0px 0px 3px 1px rgba(1, 101, 229, 0.5)' }}>
            <h2 className="align-left text-gray ml-9 font-semibold mb-2" style={{  }}>Activity Graph:</h2>
            <ActivityGraph />
          </div>
      </div>
      <div className="w-1/2 ml-7">
        {/**right side */}
        <div className=" flex flex-col items-center justify-start" style={{height: '87vh'}}>
          <RightComponent />
        </div>
      </div>
    </div>
    </div>
  );
}


export default Home;
