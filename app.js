import readline from "readline-sync";
import Register from "./Register.js";
import Login from "./Login.js";

export default async function main() {
  try {
    console.log("-----Welcome to the Menu------");
    console.log("-----Tasky Options :) ---------");
    console.log("-----Please Select Any one below -");

    let options = ["For Exit", "For Register", "For login"];

    options.forEach((value, index) => {
      console.log(`${index}.${value}`);
    });

    let option = readline.question("Enter the Option Number here : ");
    if (option < 0 || option > 2) {
      console.log("Invalid input");
    }

    switch (option) {
      case "0":
        console.log("Thank you");
        break;

      case "1":
        await Register();
        break;

      case "2":
        await Login();
        break;

      default:
        console.log("Invalid entry");
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

main();
