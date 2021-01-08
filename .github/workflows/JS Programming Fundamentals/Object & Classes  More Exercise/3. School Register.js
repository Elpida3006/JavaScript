function schoolRegisterArrange(array) {

    let successStudent = {};
    for (let student = 0; student < array.length; student++) {
        let studentInfo = array[student].split(', ')
        let nameStudent = studentInfo[0].split(': ')[1];
        let gradeStudent = (studentInfo[1]).split(': ')[1]
        gradeStudent = Number(gradeStudent)
        let averageScore = studentInfo[2].split(': ')[1]
        averageScore = Number(averageScore)

        if (averageScore >= 3) {
            let nextClass = gradeStudent + 1
            if (!successStudent.hasOwnProperty(nextClass)) {
                successStudent[nextClass] = []
            }
            successStudent[nextClass].push({ nameStudent, averageScore });
        }
    }

    for (const student in successStudent) {
        console.log(`${student} Grade `);
        let allSuccessStudentsName = '';
        let totalSuccess = 0;
        for (const every of successStudent[student]) {
            allSuccessStudentsName += `${every.nameStudent}, `;
            totalSuccess += every.averageScore;
        }
        console.log(`List of students: ${allSuccessStudentsName.slice(0, -2)}`);
        console.log(`Average annual grade from last year: ${(totalSuccess / successStudent[student].length).toFixed(2)}`);
        console.log();
    }




}
schoolRegisterArrange(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])