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
        console.log("I am from person class");
    };
    return Person;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student1.prototype.work = function () {
        console.log("I am from student class");
    };
    return Student1;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.work = function () {
        console.log("I am from employee class");
    };
    return Employee;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trainer.prototype.work = function () {
        console.log("I am from trainer class");
    };
    return Trainer;
}(Person));
var person = new Person();
var student = new Student1();
var employee = new Employee();
var trainer = new Trainer();
person.work();
student.work();
employee.work();
trainer.work();
