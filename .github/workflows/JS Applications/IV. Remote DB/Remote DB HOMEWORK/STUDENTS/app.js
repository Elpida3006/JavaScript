function attachEvents() {
    const url = 'https://test-app-185a2.firebaseio.com/Students/.json';


    const body = document.querySelector('body');
    const tbody = document.querySelector('tbody');

    const loadStudentsBtn = document.createElement('button');
    loadStudentsBtn.addEventListener('click', loadStudents);
    loadStudentsBtn.textContent = 'Load Students'

    const divStudents = document.createElement('div');
    divStudents.appendChild(loadStudentsBtn);

    const dividerDiv = document.createElement('div');
    dividerDiv.setAttribute('class', 'divider');
    divStudents.appendChild(dividerDiv);

    const addStudentsBtn = document.createElement('button');
    addStudentsBtn.addEventListener('click', addStudent);
    addStudentsBtn.textContent = 'Add Student'
    divStudents.appendChild(addStudentsBtn);

    body.appendChild(divStudents);

    function createRow(id, infoData) {
        const tr = document.createElement('tr');
        tr.setAttribute('student-id', id);
        tr.innerHTML = `<td>${infoData['ID']}</td>
                           <td>${infoData['First Name']}</td>
                           <td>${infoData['Last Name']}</td>
                           <td>${infoData['Faculty Number']}</td>
                           <td>${infoData['Grade']}</td>`;
        const td = document.createElement('td');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    function addStudent() {
        const formT = document.createElement('table');
        formT.setAttribute('id', 'input');
        formT.setAttribute('class', 'inputTable');

        const thead = document.createElement('thead');

        thead.innerHTML = `<tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Faculty Number</th>
                                <th>Grade</th>
                            </tr>`
        formT.appendChild(thead);
        const tbody = document.createElement('tbody');
        formT.appendChild(tbody);
        const newTr = document.createElement('tr');

        const idTd = document.createElement('td');
        const idInput = document.createElement('input');
        idInput.setAttribute('placeholder', 'Enter number..');
        idInput.setAttribute('id', 'studentId');
        idTd.appendChild(idInput);
        newTr.appendChild(idTd);

        const firstNameTd = document.createElement('td');
        const firstNameInput = document.createElement('input');
        firstNameInput.setAttribute('placeholder', 'Enter string..');
        firstNameInput.setAttribute('id', 'studentFirstName');
        firstNameTd.appendChild(firstNameInput);
        newTr.appendChild(firstNameTd);

        const lastNameTd = document.createElement('td');
        const lastNameInput = document.createElement('input');
        lastNameInput.setAttribute('placeholder', 'Enter string..');
        lastNameInput.setAttribute('id', 'studentLastName');
        lastNameTd.appendChild(lastNameInput);
        newTr.appendChild(lastNameTd);

        const facNumberTd = document.createElement('td');
        const facNumber = document.createElement('input');
        facNumber.setAttribute('placeholder', 'Enter number..');
        facNumber.setAttribute('id', 'studentFn');
        facNumberTd.appendChild(facNumber);
        newTr.appendChild(facNumberTd);

        const gradeId = document.createElement('td');
        const gradeInput = document.createElement('input');
        gradeInput.setAttribute('placeholder', 'Enter number..');
        gradeInput.setAttribute('id', 'studentGrade');
        gradeId.appendChild(gradeInput);
        newTr.appendChild(gradeId);

        formT.appendChild(newTr);

        const trBtn = document.createElement('tr');
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';

        saveBtn.addEventListener('click', (e) => {
            const id = document.querySelector('#studentId').value;
            const firstName = document.querySelector('#studentFirstName').value;
            const lastName = document.querySelector('#studentLastName').value;
            const facultyNumber = document.querySelector('#studentFn').value;
            const grade = document.querySelector('#studentGrade').value;

            if (id == '' || isNaN(id) || grade == '' || isNaN(grade) || firstName == '' || lastName == '' || facultyNumber == '') {
                alert('Please field any input line correctly');
                return false;
            }



            let studentData = {
                'ID': Number(id),
                'First Name': firstName,
                'Last Name': lastName,
                'Faculty Number': facultyNumber,
                'Grade': Number(grade)
            }

            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(studentData),
                })
                .then(res => res.json())
                .then(data => {
                    createRow(data, studentData);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            formT.remove();
        });



        trBtn.appendChild(saveBtn);
        formT.appendChild(trBtn);

        body.appendChild(formT);
    }

    function loadStudents() {
        tbody.innerHTML = '';

        fetch(url)
            .then(res => res.json())
            .then(studentData => {
                let sorted = Object.entries(studentData).map(x => Object.assign(x[1], {
                    student: x[0]
                })).sort((a, b) => a.ID - b.ID);

                function interMapElements(value, key, map) {
                    createRow(key, value)
                }
                let sortedStudents = new Map(sorted.map(x => ([x.student, (delete x.student, x)])));
                sortedStudents.forEach(interMapElements);
            });

    }

}
attachEvents();