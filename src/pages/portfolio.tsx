import Image from "next/image";
import React from "react";
import { ImagesSwipe2 } from "@/components/scrollPortfolio/imagesSwipe2";
import { ImagesSwipe3 } from "@/components/scrollPortfolio/imagesSwipe3";
import { ImagesSwipe } from "@/components/scrollPortfolio/imagesSwipe";
import Head from "next/head";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Sikima Auto Detailing | Portfolio</title>
        <meta
          name="description"
          content="Sikima Auto Detailing: Pogledajte naš impresivan portfolio vozila koja smo transformisali u remek-dela na točkovima - vaš automobil može biti sledeći!"
        />
        <meta
          name="keywords"
          content="sikima auto detailing, detailing, portfolio, poliranje, keramicka zastita, auto detailing, dubinsko pranje, detailing enterijera, korekcija laka"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Sikima Auto Detailing - Portfolio" />
        <meta
          property="og:description"
          content="Sikima Auto Detailing: Pogledajte naš impresivan portfolio vozila koja smo transformisali u remek-dela na točkovima - vaš automobil može biti sledeći!"
        />
        <meta property="og:image" content="/sikima.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="w-full pt-[5rem] md:pt-[10rem] bg-[#000000f2] overflow-hidden">
          <div className="flex flex-col md:gap-y-20 px-4 md:px-24 pt-20">
            <div
              data-scroll
              data-scroll-speed={0.2}
              className="h-[400px] md:h-[350px] flex flex-col gap-y-10"
            >
              <h1 className="text-5xl lg:text-8xl text-left capitalize">
                naša galerija | naš rad
              </h1>
              <p className="text-lg lg:text-xl w-full md:w-2/3">
                Dobrodošli u Sikima Auto Detailing portfolio, gdje sjaj susreće
                stručnost. Ovdje možete pronaći impresivnu galeriju vozila koje
                smo oživjeli svojim detaljnim radom. Istaknite se na cesti s
                našim besprijekornim rezultatima - pregledajte našu kolekciju
                sada i pridružite se zadovoljnim klijentima koji su svoje
                automobile povjerili našem timu stručnjaka.
              </p>
            </div>

            <ImagesSwipe />
            <ImagesSwipe2 />
            <ImagesSwipe3 />
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
