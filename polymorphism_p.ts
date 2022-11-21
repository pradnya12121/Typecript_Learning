interface IOrga{
    id:number;
    name:string;
    // description:string;
    // starttime:
    display():void;


}
class Organ implements IOrga {
    id=101;
    name="Prashant";


    constructor(){
        console.log(`ID:${this.id} Name: ${this.name}`)
    }
    display(): void {
        
    }
}
class Even extends Organ{
    

}
