import readline from "readline-sync";
import fs from "fs/promises";
import login from "./Login.js"


export default async function Register() {

  console.clear()

  console.log("-----------");
    console.log("-----Register------------------");
    console.log("-----------");

  let firstName = readline.question("Enter your Firstname: ");
  let lastName = readline.question("Enter your last name: ");
  let phonenumber = readline.questionInt("Enter your phone number: ");
  let Youremail = readline.questionEMail("Enter your email : ");
  let password = readline.question("Enter  new Password: ", {
    hideEchoBack: true,
  });
  let Confirmpassword = readline.question("Re-Enter  new Password: ", {
    hideEchoBack: true,
  });

  let dataBase = {
    firstName,
    lastName,
    phonenumber,
    Youremail,
    password,
    Confirmpassword,
  };

  dataBase.task=[];

  let store = await fs.readFile("dataBase.json", "utf-8"); 
  let stringTobj = JSON.parse(store); 

 
if(password === Confirmpassword){
    console.log("Done");
    login()
   
       
} else {
    console.log("Password doesn't match");
}
  

  stringTobj.push(dataBase); 
  let objtostr = JSON.stringify(stringTobj); 
  await fs.writeFile("dataBase.json", objtostr); 


}
