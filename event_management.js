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
        this.id = 1;
        this.Name = "yash";
        console.log("ID: ".concat(this.id, " Name: ").concat(this.Name));
    }
    Organizer.prototype.display = function () {
    };
    return Organizer;
}());
var Event1 = /** @class */ (function () {
    function Event1(id, Name, Description, SetTime) {
        //  super()//calling app property of parent class
        this.id = id;
        this.Name = Name;
        this.Description = Description;
        this.SetTime = SetTime;
    }
    Event1.prototype.display = function () {
        // super.display()
        console.log("Event id: ".concat(this.id, "  Event Name: ").concat(this.Name, "   Event Description: ").concat(this.Description, "   Event time: ").concat(this.SetTime));
    };
    return Event1;
}());
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
var organizer = new Array(new Event1(10, "Weeding", "Ring Ceremony", 4), new Venue(11, "Paradise Garden", "landscape area", 4, "Sangola"));
for (var _i = 0, organizer_1 = organizer; _i < organizer_1.length; _i++) {
    var iterator = organizer_1[_i];
    iterator.display();
}
