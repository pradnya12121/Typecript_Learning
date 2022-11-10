var emp = {
    name: "Dnyanesh",
    score: 250
}


for(var e in emp)
{
   console.log(e);
   console.log(emp[e]);
}


var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var {firstName: userFirstname, lastName: userLastName} = std;

console.log(userFirstname);
console.log(userLastName);
