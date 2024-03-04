import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "./Magnetic";

function Footer() {
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

  return (
    <footer ref={footerRef} className="h-screen w-full bg-black/95 px-24 pt-24">
      <h2 data-scroll data-scroll-speed={0.2} className="text-9xl ">
        Lets detail your car
      </h2>
      <motion.p
        // data-scroll
        // data-scroll-speed={0.2}
        className="w-1/2 mt-10 font-thin"
        style={{ opacity: opacity, y: y }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        soluta voluptate nisi vel accusamus numquam quos, magni deleniti. harum
        minima sunt animi ducimus recusandae maxime? Consequuntur illum tempora
        similique ullam.
      </motion.p>
      <div
        data-scroll
        data-scroll-speed={0.1}
        className="w-full flex justify-around mt-24 border-b"
      >
        <Magnetic>
          <motion.button
            onClick={() => window.open("/kontakt", "_self")}
            className="relative block px-8 py-12 rounded-full bg-yellow-400"
            style={{ left: buttonX, rotate: buttonRotate }}
          >
            Kontant
          </motion.button>
        </Magnetic>
      </div>
      <div className="flex justify-between items-end py-8 mt-20">
        <p>Gr8Solutions Agency</p>
        <p>© Copyright {date.getFullYear()} Sva prava zadržana.</p>
      </div>
    </footer>
  );
}

export default Footer;
