import Image from "next/image";
import detaling from "@/assets/image/second/detaling.jpg";
import carPolishing from "@/assets/image/services/carPolishing.jpg";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ServicesArray from "./ServicesArray";

// http://mocogledala.co/wp-content/uploads/2024/03/1374590-Person-Polish-Black-1080X1920.mp4

const services = [
  { name: "Detaling", image: detaling },
  { name: "Poliranje", image: carPolishing },
  { name: "Keramika", image: detaling },
  { name: "Premium pranje", image: carPolishing },
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
    <div className="p-24 w-full bg-black">
      <div className="flex h-[600px] w-full justify-between items-start">
        <div className="h-full w-[40%] relative" ref={imageDivContainer}>
          <Image
            src={services[choosenImage ? choosenImage : 0].image}
            alt="project image"
            className="object-cover"
            fill
          />
        </div>
        <div className=" w-[20%] text-[1vw]">
          <p className="">
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and tola
            amaia.
          </p>
        </div>
        <div className="h-full w-[20%] text-[1.2vw] flex items-end">
          <p>
            Some, like the southern viscacha, vicuña and Darwins rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable.
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
