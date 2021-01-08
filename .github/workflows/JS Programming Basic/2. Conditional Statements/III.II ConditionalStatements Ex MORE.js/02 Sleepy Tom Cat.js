function sleepyTom(numberDays) {

    numberDays = Number(numberDays);

let TomPlay = 30000;
let Peshoworkplay = 63 * (365 - numberDays);
let PeshoHolidayplay = 127 * numberDays;

let PeshoPlay = Peshoworkplay + PeshoHolidayplay;

if (TomPlay < PeshoPlay) {
    let morehour = Math.floor((PeshoPlay - TomPlay) / 60);
    let moremin = (PeshoPlay - TomPlay) - (morehour * 60);
    console.log(`Tom will run away`);
    console.log(`${morehour} hours and ${moremin} minutes more for play`);
}
else
{
    let lesshours = Math.floor((TomPlay - PeshoPlay) / 60);
    let lessmin = (TomPlay - PeshoPlay) - (lesshours * 60)


    console.log(`Tom sleeps well`);
    console.log(`${lesshours} hours and ${lessmin} minutes less for play`);
}





}
sleepyTom(20);
sleepyTom(113);