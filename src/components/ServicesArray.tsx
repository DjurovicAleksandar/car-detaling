import Image from "next/image";
import keramickaZastita from "@/assets/image/second/keramicka-zastita.jpg";
import carPolishing from "@/assets/image/second/poliranje-rupes.jpg";
import dubinsko from "@/assets/image/second/dubinsko-pranje-vozila.jpg";
import detailing from "@/assets/image/second/detailingEnt.jpg";

import { FC, useEffect, useRef, useState } from "react";
import { useSpring, motion } from "framer-motion";
import Link from "next/link";

// http://mocogledala.co/wp-content/uploads/2024/03/1374590-Person-Polish-Black-1080X1920.mp4

const services = [
  { name: "Poliranje", href: "poliranje", image: carPolishing },
  {
    name: "Keramička zaštita",
    href: "keramicka-zastita",
    image: keramickaZastita,
  },
  { name: "Dubinsko pranje", href: "dubinsko-pranje", image: dubinsko },
  {
    name: "Detailing enterijera",
    href: "detailing-enterijera",
    image: detailing,
  },
  { name: "Korekcija laka", href: "korekcija-laka", image: carPolishing },
];

const spring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

interface ServiceArrayProps {
  setChoosenImage: (value: number) => void;
  choosenImage: number | null;
  allServices?: [];
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
      {services.map(({ name, image, href }, i) => {
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
            className={`w-full uppercase text-xl md:text-3xl lg:text-5xl flex justify-end pt-8 pb-1 md:pb-3 cursor-pointer opacity-50 hover:opacity-100 ${
              i === services.length - 1 ? "border-t border-b" : "border-t"
            } group duration-300 ease-in relative `}
          >
            <Link
              href={href}
              className="group-hover:scale-105 duration-300 group-hover:-translate-x-6 group-hover:-translate-y-4"
            >
              {name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesArray;
