"use client";
import Image from "next/image";
import scroll from "@/assets/image/header/scroll.png";
import videoPoster from "@/assets/image/header/video-poster.jpg";
import { useEffect, useLayoutEffect, useRef } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const phraseTitle = "AUTO DETAILING SIKIMA";

const opacity = {
  initial: {
    opacity: 0,
    // color: "#000",
  },
  open: {
    opacity: 1,
    // color: "#fff",
  },
};

export default function FirstSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  const backgroundVideo = useRef<HTMLDivElement | null>(null);

  const controls = useAnimation();
  const motionControls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controls.start("open");
    }, 700);
  }, [controls]);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      motionControls.start({
        y: 0,
      });

      setTimeout(() => {
        motionControls.start({
          y: -10,
        });
      }, 1000);
    }, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [motionControls]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "500px",
      },
    });

    timeline.fromTo(
      backgroundVideo.current,
      { clipPath: `circle(35%)` },
      { clipPath: "circle(100%)", duration: 1 }
    );
  }, []);

  return (
    <>
      <header className="w-full relative overflow-hidden bg-black flex justify-center">
        {/* Video */}
        <div
          ref={backgroundVideo}
          data-scroll
          data-scroll-speed="-0.2"
          className="relative w-full h-[100vh] md:h-[150vh]"
        >
          <video
            ref={videoRef}
            src="http://mocogledala.co/wp-content/uploads/2024/03/headerVideo.mp4"
            preload="none"
            poster={videoPoster.src}
            muted
            loop
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-[#000000f2] to-transparent"></div>
          <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-[#000000f2] to-transparent"></div>
        </div>
        {/* Overlay */}
        <div
          ref={container}
          className="absolute inset-0 w-full h-full mt-0 md:mt-14 lg:mt-40 p-4 md:p-24 pt-48 pb-2 text-gray-100 flex flex-col items-center justify-start"
        >
          <h1
            data-scroll
            data-scroll-speed="0.2"
            className="text-6xl md:text-8xl lg:text-[12rem] leading-[5rem] md:leading-[8rem] lg:leading-[12rem] opacity-70 text-center"
          >
            {phraseTitle
              .replaceAll(" ", "-")
              .split(" ")
              .join(" ")
              .split("")
              .map((letter, index) => {
                let newLetter = "";
                if (letter === "-") newLetter = " ";

                return (
                  <motion.span
                    key={`${index}`}
                    variants={opacity}
                    initial="initial"
                    animate={controls}
                    transition={{
                      duration: 1,
                      delay: 0.1 * index,
                    }}
                  >
                    {letter === "-" ? newLetter : letter}
                  </motion.span>
                );
              })}
          </h1>
          <motion.p
            className="font-medium text-redCol w-full md:w-1/2 text-2xl lg:text-[2.2rem] mt-10 opacity-70 text-center"
            initial={{
              y: "5px",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 0.5,
              ease: "easeIn",
            }}
            data-scroll
            data-scroll-speed="0.2"
          >
            AUTO DETAILING | AUTO CENTAR
          </motion.p>
          <AnimatePresence mode="wait">
            <motion.button
              className="mx-auto mt-10 cursor-pointer flex flex-col items-center justify-center"
              onClick={(e) => {
                if (nextSectionRef.current) {
                  window.scrollTo({
                    top: nextSectionRef.current.offsetTop / 2,
                    behavior: "smooth",
                  });
                }
              }}
              animate={motionControls}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <span className="font-thin text-lg opacity-50">SCROLL</span>
              <Image
                alt="Scroll"
                src={scroll}
                width={30}
                height={30}
                className="opacity-50"
              />
            </motion.button>
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
