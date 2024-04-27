import React, { useState } from "react";
import Link from "next/link";

import DropdownList from "./DropdownLinks";
import Logo from "@/assets/logo/Autopoliranje.png";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

const menuVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mobileLinkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const [webRoute, setWebRoute] = useState(router.pathname);
  const isCurrentRoute = (route: string) => setWebRoute(route);

  const toggleMenu = () => {
    setIsActive((preOpen) => !preOpen);
  };

  return (
    <>
      <div onClick={toggleMenu} className="flex md:hidden cursor-pointer">
        <div className="text-base font-medium uppercase">menu</div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full py-6 h-screen origin-top rounded-xl bg-zinc-800/90"
          >
            <div className="flex w-11/12 mx-auto h-full flex-col">
              <div className="flex flex-col-reverse items-end justify-between">
                <Link href="/">
                  <Image src={Logo} alt="logo" />
                </Link>
                <p
                  onClick={toggleMenu}
                  className="text-base font-medium uppercase"
                >
                  close
                </p>
              </div>
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full items-center gap-y-10 text-2xl uppercase"
              >
                <div>
                  <li className="w-full">
                    <DropdownList
                      isCurrRoute={isCurrentRoute}
                      webRoute={webRoute}
                    />
                  </li>
                </div>
                <Link onClick={toggleMenu} href="/portfolio">
                  Portfolio
                </Link>
                <Link
                  onClick={toggleMenu}
                  className=" text-redCol font-medium"
                  href="/kontakt"
                >
                  Kontakt
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
