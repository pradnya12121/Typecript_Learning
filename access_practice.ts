// class Student1{
//     private userName:string;
//     get name():string{
//         return this.userName
//     }
//     set name(name:string){
//          this.userName = name;
//     }
// }
// var student=new Student1();
// student.name="codemind";
// console.log(student.name);


class Student2{
    private userName:string;
    get name():string{
       return this.userName 
    }
    set name(name:string){
        this.userName = name;
    }
}
var student=new Student2();
student.name="codemeind";
console.log(student.name)
