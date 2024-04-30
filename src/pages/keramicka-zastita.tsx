import AboutKeramicka from "@/components/keramicka-zastita/AboutKeramicka";
import KeramickaHero from "@/components/keramicka-zastita/KeramickaHero";
import PaketiKeramicka from "@/components/keramicka-zastita/PaketiKeramicka";
import Head from "next/head";
import React from "react";

const KeramickaZastita = () => {
  return (
    <>
      <Head>
        <title>Sikima Auto Detailing | Keramička Zaštita</title>
        <meta
          name="description"
          content="Sikima Auto Detailing: Vaša sigurna luka za keramičku zaštitu, pružajući vašem vozilu dugotrajan sjaj i otpornost na sve izazove na putu."
        />
        <meta
          name="keywords"
          content="sikima auto detailing, detailing, poliranje, keramicka zastita, auto detailing, dubinsko pranje, detailing enterijera, korekcija laka"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Sikima Auto Detailing - Keramička Zaštita"
        />
        <meta
          property="og:description"
          content="Sikima Auto Detailing: Vaša sigurna luka za keramičku zaštitu, pružajući vašem vozilu dugotrajan sjaj i otpornost na sve izazove na putu."
        />
        <meta property="og:image" content="/sikima.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <KeramickaHero />
        <AboutKeramicka />
        <PaketiKeramicka />
      </div>
    </>
  );
};

export default KeramickaZastita;
