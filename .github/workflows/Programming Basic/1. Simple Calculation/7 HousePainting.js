function housePainting(input) {
let x = Number(input.shift());
let y = Number(input.shift());
let h = Number(input.shift());

let greenPaint = ((((2 * (x * y)) - (4.5)) + ((2 * (x * x)) - 2.4)) / 3.4).toFixed(2);
let redPaint = (((2 * (x * y)) + (2 * ((x * h) / 2))) / 4.3).toFixed(2);

console.log(greenPaint);
console.log(redPaint);

}


function housePainting(x, y, h) {

    x = Number(x);
    y = Number(y);
    h = Number(h);
let stranaprednastena = stranazadnastena =  x 
let stranichnastena1 = x 
let stranichnastena2 = y 

let pokrivstena1 = x;
let pokrivstena2 = y;

let pokrivvisochina = h 

let ploshtdoor = 1.2 * 2;
let ploshtwindow = 1.5 * 1.5;

let ploshtprednastrana = (x * x - ploshtdoor);
let ploshtzadnastrana = x * x;
let ploshtstranichnastena = ((x * y) - ploshtwindow);
let greenpaint = (((ploshtprednastrana + ploshtzadnastrana) + (ploshtstranichnastena * 2))/ 3.4).toFixed(2);


let ploshtpokriv1 = (x * y) * 2;
let ploshtpokriv2 = ((x * h) / 2) * 2;

let redpaint = ((ploshtpokriv1  + ploshtpokriv2) / 4.3).toFixed(2);


console.log(greenpaint);
console.log(redpaint);


}
housePainting(6, 10, 5.2);

