class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = +ticketPrice
        this.screenings = []
            //ekranizaciq
        this.totalProfit = 0;

        //pechalba
        this.ticketsCount = 0;
        //prodadeni bileti
    }

    newScreening(date, hall, description) {
        let movieInfo = { date: date, hall: hall, description: description }

        let screen = this.screenings.find(
            (o) => o.date === date && o.hall === hall
        );
        if (screen === undefined) {
            this.screenings.push(movieInfo);
            return `New screening of ${this.movieName} is added.`;
        } else {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        // if (this.screenings[date] === date && this.screenings[hall] === hall) {
        //     throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        // }
        // this.screenings.push(movieInfo)
        // return `New screening of ${this.movieName} is added.`


    }

    endScreening(date, hall, soldTickets) {

        let screen = this.screenings.find(
            (o) => o.date === date && o.hall === hall
        );
        if (screen == undefined) {
            // if (this.screenings[date] == date && this.screenings[hall] == hall) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }
        let currentProfit = +soldTickets * +this.ticketPrice;
        this.totalProfit += currentProfit;
        this.ticketsCount += Number(soldTickets);
        //delete the screening from the screenings array 
        let searchScreening = 0;
        for (let i = 0; i < this.screenings.length; i++) {
            if (
                this.screenings[i].date === date &&
                this.screenings[i].hall === hall
            ) {
                searchScreening = i;
                break;
            }
        }
        this.screenings.splice(searchScreening, 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`


    }
    toString() {

        let result = [
            `${this.movieName} full information:`,
            `Total profit: ${this.totalProfit.toFixed(0)}$`,
            `Sold Tickets: ${this.ticketsCount}`,
        ];
        if (this.screenings.length > 0) {
            result.push(`Remaining film screenings:`);
            let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            for (const s of sorted) {
                result.push(`${s.hall} - ${s.date} - ${s.description}`);
            }
        } else {
            result.push(`No more screenings!`);
        }
        return result.join("\n");
    }


}
let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));

console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());