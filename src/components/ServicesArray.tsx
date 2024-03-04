import Image from "next/image";
import detaling from "@/assets/image/second/detaling.jpg";
import carPolishing from "@/assets/image/services/carPolishing.jpg";
import { FC, useEffect, useRef, useState } from "react";
import { useSpring, motion } from "framer-motion";

// http://mocogledala.co/wp-content/uploads/2024/03/1374590-Person-Polish-Black-1080X1920.mp4

const services = [
  { name: "Detaling", image: detaling },
  { name: "Poliranje", image: carPolishing },
  { name: "Keramika", image: detaling },
  { name: "Premium pranje", image: carPolishing },
];

const spring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

interface ServiceArrayProps {
  setChoosenImage: (value: number) => void;
  choosenImage: number | null;
}

const ServicesArray: FC<ServiceArrayProps> = ({
  choosenImage,
  setChoosenImage,
}) => {
  const [showIt, setShowIt] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.35;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  const { x, y } = mousePosition;

  return (
    <div
      onMouseMove={mouseMove}
      className={`mt-[100px] relative`}
      // onMouseEnter={() => {
      //   setShowIt(true);
      // }}
      // onMouseLeave={() => {
      //   setShowIt(false);
      // }}
    >
      {services.map(({ name, image }, i) => {
        return (
          <div
            onMouseEnter={() => {
              setShowIt(true);
              setChoosenImage(i);
              if (videoRef.current) {
                videoRef.current.play();
              }
            }}
            onMouseLeave={() => {
              setShowIt(false);
              if (videoRef.current === null) return;
              videoRef.current.pause();
            }}
            key={i}
            className={`w-full uppercase text-[3vw] flex justify-end pt-8 pb-1 cursor-pointer opacity-50 hover:opacity-100 ${
              i === services.length - 1 ? "border-t border-b" : "border-t"
            } group duration-300 ease-in relative `}
          >
            <span className="group-hover:scale-105 duration-300 group-hover:-translate-x-6 group-hover:-translate-y-4">
              {name}
            </span>
          </div>
        );
      })}

      <motion.div
        className={`h-[15rem] w-[15rem] absolute top-0 -left-[30%] overflow-hidden z-[10] ${
          showIt ? "block" : "hidden"
        }`}
        style={{ x, y }}
      >
        <video
          ref={videoRef}
          src="http://mocogledala.co/wp-content/uploads/2024/03/1374590-Person-Polish-Black-1080X1920.mp4"
          preload="none"
          muted
          loop
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ServicesArray;
