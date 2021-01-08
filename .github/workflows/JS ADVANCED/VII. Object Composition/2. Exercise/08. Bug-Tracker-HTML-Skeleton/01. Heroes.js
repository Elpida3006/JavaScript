// function Classmate(input) {
//     this.names = input[0].join(', ')
//     this.nameClass = input[1]
//     this.group = input[2]


//     function classMate() {
//         return `${this.group} ${this.names}`


//     }



// }
// let classn = new Classmate([
//     ['Pesho', 'Ivo'], 'B', 'II'
// ])
// console.log(classn.classMate);

//композиране на обект
// Create a function returns an object with 2 methods

function solve() {


    //деклариране на фактори функции

    function fighter(name) {
        const instanse = {
            name,
            stamina: 100,
            health: 100,
            fight
        }


        function fight() {
            this.stamina--
                console.log(`${this.name} slashes at the foe!`);
        }
        return instanse;


    }

    function mage(name) {
        const instanse = {
            name,
            mana: 100,
            health: 100,
            cast
        }


        function cast(spell) {
            this.mana--
                console.log(`${this.name} cast ${spell}`);
        }
        return instanse;
    }
    //връщане на обект съдържащи фактори функции като методи
    return {
        fighter,
        mage
    }
}

// С ПРОТОТИП


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);