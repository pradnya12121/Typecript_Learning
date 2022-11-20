class Organizer {
    public id:number;
    public Name:string;

    public display():void{
       console.log(`ID: ${this.id} Name: ${this.Name}`);

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

 let organizer:Organizer[]=new Array(new Event1(10,"Weeding","Ring Ceremony",4), new Venue(1,"Paradise Garden","landscape area",4,"Sangola")) 
for (const iterator of organizer) {
    iterator.display()
 }
//  let organizer=new Event1(102,"Pradnya Kolase","IT Champ",11)

// let organizer=new Venue(102,"Pradnya","IT Champ",11,"Sangola");

// console.log(organizer.display());


