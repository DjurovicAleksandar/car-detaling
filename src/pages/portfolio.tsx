import Image from "next/image";
import React from "react";
import { ImagesSwipe2 } from "@/components/scrollPortfolio/imagesSwipe2";
import { ImagesSwipe3 } from "@/components/scrollPortfolio/imagesSwipe3";
import { ImagesSwipe } from "@/components/scrollPortfolio/imagesSwipe";

const Portfolio = () => {
  return (
    <section className="w-full pt-[5rem] md:pt-[10rem] bg-[#000000f2] overflow-hidden">
      <div className="flex flex-col md:gap-y-20 px-4 md:px-24 pt-20">
        <div
          data-scroll
          data-scroll-speed={0.2}
          className="h-[400px] md:h-[350px] flex flex-col gap-y-10"
        >
          <h1 className="text-7xl lg:text-9xl text-left capitalize">
            naš portfolio
          </h1>
          <p className="text-lg lg:text-xl w-full md:w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et hic
            minima voluptates ad recusandae incidunt officia, vero perferendis
            laborum sapiente tenetur consectetur cum sit voluptatibus aut soluta
            ipsum amet? Ut!
          </p>
        </div>

        <ImagesSwipe />
        <ImagesSwipe2 />
        <ImagesSwipe3 />
      </div>
    </section>
  );
};

export default Portfolio;
