function fuelTank(gorivo, litri) {
     gorivo = gorivo;
     litri = Number(litri);

//function fuelTank(input) {
   // let gorivo = input.shift();
    //let litri = Number(input.shift());

    if (gorivo === "Diesel" || gorivo === "Gasoline" || gorivo === "Gas") {
        
        //if (["Diesel", "Gasoline", "Gas"].includes(gorivo)) {

                if (litri >= 25) {

        console.log(`You have enough ${gorivo.toLowerCase()}.`);

                 }
                else if (litri < 25 ) {
        console.log(`Fill your tank with ${gorivo.toLowerCase()}!`);
            }
    }
    
    
    
    else
    {
       console.log(`Invalid fuel!`);
    
    }
}

fuelTank("Diesel", "10");
fuelTank("Gasoline", "40");
fuelTank("Gas", "25");
fuelTank("Kerosene", "200");

