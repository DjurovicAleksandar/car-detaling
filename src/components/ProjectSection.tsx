"use client";
import Image from "next/image";
import keramickaZastita from "@/assets/image/second/keramicka-zastita.jpg";
import carPolishing from "@/assets/image/second/poliranje-rupes.jpg";
import dubinsko from "@/assets/image/second/dubinsko-pranje-vozila.jpg";
import detailing from "@/assets/image/second/detailingEnt.jpg";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ServicesArray from "./ServicesArray";

// http://mocogledala.co/wp-content/uploads/2024/03/1374590-Person-Polish-Black-1080X1920.mp4

const services = [
  { name: "Poliranje", image: carPolishing },
  { name: "Keramička zaštita", image: keramickaZastita },
  { name: "Dubinsko pranje", image: dubinsko },
  { name: "Detailing enterijera", image: detailing },
  { name: "Korekcija laka", image: carPolishing },
];

function ProjectSection() {
  const [choosenImage, setChoosenImage] = useState<number | null>(0);
  const imageDivContainer = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: imageDivContainer.current,
        start: "top-=100px",
        end: "400px",
        pin: true,
      });
    }, imageDivContainer);
    return () => ctx.revert();
  }, []);
  return (
    <div className="pt-20 md:pt-0 p-4 md:p-24 w-full bg-black">
      <div className="flex flex-col md:flex-row h-[300px] md:h-[600px] w-full gap-x-4 justify-between items-start">
        <div
          className="h-full w-[40%] hidden md:flex relative"
          ref={imageDivContainer}
        >
          <Image
            src={services[choosenImage ? choosenImage : 0].image}
            alt="project image"
            className="object-cover"
            fill
          />
        </div>
        <div className="w-full md:w-[23%] text-justify text-sm md:text-base lg:text-xl">
          <p className="">
            <span className="text-redCol">Sikima Auto Detailing</span> vam
            osigurava da svaki korak u procesu, od{" "}
            <span className="text-redCol">poliranja</span> do{" "}
            <span className="text-redCol">dubinskog</span> pranja, bude obavljen
            sa vrhunskom pažnjom i preciznošću. Bezbjednost vašeg vozila je naš{" "}
            <span className="text-redCol">prioritet</span>, dok je vaše
            povjerenje u nas naša najveća{" "}
            <span className="text-redCol">nagrada</span>.{" "}
          </p>
        </div>
        <div className="h-fit md:h-full w-full md:w-[29%] text-sm md:text-base lg:text-xl text-justify flex items-end">
          <p className="">
            Naša stručnost, potvrđena sertifikatima od{" "}
            <span className="text-redCol">CarPro tima</span> i ekspertizom u{" "}
            <span className="text-redCol">BigFoot sistemu</span>, garantuje da
            će vaše vozilo postići{" "}
            <span className="text-redCol">vrhunsku perfekciju</span>. Svaki
            detalj obrade vozila je pažljivo vođen kako bismo osigurali
            besprekoran <span className="text-redCol">sjaj</span> i sigurnost na
            svakom koraku. Sa nama, vaše vozilo će{" "}
            <span className="text-redCol">zablistati</span> na putu, pružajući
            vam potpuno <span className="text-redCol">poverenje</span> u našu
            sposobnost da dostignemo vrhunske rezultate.
          </p>
        </div>
      </div>

      <ServicesArray
        setChoosenImage={setChoosenImage}
        choosenImage={choosenImage}
      />
    </div>
  );
}

export default ProjectSection;
