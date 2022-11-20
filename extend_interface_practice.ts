interface IMobile{
    color:string;
    price:number;
}
interface IMobileSam extends IMobile{
    camera:string;
    memory:any;
}
interface IMobileNot extends IMobileSam{
    battery:number;
    display:number;

}
const mobile:IMobileNot={
    color:"Silver",
    price:40000,
    camera:"Dual/x",
    memory:64,
    battery:100,
    display:40 ,
}
// console.log(`${mobile.color} ${mobile.price} ${mobile.camera}`)
console.log(mobile)