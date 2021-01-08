 validityChecker = (array) => {
     let x1 = Number(array.shift());
     let y1 = Number(array.shift());
     let x2 = Number(array.shift());
     let y2 = Number(array.shift());

     distnaceCheck = (x1, y1, x2, y2) => {
         let a = x1 - x2;
         let b = y1 - y2;
         let distance = Math.sqrt(a * a + b * b);
         if (Number.isInteger(distance)) {
             return "valid";
         } else {
             return "invalid";
         }
     }

     console.log(`{${x1}, ${y1}} to {0, 0} is ${distnaceCheck(x1,y1,0,0)}`)
     console.log(`{${x2}, ${y2}} to {0, 0} is ${distnaceCheck(x2,y2,0,0)}`)
     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distnaceCheck(x1,y1,x2,y2)}`)
 }
 validityChecker([2, 1, 1, 1])