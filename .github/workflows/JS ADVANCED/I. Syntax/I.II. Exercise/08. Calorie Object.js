   calorieObject = (array) => {
       let obj = {}

       array.forEach((element, index, array) => {
           if (index % 2 == 0) {
               obj[array[index]] = 0
           } else {
               obj[array[index - 1]] = Number(array[index])
           }
       });

       return (obj)
   }