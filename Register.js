import readline from "readline-sync"

export default async function Register(){
    let firstName = readline.question("Enter your name: ")
    let lastName = readline.question("Enter your last name: ")
    let phonenumber = +readline.question("Enter your phone number: ")
    let password = readline.question("Enter  new Password: ", { hideEchoBack: true }); 
    let Confirmpassword = readline.question("Re-Enter  new Password: ", { hideEchoBack: true });   
  
}

