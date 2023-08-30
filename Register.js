import readline from "readline-sync"
import fs from "fs/promises"


export default async function Register(){
    let firstName = readline.question("Enter your name: ")
    let lastName = readline.question("Enter your last name: ")
    let phonenumber = +readline.question("Enter your phone number: ")
    let password = readline.question("Enter  new Password: ", { hideEchoBack: true }); 
    let Confirmpassword = readline.question("Re-Enter  new Password: ", { hideEchoBack: true });   


    let dataBase = {
        firstName,
        lastName,
        phonenumber,
        password,
        Confirmpassword
    }
    
     let store = await fs.readFile("dataBase.json", "utf-8"); // "[]"
    
     let stringTobj = JSON.parse(store); // []
     stringTobj.push(dataBase);         // [push]
     let objtostr = JSON.stringify(stringTobj);  // ["data"]
    //  console.log(objtostr);
     await fs.writeFile("dataBase.json", objtostr) // write in the file.
    


}
