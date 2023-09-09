import readline from "readline-sync";
import fs from "fs/promises";

async function getAlltask() {
  try {
    // let email = readline.questionEMail("Enter the email : ");
    let email = "aqueeb@gmail.com";

    let read = await fs.readFile("dataBase.json", "utf-8");
    let strtoObjec = JSON.parse(read);

    let emailfound = strtoObjec.find((x) => {
      return x.Youremail === email;
    });

    // console.log(emailfound);

    let newtask = emailfound.task.map((x)=>{
        return x.todo
    })

    console.log(newtask);

    if (!emailfound) {
      console.log("email is not found");
    } else {
      console.log("Email is found");
    }
  } catch (error) {
    console.log("Bhai error", error);
  }
}

getAlltask();
