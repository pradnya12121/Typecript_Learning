var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + "  " + this.lastName + "  " + this.frequentFlyerno);
    };
    return Passenger;
}());
var passenger = new Passenger("Jsck", "Sparrow", 102);
var passenger2 = new Passenger("harray", "potter", 102);
passenger.display();
passenger2.display();
// for (const key in passenger) {
//     if(key!=="display"){
//     console.log(key);
//     console.log(passenger[key])
//     }   
// }
for (var key in passenger) {
    if (passenger[key] instanceof Function) {
        continue;
    }
    else {
        console.log(key);
        console.log(passenger[key]);
    }
}
