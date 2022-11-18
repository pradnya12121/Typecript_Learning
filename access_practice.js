var Student1 = /** @class */ (function () {
    function Student1() {
    }
    Object.defineProperty(Student1.prototype, "name", {
        get: function () {
            return this.userName;
        },
        set: function (name) {
            this.userName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Student1;
}());
var student = new Student1();
student.name = "codemind";
console.log(student.name);
