import React, { Key } from "react";
import { paketi } from "../poliranje/PaketiPoliranje";


const korekcijaPaketi: paketi[] = [
  {
    id: 1,
    paket: "Jednoslojno poliranje",
    opis: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Solutadolor quisquam cumque repudiandae, fugit natus quidem voluptat emaliquam hic at pariatur odio in neque id accusamus, libero iste praesentium magni.",
  },
  {
    id: 2,
    paket: "Dvoslojno poliranje",
    opis: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Solutadolor quisquam cumque repudiandae, fugit natus quidem voluptat emaliquam hic at pariatur odio in neque id accusamus, libero iste praesentium magni.",
  },
  {
    id: 3,
    paket: "Troslojno poliranje",
    opis: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Solutadolor quisquam cumque repudiandae, fugit natus quidem voluptat emaliquam hic at pariatur odio in neque id accusamus, libero iste praesentium magni.",
  },
];

const PaketiKorekcija = () => {
  return (
    <section className="w-full px-4 lg:px-28 pt-12 md:pt-20 bg-[#000000f2]">
      {korekcijaPaketi.map((paket) => (
        <div
          key={paket.id}
          className="flex flex-col items-center justify-center py-10 lg:py-20"
        >
          <div className="text-center w-full md:w-1/2">
            <h4 className="uppercase text-redCol text-2xl lg:text-5xl">
              {paket.paket}
            </h4>
            <p className="text-base lg:text-lg pt-6">{paket.opis}</p>
            <div className="border-b border-redCol mt-6 w-4/5 lg:w-3/5 mx-auto"></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PaketiKorekcija;
