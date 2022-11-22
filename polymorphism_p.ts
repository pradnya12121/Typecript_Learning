interface IOrga{
    id:number;
    name:string;
    // description:string;
    // starttime:
    display():void;


}

class Organ  {
    id=101;
    name="Prashant";


    constructor(){
        console.log(`ID:${this.id} Name: ${this.name}`)
    }
    display(): void {
        
    }
}
class Even implements IOrga{
    id:number;
    name:string
    description:string;
     Starttime:string;

    constructor(id:number,name:string,description:string,Starttime:string){
        // super()//call the parent class constructor
        this.description=description;
        this.Starttime=Starttime;
        this.id=id;
        this.name=name;


    }
    display(): void 
{ 
    // super.display()
        console.log(`Event ID:${this.id}  Event Name:${this.name} Description:${this.description} Starttime: ${this.Starttime}`)
    }
}
class Ven extends Organ{
    id: number;
    name:string;
    description:string;
    address:string;

    
    constructor(id:number,name:string,description:string,address:string){
        super()
        this.description=description;
        this.address=address
        this.id=id;
        this.name=name;


    }
    display(): void {
        console.log(`Ven ID:${this.id} Ven Name:${this.name}  Description: ${this.description} Address:${this.address}`)
    }
}

const organ:Organ[]= [new Even(2,"Birthday Party","Arrav 1st birthday party..,","11:00 AM"), new Ven(3,"Orchid Gardens","Landscape area","Sangola")]

for (const iterator of organ) {
    iterator.display();
}

