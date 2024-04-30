import AboutDetailing from "@/components/detailing-enterijera/AboutDetailing";
import DetailingHero from "@/components/detailing-enterijera/DetailingHero";
import DetailingPaketi from "@/components/detailing-enterijera/DetailingPaketi";
import Head from "next/head";
import React from "react";

const DetailingEnterijera = () => {
  return (
    <>
      <Head>
        <title>Sikima Auto Detailing | Detailing Enterijera</title>
        <meta
          name="description"
          content="Sikima Auto Detailing: Vaša prvoklasna destinacija za besprekorno čišćenje enterijera vašeg vozila, pružajući vrhunsku uslugu i sjaj svakom detalju unutrašnjosti."
        />
        <meta
          name="keywords"
          content="sikima auto detailing, detailing, poliranje, keramicka zastita, auto detailing, dubinsko pranje, detailing enterijera, korekcija laka"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Sikima Auto Detailing - Detailing Enterijera"
        />
        <meta
          property="og:description"
          content="Sikima Auto Detailing: Vaša prvoklasna destinacija za besprekorno čišćenje enterijera vašeg vozila, pružajući vrhunsku uslugu i sjaj svakom detalju unutrašnjosti."
        />
        <meta property="og:image" content="/sikima.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DetailingHero />
        <AboutDetailing />
        <DetailingPaketi />
      </div>
    </>
  );
};

export default DetailingEnterijera;
