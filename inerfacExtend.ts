interface  Izomato{
    restaurent_name:string;
    food_item:string;
       
}
interface Iswaiggy{
    rating:number;
    order_number:number;

}
interface IfoodApp extends Izomato ,Iswaiggy {
    customer_name:string;
    customer_email:string; 
    customer_address:string;
    customer_phone:number;

}
var food_app:IfoodApp={
    restaurent_name:"Kirti Mahal Legacy",
    food_item:"Pure vag",
    order_number:101,
     customer_name:"Suresh",
     customer_email:"Suresg123@gmail.com",
    customer_phone:8907654321,
    customer_address:"pune",
    rating:5
}

console.log(food_app)