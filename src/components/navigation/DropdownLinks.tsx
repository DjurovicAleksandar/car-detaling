import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "./Navigation";
import { IoIosArrowDown } from "react-icons/io";

const DropdownLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-5">
      <Link onClick={closeMenu} className="link" href="/">
        početna
      </Link>
      <div className="relative group h-full ">
        <p
          onClick={toggleDropdown}
          className="flex flex-row items-center cursor-pointer gap-2"
        >
          <span>Usluge</span>
          <IoIosArrowDown
            className={`transition-all ${isOpen ? "rotate-180" : ""}`}
          />
        </p>

        {/* dropdown */}
        <div className={`left-0 w-auto flex-col ${isOpen ? "flex" : "hidden"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="flex cursor-pointer items-center text-gray-400 py-2"
              onClick={closeMenu}
            >
              <span className="whitespace-nowrap pl-5">{link.link}</span>
            </Link>
          ))}
        </div>
      </div>
      <Link onClick={closeMenu} className="link" href="/portfolio">
        galerija
      </Link>
      <Link
        onClick={closeMenu}
        className="link text-redCol font-medium"
        href="/kontakt"
      >
        kontakt
      </Link>
    </div>
  );
};

export default DropdownLinks;
