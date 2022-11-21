var carditionalDiraction;
(function (carditionalDiraction) {
    carditionalDiraction[carditionalDiraction["North"] = 0] = "North";
    carditionalDiraction[carditionalDiraction["South"] = 1] = "South";
    carditionalDiraction[carditionalDiraction["East"] = 2] = "East";
    carditionalDiraction[carditionalDiraction["Weast"] = 3] = "Weast";
})(carditionalDiraction || (carditionalDiraction = {}));
console.log(carditionalDiraction.North);
console.log(carditionalDiraction[3]);
console.log(carditionalDiraction[2]);
console.log(carditionalDiraction[1]);
