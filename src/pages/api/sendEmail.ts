import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

let lastReqTime = 0;
const limitTimeWindow = 5000; //5s

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { fullName, phone, email, services, message } = req.body;

      //time diff since the last request
      const currentDate = Date.now();
      const timeDifference = currentDate - lastReqTime;

      //is it valid

      if (!fullName || !phone || !services || !message) {
        res.status(400).json({ message: "Popunite obavezna polja!" });
        return;
      }
      //email
      if (!/\S+@\S+\.\S+/.test(email)) {
        res.status(422).json({ message: "Neispravan E-mail format" });

        return;
      }

      if (timeDifference < limitTimeWindow) {
        //429: too many requests
        return res
          .status(429)
          .json({ message: "Previše zahtjeva. Pokušajte ponovo kasnije!" });
      }

      //update last req
      lastReqTime = currentDate;

      //nodemailer
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const emailOptions = {
        from: `${email}`,
        to: process.env.EMAIL,
        subject: "Ispunjena nova kontakt forma",
        text: `
        Ime i Prezime: ${fullName},
        Telefon: ${phone}.
        Email: ${email},
        Usluga: ${services},
        Poruka: ${message}`,
      };

      await transporter.sendMail(emailOptions);
      res.status(200).json({ message: "Uspješno ste poslali Email" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error prilikom slanja Email-a", error: error });
      console.log(error);
    }
  } else {
    res.status(400).json({ message: "Nedozvoljena metoda" });
  }
};

export default sendEmail;
