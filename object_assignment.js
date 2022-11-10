var employee = {
    firstName: "Nikita",
    salary: 25000,
    dept: "IT",
    company: "TCS"
};
console.log("Object Traversing");

for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(`${key} = ${element}`)
        
    }
}
console.log("  ");
console.log("Object destructing");
var firstName = employee.firstName, salary = employee.salary, dept = employee.dept, company = employee.company;
console.log(firstName, salary, dept, company);
