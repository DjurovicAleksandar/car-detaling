"use client";
import Image from "next/image";
import scroll from "@/assets/image/header/scroll.png";
import videoPoster from "@/assets/image/header/video-poster.jpg";
import { useEffect, useLayoutEffect, useRef } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const phraseTitle = "CAR DETALING";

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
    if (videoRef.current === null) return;
    videoRef.current.play();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      controls.start("open");
    }, 700);
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate to the next section
      motionControls.start({
        y: 0,
      });

      // Wait for a short duration
      setTimeout(() => {
        // Animate back to the original position
        motionControls.start({
          y: -10,
        });
      }, 1000); // Adjust the duration between animations as needed
    }, 2000); // Adjust the total duration of the loop as needed

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
      <header className="w-full  relative overflow-hidden bg-black flex justify-center">
        {/* Video */}
        <div
          ref={backgroundVideo}
          data-scroll
          data-scroll-speed="-0.2"
          className="relative w-full h-[150vh]"
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
          className="absolute inset-0 w-full h-full p-24 pt-48 pb-2 text-gray-100 flex flex-col items-center justify-start"
        >
          <h1
            data-scroll
            data-scroll-speed="0.2"
            className="text-[14rem] leading-[12rem] opacity-70 text-center"
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
            className="font-thin w-1/2 text-[1.2rem] opacity-70 text-center"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            dolore in, maxime tempore, eum, autem minima aperiam iste doloribus
            id quos saepe quisquam amet velit temporibus at! Quidem, possimus
            ipsum!
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
