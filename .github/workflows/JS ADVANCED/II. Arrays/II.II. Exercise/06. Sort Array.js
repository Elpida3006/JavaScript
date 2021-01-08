function sorting(array) {

    let sorted = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        } else {
            return a.localeCompare(b)
        }
    });
    for (let kvp of sorted) {
        console.log(kvp);
    }
}
sorting(
    ['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George'
    ]
)