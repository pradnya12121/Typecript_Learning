class Passenger {
    firstName:string;
    lastName:string;
    frequentFlyerno:number

    
constructor(firstName: string, lastName:string, flightno:number) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.frequentFlyerno = flightno;
}
display (){
    console.log(this.firstName + "  " + this.lastName +"  " +this.frequentFlyerno)
}
}
var passenger=new Passenger("Jsck","Sparrow",102);
var passenger2=new Passenger("harray","potter",102);
passenger.display();
passenger2.display()


// for (const key in passenger) {
//     if(key!=="display"){
//     console.log(key);
//     console.log(passenger[key])
//     }   
    
// }

for (const key in passenger) {

    if(passenger[key] instanceof Function){
        continue
    }else{
        console.log(key);
        console.log(passenger[key])
    }
}




