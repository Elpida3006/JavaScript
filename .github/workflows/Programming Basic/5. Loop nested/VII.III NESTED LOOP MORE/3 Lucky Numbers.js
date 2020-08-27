function happyNumber(input) {
  

    n = Number(input.shift());
    let result = '';  
   

    for (i = 1; i <= 9; i++) {  
        for (j = 1; j <= 9; j++) {  
            for (k = 1; k <= 9; k++) { 
                for (m = 1; m <= 9; m++) { 
                    
                    if (((i + j) == (k + m)) && (n % (i + j) == 0)) {
                        result += `${i}${j}${k}${m} `;
                    }
                }
            }
        }
    }

    console.log(result) 
}
happyNumber(["3"]);