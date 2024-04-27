"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import detaling from "@/assets/image/second/detaling.jpg";

const phraseSubtitle =
  "Naša stručnost osigurava da vaše vozilo dobije najviši nivo pažnje i brige. Dovodimo vaše vozilo do perfekcije, pružajući vam potpuno poverenje u naš rad i rezultate.";

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
          <div className="w-full absolute inset-0 p-4 md:p-24 flex items-start justify-start md:justify-end">
            <p
              data-scroll
              data-scroll-speed={0.2}
              className=" text-white margin-0 w-full md:w-1/2 mt-40 md:mt-20 z-10"
            >
              {phraseSubtitle.split("  ").map((word, i) => {
                return (
                  <span
                    className="inline-flex text-2xl lg:text-4xl relative overflow-hidden"
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
            className="w-full h-full object-cover"
            data-scroll
            data-scroll-speed="0.1"
          />
        </div>
      </div>
    </>
  );
}
