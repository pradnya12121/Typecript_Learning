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
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.work = function () {
        console.log("Name:".concat(this.Name));
    };
    return Parent;
}());
var EmployeeOffice = /** @class */ (function (_super) {
    __extends(EmployeeOffice, _super);
    function EmployeeOffice(emp_id, Name, emp_depth) {
        var _this = _super.call(this) || this;
        _this.emp_id = emp_id;
        _this.emp_dept = emp_depth;
        _this.Name = Name;
        return _this;
    }
    EmployeeOffice.prototype.work = function () {
        _super.prototype.work.call(this);
        console.log(" Emp_id:".concat(this.emp_id, " Name:").concat(this.Name, " Dept:").concat(this.emp_dept));
    };
    return EmployeeOffice;
}(Parent));
var StudentClass = /** @class */ (function (_super) {
    __extends(StudentClass, _super);
    function StudentClass(Name, student_id, student_class, student_subject) {
        var _this = _super.call(this) || this;
        _this.Name = Name;
        _this.student_id = student_id;
        _this.student_subject = student_subject;
        _this.student_class = student_class;
        return _this;
    }
    StudentClass.prototype.work = function () {
        // super.work();
        console.log("Name:".concat(this.Name, "  StudID:").concat(this.student_id, " StudClass:").concat(this.student_class, " StudSub:").concat(this.student_subject, " "));
    };
    return StudentClass;
}(Parent));
var Trainer_Office = /** @class */ (function (_super) {
    __extends(Trainer_Office, _super);
    function Trainer_Office(Name, trainer_salary) {
        var _this = _super.call(this) || this;
        _this.Name = Name;
        _this.trainer_salary = trainer_salary;
        return _this;
    }
    Trainer_Office.prototype.work = function () {
        //  super.work();
        console.log("Name:".concat(this.Name, " Trainer_salary:").concat(this.trainer_salary));
    };
    return Trainer_Office;
}(Parent));
var parents = [new EmployeeOffice(101, "Pramod", "IT"), new StudentClass("Pramila", 102, 10, "English"), new Trainer_Office("Priyanka", 550000)];
for (var _i = 0, parents_1 = parents; _i < parents_1.length; _i++) {
    var iterator = parents_1[_i];
    iterator.work();
}
