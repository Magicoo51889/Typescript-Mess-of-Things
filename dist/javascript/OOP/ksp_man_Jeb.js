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
function ksp_man() {
    var ksp_person = /** @class */ (function () {
        function ksp_person(name, age, profession, badS) {
            this.name = name;
            this.age = age;
            this.profession = profession;
            this.badS = badS;
        }
        return ksp_person;
    }());
    var Jeb = /** @class */ (function (_super) {
        __extends(Jeb, _super);
        function Jeb() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Jeb.prototype.talk = function () {
            this.name = "Jebediah";
            this.age = 20;
            this.profession = "pilot";
            this.badS = true;
        };
        return Jeb;
    }(ksp_person));
    var Bill = /** @class */ (function (_super) {
        __extends(Bill, _super);
        function Bill() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Bill.prototype.talk = function () {
            this.name = "Bill";
            this.age = 18;
            this.profession = "Engineer";
            this.badS = false;
        };
        return Bill;
    }(ksp_person));
    var Bob = /** @class */ (function (_super) {
        __extends(Bob, _super);
        function Bob() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Bob.prototype.talk = function () {
            this.name = "Bob";
            this.age = 21;
            this.profession = "Scientist";
            this.badS = false;
        };
        return Bob;
    }(ksp_person));
    var Valentina = /** @class */ (function (_super) {
        __extends(Valentina, _super);
        function Valentina() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Valentina.prototype.talk = function () {
            this.name = "Valentina";
            this.age = 23;
            this.profession = "pilot";
            this.badS = false;
        };
        return Valentina;
    }(ksp_person));
    console.log(ksp_person);
}
