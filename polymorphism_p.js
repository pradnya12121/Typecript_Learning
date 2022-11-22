var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Organ = /** @class */ (function () {
    function Organ() {
        this.id = 101;
        this.name = "Prashant";
        console.log("ID:".concat(this.id, " Name: ").concat(this.name));
    }
    Organ.prototype.display = function () {
    };
    return Organ;
}());
var Even = /** @class */ (function () {
    function Even(id, name, description, Starttime) {
        // super()//call the parent class constructor
        this.description = description;
        this.Starttime = Starttime;
        this.id = id;
        this.name = name;
    }
    Even.prototype.display = function () {
        // super.display()
        console.log("Event ID:".concat(this.id, "  Event Name:").concat(this.name, " Description:").concat(this.description, " Starttime: ").concat(this.Starttime));
    };
    return Even;
}());
var Ven = /** @class */ (function (_super) {
    __extends(Ven, _super);
    function Ven(id, name, description, address) {
        var _this = _super.call(this) || this;
        _this.description = description;
        _this.address = address;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Ven.prototype.display = function () {
        console.log("Ven ID:".concat(this.id, " Ven Name:").concat(this.name, "  Description: ").concat(this.description, " Address:").concat(this.address));
    };
    return Ven;
}(Organ));
var organ = [new Even(2, "Birthday Party", "Arrav 1st birthday party..,", "11:00 AM"), new Ven(3, "Orchid Gardens", "Landscape area", "Sangola")];
for (var _i = 0, organ_1 = organ; _i < organ_1.length; _i++) {
    var iterator = organ_1[_i];
    iterator.display();
}
