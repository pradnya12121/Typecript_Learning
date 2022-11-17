class Employee {
    emp_name:string;
    emp_id:number;
    emp_salary:number;
    emp_depth:string;
    constructor(emp_name,emp_id,emp_salary,emp_depth){
        this.emp_name=emp_name,
        this.emp_id=emp_id,
        this.emp_salary=emp_salary,
        this.emp_depth=emp_depth

    }
    public getName():number{
        return this.emp_salary;
    }
}
let employee=new Employee("Anil",101,40000,"IT");
console.log(employee);
console.log(`Employee Name:${employee.emp_name}`)
console.log(`Employee Salary ${employee.getName()}`)