console.log("=========================Calculator==================");
var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        // this.num3=num3;
    }
    Calculator.getadd = function (num1, num2) {
        return num1 + num2;
        return num1 * num2;
    };
    Calculator.getmul = function (n1, n2) {
        return n1 * n2;
    };
    Calculator.getsub = function (n3, n4) {
        return n3 - n4;
    };
    Calculator.getdiv = function (n5, n6) {
        return n5 / n6;
    };
    return Calculator;
}());
var calculator = new Calculator(6, 7);
console.log("Addtion of Two number (6 + 7) :" + " " + Calculator.getadd(6, 7));
console.log("Multiplication of two number (3*7) :" + " " + Calculator.getmul(3, 7));
console.log("Substraction of two number (67 -7) :" + " " + Calculator.getsub(67, 7));
console.log("Division of two number (354/16) :" + " " + Calculator.getdiv(354, 16));
