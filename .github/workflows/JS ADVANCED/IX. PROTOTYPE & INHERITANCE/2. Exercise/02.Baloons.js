function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = +gasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight) //извикваме конструктора на 1 клас
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
        get ribbon() {

            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonLength, ribbonColor, text) {
            super(color, gasWeight, ribbonLength, ribbonColor)
            this._text = text
        }
        get text() {
            //GET-ERA go izpolzwame za da wrashta nqkakva stoinost, 
            //koqto se pazi na instanciqta - READ ONLY, slagame
            // i SET-ER - AKO ISKAME DA Q PROMENIM
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
        //връща нашия модул, нашето API????
    }
}
const balloons = solve();
const a = new balloons.Balloon('green', 10);
console.log(a);
//80/100?
function solve() {
    function Balloon(color, gasWeight) {
        this.color = color;
        this.gasWeight = gasWeight;
    }


    function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
        Balloon.call(this, color, gasWeight)
            //извикваме конструктора на 1 клас
            // PartyBalloon.prototype = Object.create(Balloon.prototype)

        this._ribbon = {
            color: ribbonColor,
            length: ribbonLength
        };
        Object.setPrototypeOf(PartyBalloon, Balloon);
        Object.setPrototypeOf(PartyBalloon.prototype, Balloon.prototype);

        Object.defineProperty(PartyBalloon.prototype, 'ribbon', {
            get: function() { return this._ribbon }
        });
    }

    function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLengt, text) {
        PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLengt);
        // BirthdayBalloon.prototype = Object.create(PartyBalloon.prototype);

        this._text = text
        Object.setPrototypeOf(BirthdayBalloon, PartyBalloon)
        Object.setPrototypeOf(BirthdayBalloon.prototype, PartyBalloon.prototype)

        Object.defineProperty(BirthdayBalloon.prototype, 'text', {
            get: function() { return this._text }
        });

        //GET-ERA go izpolzwame za da wrashta nqkakva stoinost, 
        //koqto se pazi na instanciqta - READ ONLY, slagame
        // i SET-ER - AKO ISKAME DA Q PROMENIM


    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
        //връща нашия модул, нашето API????
    }
}