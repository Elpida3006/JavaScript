function bonusScoringSystem(data) {
    //1.Input
    let students = Number(data.shift());
    let lections = Number(data.shift());
    let bonus = Number(data.shift());

    // II. calculate
    let students_bonus = 0;
    let max_bonus = 0;
    let maxattendance = 0;

    for (let i = 1; i <= students; i++) {

        let attendances = Number(data.shift());

        students_bonus = attendances / lections * (5 + bonus);

        if (students_bonus > max_bonus) {
            max_bonus = students_bonus;
            // maxstudents = i;
            maxattendance = attendances;

        }
    }


    console.log(`Max Bonus: ${Math.ceil(max_bonus)}.`);
    console.log(`The student has attended ${maxattendance} lectures.`);


}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])