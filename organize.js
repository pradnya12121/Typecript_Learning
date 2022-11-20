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
var Org = /** @class */ (function () {
    function Org() {
        this.name = "Pramod";
        this.id = 1;
        console.log("ID: ".concat(this.id, "  Name:").concat(this.name));
    }
    Org.prototype.dispaly = function () {
        // console.log(`id:${this.id} Name: ${this.name} Description: ${this.description} Starttime: ${this.starttime}`)
    };
    return Org;
}());
var Eve = /** @class */ (function (_super) {
    __extends(Eve, _super);
    function Eve(id, name, description, starttime) {
        var _this = _super.call(this) //calling constructor of parent class using super()
         || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.starttime = starttime;
        console.log("id:".concat(_this.id, " Name: ").concat(_this.name, " Description: ").concat(_this.description, " Starttime: ").concat(_this.starttime));
        return _this;
    }
    Eve.prototype.display = function () {
        //   super.dispaly()
        // console.log(`id:${this.id} Name: ${this.name} Description: ${this.description} Starttime: ${this.starttime}`)
    };
    return Eve;
}(Org));
var Ven = /** @class */ (function (_super) {
    __extends(Ven, _super);
    function Ven(id, name, description, starttime, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.starttime = starttime;
        _this.address = address;
        return _this;
    }
    Ven.prototype.dispaly = function () {
        //   super.dispaly();
        console.log("id: ".concat(this.id, " Name: ").concat(this.name, " Description:").concat(this.description, " Starttime: ").concat(this.starttime, " Address: ").concat(this.address));
    };
    return Ven;
}(Org));
var org = [new Eve(101, "Birthday Party!", "Aarav 1st Birthday Celebration", 11), new Ven(103, "Orcid Garden", "Landscape Area", 11, "Sangola,near shivaji politicnical college")];
for (var _i = 0, org_1 = org; _i < org_1.length; _i++) {
    var iterator = org_1[_i];
    iterator.dispaly();
}
