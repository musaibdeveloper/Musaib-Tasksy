import nodemailer from "nodemailer";
import config from "config";
import randomNumber from "./randomNumber.js";

let { HOST, AUTH, PORT } = config.get("EMAIL_SMTP");

let clientvalidate = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: true,
  auth: {
    user: AUTH.USER,
    pass: AUTH.PASS,
  },
});

let otp = randomNumber(5);

async function sendEmail() {
  try {
    // send mail with defined transport object
    const info = await clientvalidate.sendMail({
      from: `MUSAIB TASKY <${AUTH.USER}>`, // sender address
      to: "suhail@code.in", // list of receivers
      subject: "Testing", // Subject line
      text: `${otp}`, // plain text body
      //   html: "<b>HTML?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
}
sendEmail();
