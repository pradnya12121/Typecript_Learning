
console.log("Grade assignment using function and take input from user using comand prompt")
var physics_marks:any=prompt("Please enter Your Physics marks");
var maths_marks:any=prompt("Please enter Your Maths marks");
var chemeistry_marks:any=prompt("Please enter Your Chemistry marks");
var physics_marks1=parseInt(physics_marks);

var maths_marks1=parseInt(maths_marks);
var chemeistry_marks1=parseInt(chemeistry_marks);

console.log(`Physics Marks :${physics_marks1}`);
console.log(`Maths Marks : ${maths_marks1}`);
console.log(`Chemestry Marks: ${chemeistry_marks1}`);
function add()//declartion
function add(){

var sum: number =physics_marks1+ maths_marks1+chemeistry_marks1;
console.log(`Your total Marks : ${sum}`)
var avg=sum/3;
console.log(`Your average Marks :${avg}`);
if(avg<70){
console.log("Grade is C");

}
if(avg>70 && avg<90){
    console.log("Grade is B");
}
if(avg>90){
console.log("Grade is A");
}
}add();


