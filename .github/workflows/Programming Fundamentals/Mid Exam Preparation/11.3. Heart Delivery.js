function heartDelivery(array) {


    let heart = array.shift().split('@').map(Number)


    let startIndex = 0;
    let commands = array.shift()

    while (commands !== 'Love!') {

        let jumpCommand = commands.split(' ')

        switch (jumpCommand[0]) {
            case 'Jump':

                startIndex += Number(jumpCommand[1])

                if (startIndex >= heart.length) {
                    startIndex = 0;
                }
                if (heart[startIndex] == 0) {
                    console.log(`Place ${startIndex} already had Valentine's day.`);
                } else {
                    heart[startIndex] -= 2;
                    if (heart[startIndex] == 0) {
                        console.log(`Place ${startIndex} has Valentine's day.`);
                    }
                }
                break;
        }

        commands = array.shift()

    }


    console.log(`Cupid's last position was ${startIndex}.`);
    let isValentine = true;
    let failed = 0;
    heart.forEach(element => {
        if (element !== 0) {
            isValentine = false;
            failed++

        }
    });
    if (isValentine) {
        console.log(`Mission was successful.`);
    } else {

        console.log(`Cupid has failed ${failed} places.`);
    }

}
// heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!'])
heartDelivery([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
])