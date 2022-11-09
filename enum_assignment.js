console.log("First example of enum ==\"Seasons\" :");
var Seasons;
(function (Seasons) {
    Seasons[Seasons["winter"] = 0] = "winter";
    Seasons[Seasons["summer"] = 1] = "summer";
    Seasons[Seasons["spring"] = 2] = "spring";
})(Seasons || (Seasons = {}));
console.log(Seasons.spring);
console.log(Seasons[1]);
console.log(Seasons[2]);
console.log("Second example of enum ==\"Size\" :");
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["midium"] = 1] = "midium";
    Size[Size["large"] = 2] = "large";
    Size[Size["extralarge"] = 3] = "extralarge";
})(Size || (Size = {}));
console.log(Size[0]);
console.log(Size[1]);
console.log(Size.large);
console.log(Size[3]);
console.log("Third example of enum ==\"Measurement\" :");
var Measurement;
(function (Measurement) {
    Measurement[Measurement["length"] = 0] = "length";
    Measurement[Measurement["weight"] = 1] = "weight";
    Measurement[Measurement["capacity"] = 2] = "capacity";
    Measurement[Measurement["time"] = 3] = "time";
})(Measurement || (Measurement = {}));
console.log(Measurement[0]);
console.log(Measurement[1]);
console.log(Measurement[2]);
console.log(Measurement[3]);
