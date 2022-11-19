var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.work = function () {
        console.log("Name:".concat(this.name));
    };
    return Person;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(student_class, name) {
        var _this = _super.call(this) || this;
        _this.student_class = student_class;
        _this.name = name;
        return _this;
    }
    Student1.prototype.work = function () {
        _super.prototype.work.call(this);
        console.log("id: ".concat(this.student_class, "  Name:").concat(this.name));
    };
    return Student1;
}(Person));
var Employee6 = /** @class */ (function (_super) {
    __extends(Employee6, _super);
    function Employee6(emp_salary, employee_depth, name) {
        var _this = _super.call(this) || this;
        //  this.student_class=student_class;
        _this.name = name;
        _this.emp_salary = emp_salary;
        _this.employee_depth = employee_depth;
        return _this;
    }
    Employee6.prototype.work = function () {
        _super.prototype.work.call(this);
        console.log("Name:".concat(this.name, " EmpDept: ").concat(this.employee_depth, " EmpSalry:").concat(this.emp_salary));
    };
    return Employee6;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(trainer_salary) {
        var _this = _super.call(this) || this;
        _this.trainer_salary = trainer_salary;
        return _this;
        //  this.student_class=student_class
    }
    Trainer.prototype.work = function () {
        console.log("Trainer salary:".concat(this.trainer_salary, " "));
    };
    return Trainer;
}(Person));
var person = [new Student1(1, "Pranisha"), new Employee6(30000, "IT", "Vishal"), new Trainer(50000)];
for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
    var iterator = person_1[_i];
    iterator.work();
}
