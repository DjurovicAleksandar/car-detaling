"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import detaling from "@/assets/image/second/detaling.jpg";

const phraseSubtitle =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore in, maxime tempore, eum, autem minima aperiam iste!";

const slideUp = {
  initial: {
    y: "100%",
    // color: "#000",
  },
  open: {
    y: "0%",
    // color: "#fff",
  },
  closed: {
    y: "100%",
  },
};

export default function SecondSection() {
  const secondConControls = useAnimation();
  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(nextSectionRef, { amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    secondConControls.start("open");

    return () => {
      secondConControls.start("closed");
    };
  }, [secondConControls, isInView]);

  return (
    <>
      <div ref={nextSectionRef} className="w-full h-screen bg-[#000]">
        <div className="w-full h-full relative">
          <div className="w-full absolute inset-0 p-24 flex items-start justify-end">
            <p className=" text-white text-2xl margin-0 w-1/2 mt-20 z-10">
              {phraseSubtitle.split(" ").map((word, i) => {
                return (
                  <span
                    className="inline-flex text-4xl relative overflow-hidden"
                    key={`${i}`}
                  >
                    <motion.span
                      variants={slideUp}
                      initial="initial"
                      exit="closed"
                      animate={secondConControls}
                      transition={{
                        duration: 0.5,
                        delay: 0.05 * i,
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
          {/* <Image/> */}
          <Image
            src={detaling}
            alt="Detaling"
            className="w-full h-full"
            data-scroll
            data-scroll-speed="0.1"
          />
        </div>
      </div>
    </>
  );
}
