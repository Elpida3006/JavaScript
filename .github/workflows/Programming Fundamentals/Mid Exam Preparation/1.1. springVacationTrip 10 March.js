function springVacationTrip(data) {
    let days = Number(data.shift());
    let budget = Number(data.shift());
    let countPeople = Number(data.shift());
    let priceFuelPerKm = Number(data.shift());
    let foodPriceperPersonDay = Number(data.shift());

    let roomPricePersonDay = Number(data.shift());
    if (countPeople > 10) {
        roomPricePersonDay *= 0.75;
    }

    let expenses = countPeople * days * (foodPriceperPersonDay + roomPricePersonDay);

    let isVacation = true;

    for (let i = 1; i <= days; i++) {
        let n = Number(data.shift());
        expenses += n * priceFuelPerKm;

        if (i % 3 == 0 || i % 5 == 0) {
            expenses *= 1.4;
        } else if (i % 7 == 0) {
            expenses -= expenses / countPeople;
        }
        if ((expenses) > budget) {
            console.log(`Not enough money to continue the trip. You need ${Math.abs(expenses - budget).toFixed(2)}$ more.`);

            isVacation = false;
            return;
        }

    }

    let freeMoney = budget - expenses;
    if (isVacation) {
        console.log(`You have reached the destination. You have ${freeMoney.toFixed(2)}$ budget left.`);
    }
}
springVacationTrip([10,
    20500,
    11,
    1.2,
    8,
    13,
    100,
    150,
    500,
    400,
    600,
    130,
    300,
    350,
    200,
    300,
])