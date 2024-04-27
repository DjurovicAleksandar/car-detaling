import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Logo from "@/assets/logo/Autopoliranje.png";
import DropdownList from "./DropdownLinks";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const router = useRouter();
  const [webRoute, setWebRoute] = useState(router.pathname);
  const isCurrentRoute = (route: string) => setWebRoute(route);

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
      className={`fixed left-1/2 mt-6 -translate-x-1/2 bg-zinc-800/70 px-4 md:px-16 py-2 z-[100] flex justify-between items-center rounded-full w-[95%] mx-auto`}
    >
      <div className="w-[6rem] md:w-[8rem]">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
      </div>
      {/* Mobile */}
      <MobileNav />
      {/* Desktop */}
      <div className="hidden md:flex gap-16 uppercase text-lg font-extralight">
        <Link className="link" href="/">
          Početna
        </Link>
        <li className="link">
          <DropdownList isCurrRoute={isCurrentRoute} webRoute={webRoute} />
        </li>
        <Link className="link" href="/portfolio">
          Portfolio
        </Link>
        <Link className="link text-redCol font-medium" href="/kontakt">
          Kontakt
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navigation;
