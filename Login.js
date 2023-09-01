import readline from "readline-sync";
import fs from "fs/promises";

export default async function Login() {
  try {
     let email = readline.questionEMail("Enter your email : ");
    // let email = "syedmusaib428@gmail.com";

    let password = readline.question("Enter Password:", { hideEchoBack: true });
    let read = await fs.readFile("dataBase.json", "utf-8");
    let stringTobj = JSON.parse(read);

    let emailFound = stringTobj.find((i) => i.Youremail === email);
    let passwordFound = stringTobj.find((i) => i.password === password);

    if (!emailFound || !passwordFound) {
      return console.log("pLease register or incrorect pwd ");
    } else {
      return console.log("Successfully login");
    }

    
  } catch (error) {
    console.log(error);
  }
}
