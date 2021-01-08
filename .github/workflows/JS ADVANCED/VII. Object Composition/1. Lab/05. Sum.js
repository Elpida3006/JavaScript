// function cars(commands) {
//     let objStorage = {};
//     let commandProcessor = {
//         create: function(subcommands) {
//             if (subcommands[1] === "inherit") {
//                 let name = subcommands[0];
//                 let cloneName = subcommands[2];
//                 let parentObj = objStorage[cloneName]
//                 let newObj = Object.create(parentObj);
//                 objStorage[name] = newObj;

//             } else {
//                 let name = subcommands[0];
//                 let newObj = Object.create(null);
//                 objStorage[name] = newObj;

//             }
//         },
//         set: function(subcommands) {
//             let name = subcommands[0];
//             let prop = subcommands[1];
//             let propValue = subcommands[2];
//             let obj = objStorage[name];
//             obj[prop] = propValue;
//         },
//         print: function(subcommands) {
//             let name = subcommands[0];
//             let result = [];
//             let obj = objStorage[name];
//             Object.keys(obj).forEach(key => result.push(`${key}:${obj[key]}`));
//             while (Object.getPrototypeOf(obj)) {
//                 Object.keys(Object.getPrototypeOf(obj)).forEach(key => result.push(`${key}:${Object.getPrototypeOf(obj)[key]}`));
//                 obj = Object.getPrototypeOf(obj);
//             }
//             console.log(result.join(', '));
//         }
//     };

//     for (let command of commands) {
//         command = command.split(' ');
//         let action = command.shift();
//         commandProcessor[action](command);

//     }
// }


// function cars(input) {
//     let objects = {};

//     input.map(data => {
//         data = data.split(' ');
//         data[0] === 'create' && data.length === 2 ? create(data[1]) : 'ass';
//         data[0] === 'create' && data.length === 4 ? createAndInherit(data[1], data[3]) : 'pass';
//         data[0] === 'set' ? set(data[1], data[2], data[3]) : 'or';
//         data[0] === 'print' ? print(data[1]) : 'gas';
//     });

//     function create(name) {
//         objects[name] = {};
//     }

//     function createAndInherit(name, parentName) {
//         let parent = objects[parentName];
//         objects[name] = Object.create(parent);
//     }

//     function set(name, key, value) {
//         objects[name][key] = value;
//     }

//     function print(name) {
//         let items = [];
//         // We need to use FOR IN or it won't get the parent attributes...
//         for (let i in objects[name]) {
//             items.push(`${i}:${objects[name][i]}`);
//         }
//         console.log(items.join(', '));
//     }
// }

function cars(commands) {

    const obj = {
        create: (acc, nameCar, _, inheritName) => {
            if (!inheritName) {
                acc[nameCar] = {};
                return acc;
            }
            const inherit = acc[inheritName];
            acc[nameCar] = Object.create(inherit);
            return acc;
        },
        set: (acc, nameCar, propName, propValue) => {
            acc[nameCar][propName] = propValue;
            return acc;
        },
        print: (acc, nameCar) => {
            let items = [];

            for (let i in acc[nameCar]) {
                items.push(`${i}:${acc[nameCar][i]}`);
            }
            console.log(items.join(', '));
            return acc;
        }
    };


    return (commands.reduce((acc, currCommand) => {
        const [operation, nameCar, propName, propValue] = currCommand.split(' ')
        return obj[operation][acc, nameCar, propName, propValue];
    }, {}));

}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])