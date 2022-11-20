// class Emp{
//     private empName:string;
//     get ename(){
//        return this.empName;
//     }
//     set ename(empName:string){
//         this.empName=empName;
//     }
// }
// var employee1=new Emp();
// employee1.ename="Prashant";
// console.log(employee1.ename)
var P = /** @class */ (function () {
    function P() {
    }
    Object.defineProperty(P.prototype, "name", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    return P;
}());
var p = new P();
p.name = 100;
console.log(p.name);
