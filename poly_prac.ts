class Parent{
    public Name:string;
    public work(){
        console.log(`Name:${this.Name}`)
    }
}
class EmployeeOffice extends Parent{
    public emp_id:number;
    public emp_dept:string;
    public Name:string;
    constructor(emp_id:number,Name:string,emp_depth:string,){
        super();
        this.emp_id=emp_id;
        this.emp_dept=emp_depth;
        this.Name=Name;

    }
    public work():void{
        super.work();
        console.log(` Emp_id:${this.emp_id} Name:${this.Name} Dept:${this.emp_dept}`)

    }
}

class StudentClass extends Parent{
    public student_id:number;
    public student_class:number;
    public student_subject:string;
    constructor(Name:string,student_id:number,student_class:number,student_subject:string){
        super()
        this.Name=Name;
        this.student_id=student_id;
        this.student_subject=student_subject;
        this.student_class=student_class
    }
    public work(): void {
        // super.work();
        console.log(`Name:${this.Name}  StudID:${this.student_id} StudClass:${this.student_class} StudSub:${this.student_subject} `)

    
    }

} 
class Trainer_Office extends Parent{
    public trainer_salary:number;
    constructor(Name:string,trainer_salary:number){
        super()
        this.Name=Name;
        this.trainer_salary=trainer_salary;


    }
    public work(): void {

        //  super.work();
        console.log(`Name:${this.Name} Trainer_salary:${this.trainer_salary}`)
    }
}

let parents:Parent[]=[new EmployeeOffice(101,"Pramod","IT") , new StudentClass("Pramila",102,10,"English"),new Trainer_Office("Priyanka",550000)];

for (const iterator of parents) {
    iterator.work();
}