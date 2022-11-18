console.log("=========================Calculator==================")

class Calculator{
    num1:number;
    num2:number;
    num3:number;
    // constructor(num1,num2){
    //     this.num1=num1;
    //     this.num2=num2;
    //     // this.num3=num3;
    // }
    static getadd(num1:number,num2:number){
            return  num1+num2;
            // return num1*num2;
        
        
    }
 static getmul(n1:number,n2:number){
             return n1*n2;
    }
    static getsub(n3:number,n4:number){
             return n3-n4;
    }
    static getdiv(n5:number,n6:number){
             return n5/n6;
    }
   
}
let calculator=new Calculator();
console.log("Addtion of Two number (6 + 7) :" + " " +Calculator.getadd(6,7))
console.log("Multiplication of two number (3*7) :" + " " +Calculator.getmul(3,7))
console.log("Substraction of two number (67 -7) :" + " " +Calculator.getsub(67,7))
console.log("Division of two number (354/16) :" + " "+Calculator.getdiv(354,16))