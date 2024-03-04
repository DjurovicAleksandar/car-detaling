import Image from "next/image";
import detaling from "@/assets/image/second/detaling.jpg";
import carPolishing from "@/assets/image/services/carPolishing.jpg";
import { FC } from "react";
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
}

const Service: FC<ServiceArrayProps> = ({ setChoosenImage }) => {
  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 1.8;
    const targetY = clientY - (window.innerWidth / 2) * 0.6;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  const { x, y } = mousePosition;

  return (
    <div
      onMouseMove={mouseMove}
      className="flex w-full h-full flex-col relative mt-[100px]"
    >
      {services.map(({ name, image }, i) => {
        return (
          <div
            onMouseEnter={() => {
              setChoosenImage(i);
            }}
            key={i}
            className={`w-full uppercase text-[3vw] flex justify-end pt-4 pb-1 cursor-pointer opacity-50 hover:opacity-100 ${
              i === services.length - 1 ? "border-t border-b" : "border-t"
            } group duration-300 ease-in relative`}
          >
            <span className="group-hover:scale-105 duration-300 group-hover:-translate-x-6 group-hover:-translate-y-4">
              {name}
            </span>
            <motion.div
              className="h-[10rem] w-[7rem] relative top-0 overflow-hidden"
              style={{ x, y }}
            >
              <Image src={detaling} alt="image" fill className="object-cover" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
