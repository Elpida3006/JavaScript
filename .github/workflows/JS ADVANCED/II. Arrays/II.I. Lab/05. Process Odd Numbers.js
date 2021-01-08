 solve = (arr) => {
     return arr.filter((a, index) => index % 2 !== 0)
         .map(x => x * 2)
         .reverse()
         .join(' ')
 }