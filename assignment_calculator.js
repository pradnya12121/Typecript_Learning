console.log("Grade assignment using function and take input from user using comand prompt");
var physics_marks = prompt("Please enter Your Physics marks");
var maths_marks = prompt("Please enter Your Maths marks");
var chemeistry_marks = prompt("Please enter Your Chemistry marks");
var physics_marks1 = parseInt(physics_marks);
var maths_marks1 = parseInt(maths_marks);
var chemeistry_marks1 = parseInt(chemeistry_marks);
console.log("Physics Marks :".concat(physics_marks1));
console.log("Maths Marks : ".concat(maths_marks1));
console.log("Chemestry Marks: ".concat(chemeistry_marks1));
function add() {
    var sum = physics_marks1 + maths_marks1 + chemeistry_marks1;
    console.log("Your total Marks : ".concat(sum));
    var avg = sum / 3;
    console.log("Your average Marks :".concat(avg));
    if (avg < 70) {
        console.log("Grade is C");
    }
    if (avg > 70 && avg < 90) {
        console.log("Grade is B");
    }
    if (avg > 90) {
        console.log("Grade is A");
    }
}
add();
