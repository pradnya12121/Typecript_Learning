interface IProduct {
    id:number;
    name:string;
    description?:string;
    price:number  // declartion only in interface.
  
}

var objProduct : IProduct = {
    id : 123,
    name: "IPhone",
    description: "It's awesome",
    price: 60000 // I have given implementation for IProduct interface
}


var objProduct2 : IProduct = {
    id : 143,
    name: "Android",
    description: "It's too good",
    price: 25000 // I have given implementation for IProduct interface
}
