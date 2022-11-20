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


class P{
    private id:number;
get name(){
   return this.id;

}
set name(id:number){
    this.id=id;
}
}
var p=new P();
p.name=100;
console.log(p.name)





