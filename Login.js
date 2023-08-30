import readline from "readline-sync"

export default async function Login(){
    let firstName = readline.question("Enter your name: ")
    let lastName  = readline.question("Enter the last name : ")
    let password = readline.question("Enter Password:", { hideEchoBack: true });   

   
}