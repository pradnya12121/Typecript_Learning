class Org{
    public name:string="Pramod";
        public id:number=1;

      
         
         constructor(){

            console.log(`ID: ${this.id}  Name:${this.name}`)
        } 
         
        public dispaly():void{
        
            
        // console.log(`id:${this.id} Name: ${this.name} Description: ${this.description} Starttime: ${this.starttime}`)
          } 
        
}

class Eve extends Org{
 public description:string;
     public  starttime:number;
    constructor(id:number,name:string,description:string,starttime:number){
        super()//calling constructor of parent class using super()
        this.id=id;
        this.name=name;
        this.description=description;
        this.starttime=starttime; 
        
        console.log(`id:${this.id} Name: ${this.name} Description: ${this.description} Starttime: ${this.starttime}`)    
    }
    public display():void{
        //   super.dispaly()
        // console.log(`id:${this.id} Name: ${this.name} Description: ${this.description} Starttime: ${this.starttime}`)
    }

}
class Ven extends Org{
    public description:string;
    public starttime:number;
    public address:string;
    constructor(id:number,name:string,description:string,starttime:number,address:string){
        super();
        this.id=id;
        this.name=name;
        this.description=description;
        this.starttime=starttime ;
        this.address=address; 
    }
    public dispaly(): void {
        //   super.dispaly();
          console.log(`id: ${this.id} Name: ${this.name} Description:${this.description} Starttime: ${this.starttime} Address: ${this.address}` )
    }

}

let org:Org[]=[new Eve(101,"Birthday Party!","Aarav 1st Birthday Celebration",11), new Ven(103,"Orcid Garden","Landscape Area",11,"Sangola,near shivaji politicnical college")]


for (const iterator of org) {
    iterator.dispaly();
}