var Employee = /** @class */ (function () {
    function Employee(emp_name, emp_id, emp_salary, emp_depth) {
        this.emp_name = emp_name,
            this.emp_id = emp_id,
            this.emp_salary = emp_salary,
            this.emp_depth = emp_depth;
    }
    Employee.prototype.getName = function () {
        return this.emp_salary;
    };
    return Employee;
}());
var employee = new Employee("Anil", 101, 40000, "IT");
console.log(employee);
console.log("Employee Name:".concat(employee.emp_name));
console.log("Employee Salary ".concat(employee.getName()));
