"use client";

import ProjectSection from "@/components/ProjectSection";
import ThirdSection from "@/components/ThirdSection";
import SecondSection from "@/components/SecondSection";
import FirstSection from "@/components/FirstSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sikima Auto Detailing</title>
        <meta
          name="description"
          content="Sikima Auto Detailing: Vaša destinacija za vrhunsku auto detailing uslugu - detaljno čišćenje, poliranje, keramička zaštita i korekcija laka, sve na jednom mestu!"
        />
        <meta
          name="keywords"
          content="sikima auto detailing, detailing, poliranje, keramicka zastita, auto detailing, dubinsko pranje, detailing enterijera, korekcija laka"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Sikima Auto Detailing" />
        <meta
          property="og:description"
          content="Sikima Auto Detailing: Vaša destinacija za vrhunsku auto detailing uslugu - detaljno čišćenje, poliranje, keramička zaštita i korekcija laka, sve na jednom mestu!"
        />
        <meta property="og:image" content="/sikima.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <FirstSection />
        <ProjectSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </>
  );
}
