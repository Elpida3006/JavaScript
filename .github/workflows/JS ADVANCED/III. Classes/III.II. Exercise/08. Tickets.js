 ticket = (arrStringsforTickets, sortingCriteria) => {
     class Ticket {
         constructor(descriptor) {
             const [destination, price, status] = descriptor.split('|');

             this.destination = destination
             this.price = Number(price)
             this.status = status
         }
     }

     // const comparator = {
     //     destination: (a, b) => a.destination.localeCompare(b.destination),
     //     price: (a, b) => a.price - (b.price),
     //     status: (a, b) => a.status.localeCompare(b.status),
     // };
     //return tickets.map(t => new Ticket(t)).sort(comparator[criteria])
     return arrStringsforTickets.map(ticket => new Ticket(ticket)).sort(comparator)

     function comparator(a, b) {
         try {
             return a[sortingCriteria].localeCompare(b[sortingCriteria])
         } catch (e) {
             return a[sortingCriteria] - b[sortingCriteria]
         }
     }




 }
 console.log(ticket(['Philadelphia|94.20|available',
         'New York City|95.99|available',
         'New York City|95.99|sold',
         'Boston|126.20|departed'
     ],
     'destination'
 ));