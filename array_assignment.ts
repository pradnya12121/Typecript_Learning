console.log(`Given Array:`);
let new_array=["J&J" ,"Pfizer","Sputnik"];
// console.log(`[${new_array}]`);
console.log(new_array);
new_array.push("Covaxin");

console.log(`Add one more element in given array : [${new_array}]`);
console.log("Array traversing using for of loop");

for (const iterator of new_array) {
    console.log(iterator)
}

console.log("Array Destructing")
let [e_0,e_1,e_2,e_3]=new_array
console.log(e_0,e_1,e_2,e_3);