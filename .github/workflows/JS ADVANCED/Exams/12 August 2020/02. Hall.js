//100

function solveClasses() {

    class Hall {
        constructor(capacity, name) {
            this.capacity = Number(capacity);
            this.name = name
            this.events = []
        }
        hallEvent(title) {
            if (this.events.includes(title)) {
                throw new Error('This event is already added!');
                // s `This event is already added!` - 88
                // sys skobi - 100
            }
            this.events.push(title)
            return `Event is added.`
        }
        close() {
            this.events = [];
            return `${this.name} hall is closed.`
        }
        toString() {
            let string = `${this.name} hall - ${this.capacity}`
            if (this.events.length > 0) {
                //s [] gyrmi djudje
                string += `\nEvents: ${this.events.join(', ')}`

            }
            return string;

        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name)

            this.screenSize = screenSize
            this.events = []
        }

        close() {
            return super.close() + `Аll screenings are over.`
        }
        toString() {
            let string = super.toString()
            string += `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`
            return string;
        }

    }

    class ConcertHall extends Hall {

        constructor(capacity, name) {
            super(capacity, name)
            this.events = []
        }

        hallEvent(title, performers) {
            this.performers = performers
            let string = super.hallEvent(title)
            return string;
            // this.title = title
            // this.performers = performers
            // this.events.push(title)
            // return super.hallEvent()

        }

        close() {
            // this.performers.length = 0;
            this.events = []
            let string = super.close()
            string += `Аll performances are over.`
            return string;
        }
        toString() {

            let string = super.toString()
            if (this.events.length > 0) {
                string += `\nPerformers: ${(this.performers).join(', ')}.`
            }
            return string;

        }

    }
    return { Hall, MovieTheater, ConcertHall }

}
let classes = solveClasses();
// let hall = new classes.Hall(20, 'Main');
// console.log(hall.hallEvent('Breakfast Ideas'));
// console.log(hall.hallEvent('Annual Charity Ball'));
// console.log(hall.toString());
// console.log(hall.close());
// console.log(hall.toString());

// let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
// console.log(movieHall.hallEvent('Top Gun: Maverick'));
// console.log(movieHall.toString());

let concert = new classes.ConcertHall(5000, 'Diamond');
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA', 'Pesho']));
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());
//100
function solveClasses() {
    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = []
        }

        hallEvent(title) {
            if (this.events.includes(title)) {
                throw new Error('This event is already added!')
            } else {
                this.events.push(title);
                return `Event is added.`
            }
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`
        }

        toString() {
            let output = `${this.name} hall - ${this.capacity}`

            if (this.events.length > 0) {
                output += `\nEvents: ${this.events.join(', ')}`
            }
            return output;
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.capacity = capacity;
            this.name = name;
            this.screenSize = screenSize;
            this.events = [];
        }

        close() {
            return super.close() + `Аll screenings are over.`;
        }

        toString() {
            let output = super.toString();
            output += `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`
            return output;
        }
    }

    class ConcertHall extends Hall {
        hallEvent(title, performers) {
            let output = super.hallEvent(title)
            this.performers = performers;
            return output;
        }

        close() {
            this.performers.length = 0;
            return `${super.close()}Аll performances are over.`;
        }

        toString() {
                return `${super.toString()}${this.events.length ? `\nPerformers: ${this.performers.join(', ')}.` : ''}`;
        }
    }
    return {Hall, MovieTheater, ConcertHall}


  
}