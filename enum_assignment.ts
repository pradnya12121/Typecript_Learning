
console.log(`First example of enum =="Seasons" :`);
enum Seasons {
    winter ,
    summer,
    spring

}
console.log(Seasons.spring);
console.log(Seasons[1]);
console.log(Seasons[2]);

console.log(`Second example of enum =="Size" :`);
enum Size {
    small,
    midium,
    large,
    extralarge
}
console.log(Size[0]);
console.log(Size[1]);
console.log(Size.large);
console.log(Size[3]);

console.log(`Third example of enum =="Measurement" :`)
enum Measurement{
    length,
    weight,
    capacity,
    time
}

console.log(Measurement[0]);
console.log(Measurement[1]);
console.log(Measurement[2]);
console.log(Measurement[3]);