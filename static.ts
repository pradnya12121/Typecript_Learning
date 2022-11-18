class Check{
    static bankName:string ="Bank of india";
    customerName:string;
    accountNumber:number;
    display(){
        Check.bankName="BOB";
        console.log(Check.bankName)
    }
}
var objCheck=new Check();
objCheck.display();