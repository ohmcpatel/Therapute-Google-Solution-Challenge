"use client"

import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function App() {
  const router = useRouter();

  const handleClick = (title: string) => {
    router.push(`/uploadExercise?param1=${title}`);
  }

  const list = [
    {
      title: "Deadlift",
      img: "/deadlift.png",
    },
    {
      title: "Dumbell Thrust",
      img: "/dumbellThrust.jpeg",
    },
    {
      title: "Internal Rotation",
      img: "/internalExternal.png",
    },
    {
      title: "Knee Extensions",
      img: "/kneeExtension.png",
    },
    {
      title: "Rotator Cuff",
      img: "/lying.png",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
    },
  ];

  return (
    <div className="gap-10 grid grid-cols-2 sm:grid-cols-4 p-10 min-h-screen">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[320px]"
              src={item.img}
              onClick={() => handleClick(item.title)}
            />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
