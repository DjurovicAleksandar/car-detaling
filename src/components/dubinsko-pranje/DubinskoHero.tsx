import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import dubinsko from "@/assets/poliranje/dubinsko-pranje-auta.jpg";

const phraseTitle = "DUBINSKO PRANJE";

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

const DubinskoHero = () => {
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controls.start("open");
    }, 700);
  }, [controls]);

  return (
    <section className="relative w-full h-screen lg:h-[800px] bg-black overflow-hidden">
      <div className="absolute bottom-0 h-4/5 w-full bg-gradient-to-t from-[#000000f2] to-transparent"></div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center">
        <h1
          data-scroll
          data-scroll-speed="0.2"
          className="text-6xl md:text-[7rem] lg:text-[10rem] leading-[5rem] md:leading-[12rem] opacity-80 text-center"
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
          className="font-light w-full leading-2 lg:leading-10 md:w-1/2 text-lg px-2 lg:text-[2rem] mt-20 md:mt-10 opacity-70 text-center"
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
          Iako redovno održavate svoje vozilo, povremeno je potrebno detaljno
          čišćenje kako biste uklonili duboke naslage prljavštine i
          nečistoća.Ovaj proces ne samo da čisti vaše vozilo do najsitnijih
          detalja, već i produžava njegovu trajnost i očuvava vrednost.
        </motion.p>
      </div>
      <div className="w-full h-full">
        <Image
          src={dubinsko}
          alt="poliranje"
          className="w-full h-full object-cover"
        />{" "}
      </div>
    </section>
  );
};

export default DubinskoHero;
