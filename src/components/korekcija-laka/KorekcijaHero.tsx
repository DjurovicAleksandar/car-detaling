import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import korekcija from "@/assets/poliranje/korekcija.jpg";

const phraseTitle = "KOREKCIJA LAKA";

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

const KorekcijaHero = () => {
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
          className="text-7xl md:text-[7rem] lg:text-[10rem] leading-[5rem] md:leading-[12rem] opacity-80 text-center"
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
          className="font-medium w-full leading-2 lg:leading-10 md:w-1/2 text-xl lg:text-[2.2rem] mt-20 md:mt-10 opacity-70 text-center"
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
          Zbog faktora kao što su vremenski uslovi i svakodnevna izloženost,
          mogu se javiti nedostaci na površini laka. Korekcija laka je ključni
          korak u održavanju vozila koji podrazumeva pažljivo poliranje kako bi
          se uklonili ogrebotine, mrlje i druge nepravilnosti.
        </motion.p>
      </div>
      <div className="w-full h-full">
        <Image
          src={korekcija}
          alt="poliranje"
          className="w-full h-full object-cover"
        />{" "}
      </div>
    </section>
  );
};

export default KorekcijaHero;
