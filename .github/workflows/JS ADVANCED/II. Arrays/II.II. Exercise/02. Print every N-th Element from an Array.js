function printNth_Element(array) {
    let stepArray = Number(array.pop())


    const every_nth = (array, stepArray) => array.filter((e, i) => i % stepArray == 0);

    console.log(`${every_nth(array, stepArray).join('\n')}`);
}
printNth_Element(['1',
    '2',
    '3',
    '4',
    '5',
    '6'
])
printNth_Element(['dsa',
    'asd',
    'test',
    'tset',
    '2'
])