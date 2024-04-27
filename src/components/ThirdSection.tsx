"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import slider1 from "@/assets/image/second/slider1.jpg";
import Link from "next/link";

export default function ThirdSection() {
  const thirdSectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: thirdSectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
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
          {Array.from({ length: 5 }, (i) => slider1).map((image, index) => {
            return (
              <Link
                href="#"
                key={index}
                className="w-[250px] md:w-[25%] h-[25vh] md:h-[20vh] flex items-center justify-center cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src={image}
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
          {Array.from({ length: 5 }, (i) => slider1).map((image, index) => {
            return (
              <Link
                href="#"
                key={index}
                className="w-[250px] md:w-[25%] h-[25vh] md:h-[20vh] flex items-center justify-center cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src={image}
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
