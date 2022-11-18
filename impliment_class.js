var Employee1 = /** @class */ (function () {
    function Employee1(emp_code, emp_name, emp_depth, emp_address) {
        this.emp_code = emp_code,
            this.emp_name = emp_name,
            this.emp_depth = emp_depth,
            this.emp_address = emp_address;
    }
    Employee1.prototype.getSalary = function (emp_code) {
        return 20000;
    };
    return Employee1;
}());
var emp = new Employee1(1, "Anil", "IT", "Pune");
console.log("Employee code: ".concat(emp.emp_code));
console.log(emp);
