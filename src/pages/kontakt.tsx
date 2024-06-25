import axios from "axios";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import Head from "next/head";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    services: "",
    message: "",
  });

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/sendEmail", formData);
      setFormError("");
      setFormSuccess(true);

      // clear data from form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        services: "",
        message: "",
      });

      setTimeout(() => setFormSuccess(false), 2000);
    } catch (err: any) {
      let errorMessage = "Error prilikom slanja Email-a";
      if (err.response) {
        // The request was made, but the server responded with an error
        errorMessage = err.response.data.message || err.response.statusText;
      } else if (err.request) {
        // The request was made, but no response was received
        errorMessage = "Error prilikom slanja mejla";
      } else {
        errorMessage = err.message || "Nepoznat error";
      }

      console.error("Error prilikom ispunjavanja forme:", errorMessage);

      setFormError(errorMessage);
      setFormSuccess(false);
    }
  };

  const contactRef = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["end start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <>
      <Head>
        <title>Sikima Auto Detailing | Kontakt</title>
        <meta
          name="description"
          content="Sikima Auto Detailing: Za sve detalje i rezervacije, obratite nam se danas - Vaš put ka besprekornom izgledu vašeg vozila počinje ovde!"
        />
        <meta
          name="keywords"
          content="sikima auto detailing, kontakt, detailing, poliranje, keramicka zastita, auto detailing, dubinsko pranje, detailing enterijera, korekcija laka"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Sikima Auto Detailing - Kontakt" />
        <meta
          property="og:description"
          content="Sikima Auto Detailing: Za sve detalje i rezervacije, obratite nam se danas - Vaš put ka besprekornom izgledu vašeg vozila počinje ovde!"
        />
        <meta property="og:image" content="/sikima.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div
          ref={contactRef}
          className="w-full bg-black/95 p-4 md:px-28 md:pt-[7rem]"
        >
          <h2
            data-scroll
            data-scroll-speed={0.2}
            className="text-5xl lg:text-8xl w-full pt-40 md:pt-20 md:w-4/5"
          >
            Treba Vam pomoć oko auta? Ne ustručavajte se kontaktirati nas.
          </h2>
          <div className="flex flex-col md:flex-row items-start py-20 gap-[3vw]">
            {/* form */}
            <form
              onSubmit={handleSubmit}
              className="w-full"
              data-scroll
              data-scroll-speed={0.1}
            >
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ime i prezime *"
                className="w-full px-4 pt-10 pb-4 border-collapse bg-transparent border-b"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Broj telefona *"
                className="w-full px-4 pt-10 pb-4 border-collapse bg-transparent border-b"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email adresa (opciono)"
                className="w-full px-4 pt-10 pb-4 border-collapse bg-transparent border-b"
              />
              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                className="w-full px-4 pt-10 pb-4 border-collapse bg-transparent border-b text-white/60"
                required
              >
                <option value="" disabled hidden>
                  Odaberite uslugu
                </option>
                <option
                  className="bg-black border-none text-xl"
                  value="poliranje"
                >
                  Poliranje
                </option>
                <option
                  className="bg-black border-none text-xl pt-10"
                  value="pranje"
                >
                  Pranje
                </option>
                <option
                  className="bg-black border-none text-xl"
                  value="detaling"
                >
                  Detaling
                </option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Poruka"
                className="w-full px-4 pt-6 border-collapse bg-transparent border-b resize-none h-36"
                required
              />

              <Magnetic xSpread={0.2} ySpread={0.2}>
                <button
                  type="submit"
                  className="w-full mt-4 p-4 text-center bg-yellow-400 rounded-md cursor-pointer"
                >
                  Pošalji
                </button>
              </Magnetic>
              {formSuccess && (
                <p className="text-md text-left font-light pt-4 text-lighterCol opacity-75">
                  Uspješno ste poslali mejl.
                </p>
              )}
            </form>
            {/* info */}
            <div
              data-scroll
              data-scroll-speed={0.1}
              className="w-full md:w-1/2 flex flex-col items-start gap-10 self-center "
            >
              <h2 className="text-3xl text-redCol">Kontaktiraj nas</h2>
              <Link
                className="font-bold animate-bounce"
                href="mailto:autodetailingsikima@gmail.com"
              >
                autodetailingsikima@gmail.com{" "}
              </Link>
              <h4 className="font-bold">+387 66 704 359</h4>
              <h2 className="text-3xl text-redCol">Podaci o firmi</h2>
              <h1 className="font-bold">Sikima Auto Detaling </h1>
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
      </div>
    </>
  );
}

export default Contact;
