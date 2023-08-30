import readline from "readline-sync"
import fs from 'fs/promises';

export default async function Login(){
    let firstName = readline.question("Enter your name: ")
    let lastName  = readline.question("Enter the last name : ")
    let password = readline.question("Enter Password:", { hideEchoBack: true }); 
    
    
    let dataBase = {
        firstName,
        lastName,
        password
    }

    let stores = await fs.readFile("dataBase.json", "utf-8"); // "[]"
    let stringsTobj = JSON.parse(stores);
    stringsTobj.push(dataBase);
    let objstostr = JSON.stringify(stringsTobj);
    await fs.writeFile("dataBase.json" , objstostr );




   
}