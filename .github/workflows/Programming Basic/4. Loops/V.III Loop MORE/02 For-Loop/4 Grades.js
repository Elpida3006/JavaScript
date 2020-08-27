function grades(input) {

    let studentCount = +(input.shift());
    let gradesBellow3 = 0;
    let gradesBellow4 = 0;
    let gradesBellow5 = 0;
    let excellentGrades = 0;
    let sum = 0;

    for (let i = 0; i < studentCount; i++) {
        let grade = +(input.shift());
        sum += grade;

        if (grade >= 2 && grade < 3) {
            gradesBellow3++;
        }
        else if (grade >= 3 && grade < 4) {
            gradesBellow4++;
        }
        else if (grade >= 4 && grade < 5) {
            gradesBellow5++;
        }

        else {
            excellentGrades++;
        }

    }

    let topStudents = excellentGrades / studentCount * 100;
    let studentsBellow5 = gradesBellow5 / studentCount * 100;
    let studentsBellow4 = gradesBellow4 / studentCount * 100;
    let failedStudents = gradesBellow3 / studentCount * 100;
    let average = sum / studentCount;

    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentsBellow5.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentsBellow4.toFixed(2)}%`);
    console.log(`Fail: ${failedStudents.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);

}
grades(["10", "3.00", "2.99", '5.68', "3.01", "4", "6.00", "4.50", "2.44", "5"]);
grades();