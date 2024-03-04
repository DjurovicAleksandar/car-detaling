import Link from "next/link";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Magnetic from "@/components/Magnetic";

function Contact() {
  const contactRef = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["end start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <div ref={contactRef} className="w-full bg-black/95 p-24 pt-48">
      <h2 data-scroll data-scroll-speed={0.2} className="text-8xl w-1/2">
        You need help with your car? Get in touch with us
      </h2>
      <div className="flex items-start gap-[3vw]">
        {/* form */}
        <form className="w-full" data-scroll data-scroll-speed={0.1}>
          <input
            type="text"
            placeholder="Ime i prezime *"
            className="w-full px-4 pt-12 border-collapse bg-transparent border-b"
          />
          <input
            type="tel"
            placeholder="Broj telefona *"
            className="w-full px-4 pt-12 border-collapse bg-transparent border-b"
          />
          <input
            type="email"
            placeholder="Email adresa (opciono)"
            className="w-full px-4 pt-12 border-collapse bg-transparent border-b"
          />
          <select
            className="w-full px-4 pt-12 border-collapse bg-transparent border-b text-white/60"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Odaberite uslugu
            </option>
            <option className="bg-black border-none" value="poliranje">
              Poliranje
            </option>
            <option className="bg-black border-none" value="pranje">
              Pranje
            </option>
            <option className="bg-black border-none" value="detaling">
              Detaling
            </option>
          </select>
          <textarea
            placeholder="Poruka"
            className="w-full px-4 pt-6 border-collapse bg-transparent border-b resize-none h-36"
          />

          <Magnetic xSpread={0.2} ySpread={0.2}>
            <input
              type="submit"
              value="Pošalji"
              className="w-full mt-4 p-4 text-center bg-yellow-400 rounded-md cursor-pointer"
            />
          </Magnetic>
        </form>
        {/* info */}
        <div
          data-scroll
          data-scroll-speed={0.1}
          className="w-1/2 flex flex-col items-start gap-10 self-center "
        >
          <h2 className="text-3xl">Contact details</h2>
          <Link className="font-bold" href="mailto:info@cardetaling.com">
            info@cardetaling.com{" "}
          </Link>
          <Link className="font-bold" href="tel:+312223331312">
            +312223331312
          </Link>
          <h2 className="text-3xl ">Business details</h2>
          <h1 className="font-bold">Car Detaling Sikima</h1>
          <p className="font-bold">
            Ulica Radomira Putnika 48, 71234 Lukavica, Bosna i Hercegovina
          </p>
        </div>
      </div>
      <motion.div
        data-scroll
        data-scroll-speed={0.1}
        className="w-full relative"
        style={{ opacity: opacity, y: y }}
      >
        <div
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.classList.remove("z-20");
          }}
          id="map-overlay"
          className="absolute w-full h-full inset-0 z-20"
        ></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46293.09575377565!2d18.744498757823045!3d43.516550903612085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758856b45614105%3A0x32eb9cb165c95ad4!2sGornja%20Brda!5e0!3m2!1sen!2sba!4v1709591173428!5m2!1sen!2sba"
          width="600"
          height="450"
          loading="lazy"
          className="w-full map z-10"
          onMouseLeave={(e) => {
            const target = document.querySelector(
              "#map-overlay"
            ) as HTMLDivElement;
            target.classList.add("z-20");
          }}
        ></iframe>
      </motion.div>
    </div>
  );
}

export default Contact;
