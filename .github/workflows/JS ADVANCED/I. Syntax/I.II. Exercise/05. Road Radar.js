 radar = (array) => {
     let speed = Number(array.shift())
     let area = array.shift();

     let limits = { motorway: 130, interstate: 90, city: 50, residential: 20 };

     let message = (speed, limit) => {
         let over = speed - limit;

         (over > 40) ? console.log(`reckless driving`):
             (over > 20) ? console.log(`excessive speeding`) :
             (over > 0) ? console.log(`speeding`) : 'pass'

     }
     message(speed, limits[area])
 }



 // let over = 0;
 // switch (area) {
 //     case 'motorway':
 //         over = speed - 130;
 //         break;
 //     case 'interstate':
 //         over = speed - 90;
 //         break;
 //     case 'city':
 //         over = speed - 50;
 //         break;

 //     case 'residential':
 //         over = speed - 20;
 //         break;

 // }

 // if (over > 40) {
 //     console.log(`reckless driving`);
 // } else if (over > 20) {
 //     console.log(`excessive speeding`);
 // } else if (over > 0) {
 //     console.log(`speeding`);
 // }
 // }
 radar([40, 'city']);
 radar([21, 'residential'])
 radar([120, 'interstate'])
 radar([200, 'motorway'])