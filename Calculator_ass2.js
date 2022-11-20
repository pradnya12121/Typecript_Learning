var Calculator_sec = /** @class */ (function () {
    function Calculator_sec() {
    }
    Calculator_sec["function"] = function (num1, num2) {
        var a = num1 + num2;
        console.log("Additon of two number : ".concat(a));
        var b = num1 * num2;
        console.log("Multiplication of two number:  ".concat(b));
        var c = num1 - num2;
        console.log("Substraction of two number: ".concat(c));
        var d = num1 / num2;
        console.log("Division of two number : ".concat(d));
        var e = num1 % num2;
        console.log("Modules of two number : ".concat(e));
    };
    return Calculator_sec;
}());
Calculator_sec["function"](4, 9);
// Calculator_sec.function(67,9);
// Calculator_sec.function(100,9);
// Calculator_sec.function(56,9);
