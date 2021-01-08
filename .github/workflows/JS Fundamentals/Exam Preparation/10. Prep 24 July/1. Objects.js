// function concert(string) {

//     // 1. inputs
//     let total = 0;
//     let finalGroup = string.pop();

//     let list = new Map();

//     function added(bandName, artist) {
//         let artists = artist.split(', ')
//         if (!list.has(bandName)) {
//             list.set(bandName, { artists: new Set(artists) });
//         } else {
//             let oldObjMapValue = list.get(bandName);
//             let oldArtist = Array.from(oldObjMapValue.artists || [])
//                 // vzimame bandata ot map-a s get,artistite s .artists - propyrtito,  i go pravim na masiv, za da go konkatenirame s novite artisti i da gi wkarame w nov set za da sa unikalni

//             // moje i s obekt, kojto dyrji propyrtita time i artist s masiw, set

//             let currentArtist = oldArtist.concat(artists)

//             // konkatenirame masiv
//             list.set(bandName, {
//                     ...oldObjMapValue,
//                     artists: new Set(currentArtist),

//                 })
//                 // seta priema masiv, i ekstrakva unikalnite
//                 // ...oldObjMap - spred na obekti/object assign/ - vkarahme ako veche ima syshtestuvash sazdaden s time, v tozi, v koito ne s eiska time, zaradi judje
//         }
//     }


//     function play(bandName, time) {
//         time = Number(time);

//         if (list.has(bandName)) {
//             const band = list.get(bandName);
//             const artists = band.artists;
//             const oldTime = band.time;

//             list.set(bandName, {
//                 time: ((oldTime || 0) + time),
//                 artists,
//             });
//         } else {
//             list.set(bandName, {
//                 time
//             });
//         }
//         total += time
//     }


//     // 2. Execute commands
//     let commands = string.shift()

//     while (commands !== 'start of concert') {
//         let command = commands.split('; ');

//         switch (command[0]) {
//             case 'Add':

//                 added(command[1], command[2]);
//                 break;
//             case 'Play':
//                 play(command[1], command[2]);
//                 break;
//         }

//         commands = string.shift();

//     }

//     // 3.sorting

//     let listEntries = Array.from(list.entries()).sort((a, b) => {
//         if (b[1].time != a[1].time) {
//             return b[1].time - a[1].time
//         } else {
//             return a[0].localeCompare(b[0])
//         }


//     });

//     // 4.Print result
//     console.log(`Total time: ${total}`);

//     for (const kvp of listEntries) {
//         console.log(`${kvp[0]} -> ${kvp[1].time}`);
//     }
//     console.log(finalGroup);
//     let { artists } = list.get(finalGroup);

//     for (const kvp of artists) {
//         console.log(`=> ${kvp}`);
//     }



// }


function concert(string) {

    let total = 0;
    let finalGroup = string.pop();

    let band = {};
    let playTime = {}

    function added(bandName, artist) {
        let members = artist.split(', ')
        if (!band[bandName]) {
            band[bandName] = []
            for (let i = 0; i < members.length; i++) {
                if (!band[bandName].includes(members[i])) {
                    band[bandName].push(members[i])
                }
            }
        } else {
            for (let i = 0; i < members.length; i++) {
                if (!band[bandName].includes(members[i])) {
                    band[bandName].push(members[i])
                }
            }
        }
    }

    function play(bandName, time) {
        timeOn = Number(time);
        if (!playTime[bandName]) {
            playTime[bandName] = 0


        }
        playTime[bandName] += timeOn

        total += timeOn
    }

    let commands = string.shift()

    while (commands !== 'start of concert') {
        let command = commands.split('; ');

        switch (command[0]) {
            case 'Add':

                added(command[1], command[2]);
                break;
            case 'Play':
                play(command[1], command[2]);
                break;
        }

        commands = string.shift();

    }
    // 3.Sort

    let playEntry = Object.entries(playTime)
        .sort((a, b) => {
            if (b[1] != a[1]) {
                return b[1] - a[1]
            } else {
                return a[0].localeCompare(b[0])
            }


        });
    // let bandMembers = Object.entries(band)
    //     .sort((a, b) => b[0].length - a[0].length);

    //4. Print

    console.log(`Total time: ${total}`);


    for (const kvp of playEntry) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

    console.log(finalGroup);

    band[finalGroup].forEach(char => {
        console.log(`=> ${char}`);
    })

    //printiram samo velue-tata na ` kluch, koito sa mi V MASIV!!! na obekta, zatova ne mi e nujno entries - OBHOJDAM MASIW, DOSTYPEN PO OBEKT



}



concert([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
])
concert([
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
])