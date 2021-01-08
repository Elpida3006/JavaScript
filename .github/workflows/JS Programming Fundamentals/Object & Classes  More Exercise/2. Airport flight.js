// function airportFlight(array) {
//     let flights = array.shift()

//     let changedFlight = {};

//     for (fligh of flights) {
//         let oneFlight = fligh.split(' ');
//         let sector = oneFlight[0];
//         let destinationFlight = oneFlight[1];
//         changedFlight[sector] = {
//             Destination: destinationFlight,
//             Status: 'Ready to fly'
//         };
//     }

//     let newStatus = array.shift()

//     for (fligh of newStatus) {
//         let newFlight = fligh.split(' ')
//         let numberFlightNew = newFlight[0];
//         let status = newFlight[1];
//         if (changedFlight.hasOwnProperty(numberFlightNew)) {
//             changedFlight[numberFlightNew].Status = status;
//         }
//     }


//     let lastCommand = array.shift().toString();

//     for (let numberFlightNew in changedFlight) {
//         if (changedFlight[numberFlightNew].Status == lastCommand) {
//             console.log(changedFlight[numberFlightNew]);
//         }
//     }

// }

function airportFlight(array) {

    let flights = array[0];
    let newFlightsStatus = array[1];
    let flightStatus = array[2].toString();

    let obj = {};

    for (let x of flights) {
        let [sector, destination] = x.split(" ");
        obj[sector] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    }

    for (let y of newFlightsStatus) {
        let [sector, status] = y.split(" ");
        if (obj.hasOwnProperty(sector)) {
            obj[sector].Status = status;
        }
    }

    for (let x in obj) {
        if (obj[x].Status === flightStatus) {
            console.log(obj[x]);
        }
    }
}
// airportFlight([
//     ['WN269 Delaware',

//         'FL2269 Oregon',

//         'WN498 Las Vegas',

//         'WN3145 Ohio',

//         'WN612 Alabama',

//         'WN4010 New York',

//         'WN1173 California',

//         'DL2120 Texas',

//         'KL5744 Illinois',

//         'WN678 Pennsylvania'
//     ],

//     ['DL2120 Cancelled',

//         'WN612 Cancelled',

//         'WN1173 Cancelled',

//         'SK430 Cancelled'
//     ],

//     ['Cancelled']

// ])

airportFlight[['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'
], ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'
], ['Ready to fly']]