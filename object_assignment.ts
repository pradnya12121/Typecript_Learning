var employee ={
    firstName:"Nikita",
    salary:25000,
    dept:"IT",
    company:"TCS"


}
console.log("Object Traversing");
console.log(" ");
for (const key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        console.log(key);
        
    }
}
console.log("  ");
console.log("Object destructing");

var {firstName,salary,dept,company}=employee;
console.log(firstName,salary,dept,company);