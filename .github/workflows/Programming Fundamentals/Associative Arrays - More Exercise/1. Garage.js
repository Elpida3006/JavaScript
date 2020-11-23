function garaje(array) {
    let reservationGarage = new Map()
    for (let i = 0; i < array.length; i++) {
        let carInfo = array[i].split(' - ');
        let number = Number(carInfo[0])
        let info = carInfo[1].split(', ')


        let fullInfo = [];
        for (let line of info) {
            let [key, value] = line.split(':');
            fullInfo.push([key, value])
        }
        if (!reservationGarage.has(number)) {
            reservationGarage.set(number, [])
        }
        reservationGarage.get(number).push(fullInfo)

    }

    for (let kvp of reservationGarage) {
        console.log(`Garage № ${kvp[0]}`);
        for (let line of kvp[1]) {
            let finalLine = ""
            for (let pair of line) {

                finalLine += `${pair.join(' -')}, `
            }
            console.log(`--- ${finalLine.slice(0, -2)}`);
        }
    }



}
garaje(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])