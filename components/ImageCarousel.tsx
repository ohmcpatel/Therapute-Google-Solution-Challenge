import { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Image } from "@nextui-org/react";
import "../app/globals.css";

interface Slide {
  name: string;
  img: string;
  desc: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function ImageCarousel({ slides }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  // Ensure slides is initialized and not null or undefined
  const slidesToDisplay = slides ?? [];

  let previousSlide = () => {
    if (current === 0) setCurrent(slidesToDisplay.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slidesToDisplay.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="h-full w-full mb-5">
      <div className="CarouselContainer mb-2" style={{ display: 'flex', height: '100%' }}>
        {/* Left arrow */}
        <div className="left-0 top-1/2 transform translate-y-1/3 text-black text-3xl items-center mt-4 mr-7">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
        </div>
        {/* Image Carousel */}
        <div className="overflow-hidden relative" style={{ borderRadius: '10px', height: '100%', width: '100%', flex: '1' }}>
          <div className="flex transition ease-out duration-400" style={{ transform: `translateX(-${current * 50}%)`, width: "100%", height: "100%", borderRadius: '10px' }}>
            {slidesToDisplay.map((s, index) => (
              <div className="rounded-md" key={index} style={{ flex: '1 0 48%', maxWidth: '48%', marginRight: "1rem", borderRadius: '10px', background: 'linear-gradient(to top right, #a38ff9 46%, #dad2fe 82%)' }}>
                <div className="rounded-md flex justify-between" onClick={() => console.log("item pressed")} style={{alignItems: "center", height: '100%' }}>
                  <div className="w-2/3 p-0 " style={{ width: "50%", height: "100%", display: "flex", justifyContent: "center", backgroundColor: '#ffffff', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                    <Image
                      shadow="none"
                      radius="none"
                      width= 'auto'
                      height= '100%'
                      alt={s.name}
                      src={s.img}
                      onClick={() => console.log("item clicked")}
                    />
                  </div>
                  <div className="w-1/3 text-small items-center justify-center p-2 h-full" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: 'rgba(255, 255, 255, 0)',borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}>
                    <p className="text-white font-semibold mt-5" style={{fontSize: '1.1rem'}}>{s.name}</p>
                    <p className="text-white text-sm ">{s.desc}</p>
                    <button
                      className="mt-8 px-3 py-1 rounded-md text-sm  bg-blue-500 text-white"
                      onClick={() => console.log("clicked")}>
                      Complete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right arrow */}
        <div className="right-0 top-1/2 transform translate-y-1/3 text-black text-3xl items-center mt-4 ml-7">
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
      {/* Slide Indicators */}
      <div className="flex justify-center gap-3 w-full">
        {slidesToDisplay.slice(0, (slidesToDisplay.length - 1)).map((s, i) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-2 h-2 cursor-pointer  ${i === current ? "bg-black" : "bg-gray-500"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
