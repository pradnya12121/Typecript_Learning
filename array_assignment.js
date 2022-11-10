console.log("Given Array:");
var new_array = ["J&J", "Pfizer", "Sputnik"];
console.log("[".concat(new_array, "]"));
new_array.push("Covaxin");
console.log("Add one more element in given array : [".concat(new_array, "]"));
console.log("Array traversing using for of loop");
for (var _i = 0, new_array_1 = new_array; _i < new_array_1.length; _i++) {
    var iterator = new_array_1[_i];
    console.log(iterator);
}
console.log("Array Destructing");
var e_0 = new_array[0], e_1 = new_array[1], e_2 = new_array[2], e_3 = new_array[3];
console.log(e_0, e_1, e_2, e_3);
