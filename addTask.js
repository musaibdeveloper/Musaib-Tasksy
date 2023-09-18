import readline from "readline-sync";
import fs from "fs/promises";

async function addTask() {
  try {
    let email = readline.questionEMail("Enter the email : ");

    let read = await fs.readFile("dataBase.json", "utf-8")
    let stringtoObject = JSON.parse(read);

    let emailfound = stringtoObject.find((element) => {
      return element.Youremail === email;
    });

    if (!emailfound) {
      console.log("Your Email is wrong!!");
      addTask();
    } else {
        let todo = readline.question("Enter your task:");
        let id = Math.random().toString(36).substr(2, 10);
        let deadline=readline.question("enter your deadline (dd/mm/yyyy):")
      emailfound.task.push({id,todo,deadline});
      

      let objtostring = JSON.stringify(stringtoObject);
      await fs.writeFile("dataBase.json", objtostring);
    }
  } catch (error) {
    console.log(error);
  }
}
addTask();

// Task must be done.

