import Image from "next/image";
import {Button} from "@nextui-org/button"
import TodayExercise from "./components/TodayExercise";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-red-500">Hello World</h1>
      {/* <TodayExercise /> */}
    </main>
  );
}
