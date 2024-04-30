import KorekcijaAbout from "@/components/korekcija-laka/KorekcijaAbout";
import KorekcijaHero from "@/components/korekcija-laka/KorekcijaHero";
import PaketiKorekcija from "@/components/korekcija-laka/PaketiKorekcija";
import Head from "next/head";
import React from "react";

const KorekcijaLaka = () => {
  return (
    <>
      <Head>
        <title>Sikima Auto Detailing | Korekcija Laka</title>
        <meta
          name="description"
          content="Sikima Auto Detailing: Osiguravamo besprekornu korekciju laka vašeg vozila, vraćajući mu sjaj i izgled kao prvog dana."
        />
        <meta
          name="keywords"
          content="sikima auto detailing, detailing, poliranje, keramicka zastita, auto detailing, dubinsko pranje, detailing enterijera, korekcija laka"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Sikima Auto Detailing - Korekcija Laka"
        />
        <meta
          property="og:description"
          content="Sikima Auto Detailing: Osiguravamo besprekornu korekciju laka vašeg vozila, vraćajući mu sjaj i izgled kao prvog dana."
        />
        <meta property="og:image" content="/sikima.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <KorekcijaHero />
        <KorekcijaAbout />
        <PaketiKorekcija />
      </div>
    </>
  );
};

export default KorekcijaLaka;
