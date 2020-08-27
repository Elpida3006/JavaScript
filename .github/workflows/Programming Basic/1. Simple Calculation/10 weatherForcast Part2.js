function watherForcast(text) {
    let wather = Number(text.shift());

    if (wather >= 26.00 && wather <= 35.00) {
console.log("Hot");
    }   else if (wather >= 20.1 && wather  <= 25.9) {
console.log("Warm");
    }   else if (wather >= 15.00 && wather  <= 20.00) {
    console.log("Mild");
    }   else if (wather >= 12.00 && wather <= 14.9) {
    console.log("Cool");
    }   else if (wather >=5.00 , wather <= 11.9) {
console.log("Cold");
   }    else {
       console.log("unknown");
   }
}

watherForcast();
