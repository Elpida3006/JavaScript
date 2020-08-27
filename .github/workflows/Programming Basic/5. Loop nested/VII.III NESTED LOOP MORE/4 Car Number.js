function carNumber(input) {
  

  let  n = Number(input.shift());
  let  sl = Number(input.shift());
    let result = '';  
   

    for (i = n; i <= sl; i++) {  
        for (j = n; j <= sl; j++) {  
            for (k = n; k <= sl; k++) { 
                for (m = n; m <= sl; m++) { 
                    
                    if (((i % 2 == 0 && m % 2 !== 0) || (i % 2 !== 0 && m % 2 == 0)) && (i > m) && ((j + k) % 2 == 0) ) {
                         
                        result += `${i}${j}${k}${m} `;
                    }
                }
            }
        }
    }

    console.log(result) 
}
carNumber(["2", "3"]);