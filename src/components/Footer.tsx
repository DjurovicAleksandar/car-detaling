import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "./Magnetic";
import { useRouter } from "next/router";
import Image from "next/image";

import logo00 from "@/assets/logo/001.png";

function Footer() {
  const router = useRouter();
  const footerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["300px end", "end end"],
  });
  const date = new Date();
  const buttonX = useTransform(scrollYProgress, [0.5, 1], [0, 300]);
  const buttonRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);

  const location = router.pathname === "/kontakt";

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black/95 md:px-24 px-4 pt-[10rem] xl:pt-[20rem] pb-10"
    >
      <h2
        data-scroll
        data-scroll-speed={0.2}
        className="text-6xl md:text-7xl lg:text-9xl "
      >
        Dovedimo Vaš auto do perfekcije!
      </h2>
      <motion.p
        // data-scroll
        // data-scroll-speed={0.2}
        className="w-full md:w-1/2 mt-0 lg:mt-10 font-thin"
        style={{ opacity: opacity, y: y }}
      >
        Nalazite se korak bliže savršenoj brizi o vašem vozilu. Kontaktirajte
        nas kako biste saznali više o našim uslugama ili zakazali termin. Vaša
        bezbednost i zadovoljstvo su naš prioritet, i radujemo se prilici da vam
        pružimo vrhunsku uslugu koja će vašem vozilu vratiti sjaj i eleganciju.
      </motion.p>
      <div
        data-scroll
        data-scroll-speed={0.1}
        className="w-full flex justify-around mt-24 border-b"
      >
        <Magnetic>
          <motion.button
            onClick={() => window.open("/kontakt", "_self")}
            className="md:relative block px-8 py-12 rounded-full bg-yellow-400"
            style={{ left: buttonX, rotate: buttonRotate }}
          >
            {location ? <span>Početna</span> : <span>Kontakt</span>}
          </motion.button>
        </Magnetic>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 py-8 mt-10 lg:mt-20">
        <Image src={logo00} width={200} height={200} alt="" />
        <p className="text-sm md:text-base">
          © Copyright {date.getFullYear()} Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
