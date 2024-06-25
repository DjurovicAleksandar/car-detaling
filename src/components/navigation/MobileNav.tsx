import React from "react";

import { CgClose } from "react-icons/cg";
import DropdownLinks from "./DropdownLinks";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo/Autopoliranje.png";

const MobileNav = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="fixed -top-2 left-3 flex h-full min-h-screen w-full justify-end md:hidden">
      <div className="h-full w-[95%] bg-zinc-800 p-4">
        <div className="flex justify-end pt-2 pr-2">
          <CgClose onClick={closeMenu} className="text-3xl cursor-pointer" />
        </div>
        <div className="flex flex-col uppercase text-xl font-light pt-16 px-6">
          <DropdownLinks closeMenu={closeMenu} />
        </div>
        <div className="w-full flex justify-center p-4">
          <Link href="/">
            <Image className="w-[200px]" src={Logo} alt="Sikima Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
