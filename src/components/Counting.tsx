"use client";
import Image from "next/image";
import years from "@/assets/icons/birthday-cake.png";
import certificate from "@/assets/icons/diploma.png";
import success from "@/assets/icons/car-wash.png";
import connection from "@/assets/icons/business.png";

import CountUp from "react-countup";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Counting = () => {
  const countRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(countRef, { once: true });
  return (
    <div className="w-full px-4 md:px-56 pb-56 bg-black text-white relative">
      <div
        ref={countRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 gap-x-[10vw] items-center shadow-md"
      >
        {isInView && (
          <>
            <div className="text-center mb-10">
              <Image src={years} alt="" width={40} height={40} />
              <h3 className="text-6xl md:text-8xl font-bold">
                <CountUp start={0} end={2018} duration={2} />
              </h3>
              <p className="pt-6 text-xl">Sa vama od</p>
            </div>
            <div className="text-center mb-10">
              <Image src={certificate} alt="" width={40} height={40} />
              <h3 className="text-6xl md:text-8xl font-bold">
                <CountUp start={0} end={20} duration={2} />+
              </h3>
              <p className="pt-6 text-xl">Certifikata</p>
            </div>
            <div className="text-center mb-10">
              <Image src={success} alt="" width={40} height={40} />
              <h3 className="text-6xl md:text-8xl font-bold">
                <CountUp start={0} end={300} duration={2} />+
              </h3>
              <p className="pt-6 text-xl">Zadovoljnih mušterija</p>
            </div>
            <div className="text-center mb-10">
              <Image src={connection} alt="" width={40} height={40} />
              <h3 className="text-6xl md:text-8xl font-bold">
                <CountUp start={0} end={50} duration={2} />+
              </h3>
              <p className="pt-6 text-xl">Ostvarenih saradnji</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Counting;
