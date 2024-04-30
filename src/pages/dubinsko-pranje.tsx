import AboutDubinsko from "@/components/dubinsko-pranje/AboutDubinsko";
import DubinskoHero from "@/components/dubinsko-pranje/DubinskoHero";
import PaketiDubinsko from "@/components/dubinsko-pranje/PaketiDubinsko";
import Head from "next/head";
import React from "react";

const DubinskoPranje = () => {
  return (
    <>
      <Head>
        <title>Sikima Auto Detailing | Dubinsko Pranje</title>
        <meta
          name="description"
          content="Sikima Auto Detailing: Vaša vrhunska destinacija za dubinsko pranje enterijera - oživite svaki detalj unutrašnjosti vašeg vozila s našom pažljivošću i stručnošću."
        />
        <meta
          name="keywords"
          content="sikima auto detailing, detailing, poliranje, keramicka zastita, auto detailing, dubinsko pranje, detailing enterijera, korekcija laka"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Sikima Auto Detailing - Dubisnko Pranje"
        />
        <meta
          property="og:description"
          content="Sikima Auto Detailing: Vaša vrhunska destinacija za dubinsko pranje enterijera - oživite svaki detalj unutrašnjosti vašeg vozila s našom pažljivošću i stručnošću."
        />
        <meta property="og:image" content="/sikima.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DubinskoHero />
        <AboutDubinsko />
        <PaketiDubinsko />
      </div>
    </>
  );
};

export default DubinskoPranje;
