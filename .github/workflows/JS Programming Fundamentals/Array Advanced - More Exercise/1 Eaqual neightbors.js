function eaqual_neughtbors(array) {

    let isEaqual = 0;

    for (let a = 0; a < array.length - 1; a++) {
        for (let b = 0; b < array[a].length; b++) {
            if (array[a][b] == array[a + 1][b]) {
                isEaqual++;
            }
            if (array[a][b] == array[a][b + 1]) {
                isEaqual++;
            }

            if (a == array.length - 2 && array[a + 1][b] == array[a + 1][b + 1]) {
                isEaqual++;
            }
        }

    }


    console.log(isEaqual);
}

eaqual_neughtbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
])