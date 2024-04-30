import AboutUs from "@/components/poliranje/AboutUs";
import PaketiPoliranje from "@/components/poliranje/PaketiPoliranje";
import PoliranjeHero from "@/components/poliranje/PoliranjeHero";
import Head from "next/head";
import React from "react";

const Poliranje = () => {
  return (
    <>
      <Head>
        <title>Sikima Auto Detailing | Poliranje</title>
        <meta
          name="description"
          content="Sikima Auto Detailing: Naša stručna usluga poliranja pruža vašem vozilu ne samo sjaj, već i besprekoran izgled koji se ističe na putu."
        />
        <meta
          name="keywords"
          content="sikima auto detailing, detailing, poliranje, keramicka zastita, auto detailing, dubinsko pranje, detailing enterijera, korekcija laka"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Sikima Auto Detailing - Poliranje" />
        <meta
          property="og:description"
          content="Sikima Auto Detailing: Naša stručna usluga poliranja pruža vašem vozilu ne samo sjaj, već i besprekoran izgled koji se ističe na putu."
        />
        <meta property="og:image" content="/sikima.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PoliranjeHero />
        <AboutUs />
        <PaketiPoliranje />
      </div>
    </>
  );
};

export default Poliranje;
