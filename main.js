// const nat = {
//     name: "nat",
//     age: 20,
//     approvedClass: [
//         "html",
//         "css"
//     ],
//     approveClass(approved){

//         // make nat approve more
//         this.approvedClass.push(approved);
//     }, 

// };

const students = (name, age, approvedClass) => {
    this.name = name;
    this.age = age;
    this.approvedClass = approvedClass;

}

students.prototype.approveClass = function(approved) {
    this.approvedClass.push(approved)
}

const juana = new students(
    "juana", 19,["videogame", "css"]
)

// ============CLASS============= 

class Student2 {
    constructor({
        name, age, approvedClass =[], email
    }){
        this.name = name;
        this.age = age;
        this.approvedClass = approvedClass;
    }

    approveClass(approved){
        this.approvedClass.push(approved)
    }
}

const miguel = new Student2({   
    email: "migue@gogo.com",
    name: "miguel",
    age: 35,
    approvedClass: [
        "data", "css", "html"
    ]
})