"use client";

import Image from "next/image";
import Logo from "@/assets/logo/Autopoliranje.png";

import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Key, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

//icons
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import MobileNav from "./MobileNav";
import { useAutoAnimate } from "@formkit/auto-animate/react";

//links

export type links = {
  id: Key;
  link: string;
  href: string;
};

export const navLinks: links[] = [
  {
    id: 1,
    link: "Poliranje",
    href: "poliranje",
  },
  {
    id: 2,
    link: "Keramička zaštita",
    href: "keramicka-zastita",
  },
  {
    id: 3,
    link: "Dubinsko pranje",
    href: "dubinsko-pranje",
  },
  {
    id: 4,
    link: "Detailing enterijera",
    href: "detailing-enterijera",
  },
  {
    id: 5,
    link: "Korekcija laka",
    href: "korekcija-laka",
  },
];

const Navigation = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationParent] = useAutoAnimate();

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    <nav
      ref={navRef && animationParent}
      className="fixed left-1/2 -translate-x-1/2 px-6 mt-2 md:mt-4 gap-10 md:px-14 flex items-center justify-between w-[95%] z-[100] bg-zinc-800/70 mx-auto rounded-full"
    >
      <div className="">
        <Link href="/">
          <Image
            className="w-[100px] md:w-[130px] xl:w-[160px]"
            src={Logo}
            alt="Sikima Logo"
          />
        </Link>
      </div>

      {/*Mobile*/}
      {isMenuOpen && <MobileNav closeMenu={closeMenu} />}

      {/*Desktop */}
      <div className="hidden md:flex uppercase gap-x-16 text-lg xl:text-xl font-light">
        <Link className="link" href="/">
          početna
        </Link>
        <div className="relative group h-full ">
          <p className="flex flex-row items-center cursor-pointer gap-2">
            <span>Usluge</span>
            <IoIosArrowDown className="transition-all group-hover:rotate-180" />
          </p>

          {/* dropdown */}
          <div className="absolute left-0 hidden w-auto py-3 gap-1 flex-col bg-zinc-800/80 transition-all group-hover:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="flex cursor-pointer items-center text-gray-300 hover:text-white px-10 py-2"
              >
                <span className="whitespace-nowrap pl-3">{link.link}</span>
              </Link>
            ))}
          </div>
        </div>
        <Link className="link" href="/portfolio">
          galerija
        </Link>
        <Link className="link text-redCol font-medium" href="/kontakt">
          kontakt
        </Link>
      </div>
      <CgMenuRight
        onClick={openMenu}
        className="text-3xl cursor-pointer md:hidden"
      />
    </nav>
  );
};

export default Navigation;
