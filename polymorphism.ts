class Person {
    public  work(){
console.log("I am from person class")
    }
}
class Student1 extends Person
{
   public work(){
     console.log("I am from student class")
   }
}
class Employee extends Person{
    public work(){
        console.log("I am from employee class")
    }
}
class Trainer extends Person {
    
    public work(){
        console.log("I am from trainer class")
    }
}

    let person=new Person();
    let student=new Student1();
    let employee=new Employee();
    let trainer=new Trainer();
    person.work();
    student.work();
    employee.work();
    trainer.work();



