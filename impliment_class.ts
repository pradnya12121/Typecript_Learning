interface IEmployee {
    emp_code:number,
    emp_name:string,
}

class Employee1 implements IEmployee {
  emp_code: number;
  emp_name: string;
  emp_depth:string;
  emp_address:string;
  constructor(emp_code,emp_name,emp_depth,emp_address){
    this.emp_code=emp_code,
       this.emp_name=emp_name,
     
       this.emp_depth=emp_depth,
       this.emp_address=emp_address
  }
  getSalary(emp_code:number):number{
    return 20000;
  }
}

let emp=new Employee1(1,"Anil","IT","Pune");
console.log(`Employee code: ${emp.emp_code}`)
console.log(emp)