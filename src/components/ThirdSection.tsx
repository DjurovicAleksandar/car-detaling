"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

//cars
import mercedes from "@/assets/image/second/slider1.jpg";
import audi from "@/assets/image/second/slider2.jpg";
import bmw from "@/assets/image/second/slider3.jpg";
import porsche from "@/assets/image/second/slider4.jpg";
import golf from "@/assets/image/second/slider5.jpg";
import audia4 from "@/assets/image/second/slider6.jpg";
import cls from "@/assets/image/second/slider7.jpg";
import volvo from "@/assets/image/second/slider8.jpg";

const slider1 = [
  {
    src: mercedes,
  },
  {
    src: audi,
  },
  {
    src: bmw,
  },
  {
    src: bmw,
  },
];

const slider2 = [
  {
    src: porsche,
  },
  {
    src: golf,
  },
  {
    src: audia4,
  },
  {
    src: cls,
  },
  {
    src: volvo,
  },
];

export default function ThirdSection() {
  const thirdSectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: thirdSectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const height = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <>
      <div
        ref={thirdSectionRef}
        className="w-full bg-black flex flex-col gap-[3vw] relative z-1"
      >
        <motion.div
          className="flex relative gap-[3vw] w-[350vw] md:w-[300vw] -left-[10vw] "
          style={{ x: x1 }}
        >
          {slider1.map((image, index) => {
            return (
              <Link
                href="/portfolio"
                key={index}
                className="w-[250px] md:w-[12%] h-[25vh] md:h-[24vh] flex items-center justify-center cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src={image.src}
                    alt="Portfolio"
                    className="object-cover grayscale hover:grayscale-0 duration-300 ease-in rounded-md"
                  />
                </div>
              </Link>
            );
          })}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="flex relative gap-[3vw] w-[300vw] md:w-[200vw] -left-[10vw]"
        >
          {slider2.map((image, index) => {
            return (
              <Link
                href="/portfolio"
                key={index}
                className="w-[250px] md:w-[12%] h-[25vh] md:h-[20vh] flex items-center justify-center cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src={image.src}
                    alt="Portfolio"
                    className="object-cover grayscale hover:grayscale-0 duration-300 ease-in rounded-md"
                  />
                </div>
              </Link>
            );
          })}
        </motion.div>

        <motion.div
          className="relative mt-[100px] w-full z-[20]"
          style={{ height }}
          data-scroll
          data-scroll-speed="0.01"
        >
          <div className="h-[1000%] lg:h-[1550%] w-[120%] bg-black -left-[10%] z-1 absolute inset-0 rounded-b-full"></div>
        </motion.div>
      </div>
    </>
  );
}
