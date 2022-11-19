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
var Organizer = /** @class */ (function () {
    function Organizer() {
    }
    Organizer.prototype.display = function () {
        console.log("ID: ".concat(this.id, " Name: ").concat(this.Name));
    };
    return Organizer;
}());
var Event1 = /** @class */ (function (_super) {
    __extends(Event1, _super);
    function Event1(id, Name, Description, SetTime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.Name = Name;
        _this.Description = Description;
        _this.SetTime = SetTime;
        return _this;
    }
    Event1.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Event id: ".concat(this.id, "  Event Name: ").concat(this.Name, "   Event Description: ").concat(this.Description, "   Event time: ").concat(this.SetTime));
    };
    return Event1;
}(Organizer));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, Name, Description, SetTime, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.Name = Name;
        _this.Description = Description;
        _this.SetTime = SetTime;
        _this.address = address;
        return _this;
    }
    Venue.prototype.display = function () {
        // //  super.display()
        console.log("Venue id: ".concat(this.id, "  Venue Name: ").concat(this.Name, "  Venue Description: ").concat(this.Description, "  Event time: ").concat(this.SetTime, "  Address: ").concat(this.address));
    };
    return Venue;
}(Organizer));
var organizer = new Array(new Event1(10, "Weeding", "Ring Ceremony", 4), new Venue(1, "Paradise Garden", "landscape area", 4, "Sangola"));
for (var _i = 0, organizer_1 = organizer; _i < organizer_1.length; _i++) {
    var iterator = organizer_1[_i];
    iterator.display();
}
//  let organizer=new Event1(102,"Pradnya Kolase","IT Champ",11)
// let organizer=new Venue(102,"Pradnya","IT Champ",11,"Sangola");
// console.log(organizer.display());
