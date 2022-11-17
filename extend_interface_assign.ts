interface Animal{
    name:string,
    age:number,
}

interface Dog extends Animal {
    color:string,
    food_name:string,
}
const animal_obj:Dog ={
    name:"Teja",
    age:15,
    color:"black",
    food_name:"Pedigray"

}

console.log(animal_obj)