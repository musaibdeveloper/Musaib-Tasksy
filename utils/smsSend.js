import config from "config";
import twilio from "twilio";
import randomNumber from "./randomNumber.js";


let { SID, TOKEN, NUMBER } =config.get("SEND_SMS")



const client = new twilio(SID, TOKEN);
let otp = randomNumber(5);

async function SendSMS() {
  try {
    await client.messages.create({
      body: `${otp}`,
      to: "+919059790040",
      from: NUMBER,
    });
  } catch (error) {
    console.log(error);
  }
}

SendSMS();
