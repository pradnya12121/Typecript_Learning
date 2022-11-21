interface IOrganizer{
    id:number;
    Name:string;
    display():void;
}


class Organizer implements IOrganizer {
     public id:number=1
    public Name:string="yash";
    constructor(){
         console.log(`ID: ${this.id} Name: ${this.Name}`);
    }

     public display():void{
       

    }
}
class Event1 extends Organizer{
    public Description:string;
    public SetTime:number;
    constructor(id:number,Name:string,Description:string,SetTime:number){
         super();//calling app property of parent class
        this.id=id;
        this.Name=Name;
        this.Description=Description;
        this.SetTime=SetTime;

    }
    public display(): void {
        super.display()
         console.log(`Event id: ${this.id}  Event Name: ${this.Name}   Event Description: ${this.Description}   Event time: ${this.SetTime}`)
        
    }
}
class Venue extends Organizer{
    public address:string;
    public Description:string;
    public SetTime:number;
    constructor(id:number,Name:string,Description:string,SetTime:number,address:string){
        super();//calling property of parent class
        this.id=id;
        this.Name=Name;
        this.Description=Description;
        this.SetTime=SetTime;
        this.address=address;

    }
    public display(): void {
        // //  super.display()
         console.log(`Venue id: ${this.id}  Venue Name: ${this.Name}  Venue Description: ${this.Description}  Event time: ${this.SetTime}  Address: ${this.address}`)
    }
}

 let organizer:Organizer[]=new Array(new Event1(10,"Weeding","Ring Ceremony",4), new Venue(11,"Paradise Garden","landscape area",4,"Sangola")) 
for (const iterator of organizer) {
    iterator.display()
 }


