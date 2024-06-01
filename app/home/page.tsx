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
import Chart from "../../components/Charts";
import "../globals.css";

interface HomePageProps {
  name: string;
}

const Home: any  = (props: HomePageProps) =>{
  return (
    <div className="" style={{backgroundColor: '#ffffff', height: '100vh'}}>
    <Navbar/>
    <div className="flex flex-row pt-5 pl-4 pr-4" style={{height: '70vh'}}>
      <div className="w-70">
        {/**left side */}
        <div className="mb-2 flex flex-col items-center justify-start w-full mb-1" style={{ flex: 1, height: '34vh' }}>
          <TodayExercise />
        </div>
        <div className="h-full justify-start rounded-md" style={{ flex: 1, height: '50vh', width: '100%', margin: '0 auto', backgroundColor: '#ffffff', borderColor: '#0165e5', borderWidth: '1px', borderStyle: 'solid', boxShadow: '0px 0px 3px 1px rgba(1, 101, 229, 0.5)' }}>
            <Chart />
          </div>
      </div>
      <div className="w-2/4 ml-7">
        {/**right side */}
        <div className=" flex flex-col items-center justify-start" style={{height: '85vh'}}>
          <RightComponent />
        </div>
      </div>
    </div>
     {/* <Footer/>  */}
    </div>
  );
}


export default Home;
