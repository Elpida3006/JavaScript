function firm(hour, days, worker) {
    hour = Number(hour);
    days = Number(days);
    worker = Number(worker);
}
 function firm(input) {
    hour = Number(input.shift());
    days = Number(input.shift());
    worker = Number(input.shift());
 
    let effectiveworkhours = Math.floor(days * 0.9 * 8) + (worker * 2 * days)
    
    if (effectiveworkhours >= hour) {
        console.log(`Yes!${(effectiveworkhours - hour)} hours left.`);
    }
    else 
    {
        console.log(`Not enough time!${(hour - effectiveworkhours)} hours needed.`);
    }




}

firm(90, 7, 3);
firm(99, 3, 1);
firm(50, 5, 2);
