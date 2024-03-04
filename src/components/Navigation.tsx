import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Navigation() {
  const navRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showNaw = gsap
      .fromTo(
        navRef.current,
        { top: "-200px", opacity: 0 },
        { top: "8px", opacity: 1, duration: 0.4 }
      )
      .progress(1);

    showNaw.play();

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showNaw.play() : showNaw.reverse();
      },
    });
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className={`fixed left-1/2  -translate-x-1/2 bg-white/20 px-16 py-6 z-[100] flex justify-between items-center rounded-full w-[95%]`}
    >
      <div className="text-4xl">Logo</div>
      <div className="flex gap-6">
        <Link href="#">Home</Link>
        <Link href="/usluge">Services</Link>
        <Link href="/kontakt">Contact</Link>
      </div>
    </motion.nav>
  );
}

export default Navigation;
