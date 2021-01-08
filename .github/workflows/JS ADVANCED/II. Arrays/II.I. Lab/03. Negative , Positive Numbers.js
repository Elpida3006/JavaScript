 negativePositive = (array) => {
     let result = [];

     array.forEach(element => {
         if (element >= 0) {
             result.push(element)

         } else {
             result.unshift(element)
         }
     });
     console.log(result.join('\n'));
 }
 negativePositive([3, -2, 0, -1])