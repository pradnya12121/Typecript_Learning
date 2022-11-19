class Person {
    name:string;

    public  work(){
console.log(`Name:${this.name}`)
    }
}
class Student1 extends Person
{    
    student_class:number;
    name:string;
    constructor(student_class:number,name:string){
        super();
        this.student_class=student_class;
        this.name=name;
    

    }
    
   public work(){
    super.work();
     console.log(`id: ${this.student_class}  Name:${this.name}`)
   }
}
class Employee6 extends Person{
    emp_salary:number;
    employee_depth:string;
    // student_class:number;
    name:string;
    constructor(emp_salary:number,employee_depth:string,name:string){
        super();
        //  this.student_class=student_class;
        this.name=name;
        this.emp_salary=emp_salary;
        this.employee_depth=employee_depth;
        

    }
    public work(){
        super.work();
        console.log(`Name:${this.name} EmpDept: ${this.employee_depth} EmpSalry:${this.emp_salary}`)
    }
}
class Trainer extends Person {
    //   name: string;
    //   student_class:number;
    //   emp_salary:number;
    //  employee_depth:string;
     trainer_salary:number;
      constructor(trainer_salary:number){
        super()
        this.trainer_salary=trainer_salary
        //  this.student_class=student_class
      }
    public work(){
        console.log(`Trainer salary:${this.trainer_salary} `)
    }
}

 let person:Person[]=[new Student1(1,"Pranisha"),new Employee6(30000,"IT","Vishal"),new Trainer(50000)]

 for (const iterator of person) {
    iterator.work();
 }




