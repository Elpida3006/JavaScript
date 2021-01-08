tictacToe = (array) => {

    let dashboars = [
            [false, false, false],
            [false, false, false],
            [false, false, false],

        ]
        // let player = player === "X" ? "O" : "Y"
    ifWins = (dashboars, player) => {
        for (let row = 0; row < array.length; row++) {
            const element = array[row];
            if (!dashboars[row][col]) {
                dashboars[row][col] = player
            } else {}

        }
    }


}

//This place is already taken. Please choose another!