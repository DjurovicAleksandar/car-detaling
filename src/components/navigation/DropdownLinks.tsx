import Link from "next/link";
import { useRouter } from "next/router";
import React, { Key, useEffect, useState } from "react";

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

interface DropdownProps {
  isCurrRoute: (route: string) => void;
  webRoute: string;
  mobile?: boolean;
}

const DropdownList: React.FC<DropdownProps> = ({
  isCurrRoute,
  webRoute,
  mobile,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRoute = (url: string) => {
      console.log("Route is changed to:", url);

      setOpen(false);
    };

    const handleScroll = () => setOpen(false);

    router.events.on("routeChangeStart", handleRoute);

    window.addEventListener("scroll", handleScroll);

    return () => {
      router.events.off("routeChangeStart", handleRoute);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  const toggleDropdown = () => {
    isCurrRoute("/usluge");
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`${
          !mobile
            ? "before:absolute before:-top-14 before:w-full before:h-5 "
            : ""
        } relative ${
          webRoute === "/usluge" ? "before:block" : "before:hidden"
        } hover:before:block "`}
      >
        <span>USLUGE</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {open && (
        <div
          className="absolute text-left items-center justify-center w-[13rem] -left-11 md:-left-0 mt-2 md:shadow-lg md:w-48"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-zinc-800 md:bg-zinc-800 lg:shadow w-full">
            <ul className="w-full h-full">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  <li className="w-full duration-300 ease-linear md:hover:bg-black hover:text-white hover:font-semibold p-2 md:p-4">
                    <span className="uppercase text-sm md:text-lg">
                      {link.link}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownList;
