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