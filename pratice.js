

let mydata = [
    {
        "firstName": "wasil",
        "lastName": "aqueeb",
        "phonenumber": 9876543210,
        "Youremail": "aqueeb@gmail.com",
        "password": "aqueeb",
        "Confirmpassword": "aqueeb",
        "tasks": [
            {
                "id": "gcj65fge9x",
                "todo": "hshshs",
                "deadline": "03/07/2003"
            },
            {
                "id": "gcj65fge9xfgfg",
                "todo": "sleep",
                "deadline": "03/07/2003"
            }
           
        ]
    },
   
]


// console.log(mydata);



/*
1. Change the name to Suhail
2. Change my email to suhail@code.in
3. delete key value of confirmPassword
4. display me all tasks
5. get all tasks names
6. get all tasks deadline
7. change task name of gcj65fge9xdfd from eat to code
8. add a new task in tasks array
9. delete all tasks array
10. delete whole user


*/

// 1. Change the name to Suhail

  
 let updateName = mydata.firstName = "Suhail"
// console.log(updateName)


// 2. Change my email to suhail@code.in

let EmailUpdate = mydata.Youremail = "syedmusaib428@gmail.com"
// console.log(EmailUpdate)

// 3. delete key value of confirmPassword


//  let deleteCon = delete mydata.Confirmpassword;

// console.log(deleteCon)

// console.log(mydata);


// 4. display me all tasks


// let display = mydata.task

// console.log(display);

// 5. get all tasks names


// let taskNames = mydata.task.map((x)=>{

//     console.log(x.id)

// })
// console.log(taskNames);


// 6. get all tasks deadline


// let deadlines = mydata.task

// let deadlineNames = mydata.task.map((x)=>{

//     // console.log(x.deadline)

// })


// 7. change task name of gcj65fge9xdfd from eat to code


//  let myid = "gcj65fge9xfgfg"
//  let myUpdate = "code"
// let edit = mydata.task.find((x)=>{

//     return x.id == myid ;

// })

// edit.todo = myUpdate

// console.log(edit);



// 8. add a new task in tasks array

// let obj = {
//     id : "xcdv6535",
//     todo : "laugh",
//     deadline : "today"
// }

//  mydata.tasks.push(obj)
// console.log(mydata);



// 9. delete all tasks array

//  mydata.tasks = []

//  console.log(mydata); //   tasks: []


//  10. delete whole user
let email = "aqueeb@gmail.com";
let deleteUser = {}


 let update = mydata.find((x)=>{

return x.Youremail === email;

})

update = deleteUser

console.log(update);

let myData = [
    {

fname:"suhaul"
    }
    ,{}
]









