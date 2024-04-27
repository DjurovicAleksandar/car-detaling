import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import keramicka from "@/assets/image/second/keramicka-zastita.jpg";

const AboutKeramicka = () => {
  return (
    <section className="w-full px-4 lg:px-28 pt-12 md:pt-20 bg-[#000000f2]">
      <div className="w-full h-full flex flex-col md:flex-row py-30 items-center justify-between">
        <div data-scroll data-scroll-speed="0.01" className="w-full md:w-2/5">
          <Image
            className="w-full mx-auto"
            src={keramicka}
            alt="auto-keramicka-zastita"
          />
        </div>
        <motion.div
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
          className="flex flex-col gap-y-8 w-full md:w-3/6 pt-20 md:pt-0"
        >
          <p className="text-base lg:text-2xl">
            Tokom procesa <span className="text-redCol">poliranja vozila</span>,
            primenjujemo posebno dizajnirane mašine različitih veličina i
            abrazivnosti, prilagođene jedinstvenim potrebama svakog vozila.{" "}
            <span className="text-redCol">Svaki automobil</span> zahteva
            individualni tretman zbog varijacija u{" "}
            <span className="text-redCol">
              debljini, tvrdoći laka i stepenu oštećenja
            </span>
            . Nakon poliranja, preporučuje se nanos zaštitnog keramičkog premaza
            radi dugotrajne zaštite i prevencije oštećenja. Kod nas u{" "}
            <span className="text-redCol">Sikima Auto Detailing-u</span> pružamo
            vrhunsku keramičku zaštitu koja, uz redovno održavanje, garantuje
            trajnost od čak 5 godina.
          </p>
          <p className="text-base lg:text-2xl">
            <span className="text-redCol">Poliranje vozila</span> nije samo
            kozmetički postupak, već i{" "}
            <span className="text-redCol">investicija</span> u dugoročnu zaštitu
            i estetiku vašeg automobila. Osim što uklanja nepravilnosti i
            oštećenja na površini laka, poliranje takođe{" "}
            <span className="text-redCol">
              poboljšava sjaj i doprinosi dugotrajnom očuvanju boje
            </span>
            . Kroz precizno izabrane abrazivne materijale i profesionalne
            tehnike, poliranje pruža vozilu svjež izgled i{" "}
            <span className="text-redCol">štiti ga</span> od štetnih spoljašnjih
            uticaja kao što su UV zračenje, hemikalije i vremenski uslovi. Ova
            procedura ne samo da održava vaš automobil u vrhunskom stanju, već i{" "}
            <span className="text-redCol">
              povećava njegovu tržišnu vrednost
            </span>{" "}
            i estetski doživljaj.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutKeramicka;
