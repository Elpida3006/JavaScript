// function multiplyBy2(arr) {
//     // function multiplyBy2(...arr) {
//     let element = +arr[0];

//         arr.forEach(element => {
//             if (element < 0) {
//                 console.log(`Negative number!`);
//             }
//             else
//             console.log(`Result: ${(element * 2).toFixed(2)}`)
//         });

// }


// multiplyBy2([12, 43.2144, 12.3, 543.23, -20]);

// // function multiplyBy2(arr) {
// //     let element = +(arr[0]);
    
// //     do {
        
// //         console.log(`Result: ${(element * 2).toFixed(2)}`);
       
       
// //         while (true) {
// //             if (element <= 0) {
                
// //         console.log(`Negative number!`);
// //             }  
// //         }

// //     }

// // }
// // multiplyBy2([12, 43.2144, 12.3, 543.23, -20]);




// function multiplyBy2(input) {
  
    
//     while (true) {
//         let element = +(input.shift());  
//         if (element >= 0) {
//             console.log(`Result: ${(element * 2).toFixed(2)}`);
//         }
//         else {
   
//      console.log(`Negative number!`);
//      break; }
    
//     }
// }
    // multiplyBy2([12, 43.2144, 12.3, 543.23, -20]);

    function multiplyByTwo(input) {
        while(true) {
            number = Number(input.shift());
            if (number < 0) {
                console.log('Negative number!')
                break;
            } else {
                console.log(`Result: ${(number * 2).toFixed(2)}`)
            }
        }
    }
    multiplyByTwo([12, 43.2144, 12.3, 543.23, -20]);