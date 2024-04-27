import KorekcijaAbout from "@/components/korekcija-laka/KorekcijaAbout";
import KorekcijaHero from "@/components/korekcija-laka/KorekcijaHero";
import PaketiKorekcija from "@/components/korekcija-laka/PaketiKorekcija";
import React from "react";

const KorekcijaLaka = () => {
  return (
    <>
      <KorekcijaHero />
      <KorekcijaAbout />
      <PaketiKorekcija />
    </>
  );
};

export default KorekcijaLaka;
