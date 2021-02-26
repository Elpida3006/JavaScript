class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        //валидация на параметри

        this.validateParam(username);
        this.validateParam(salary);
        this.validateParam(position);
        this.validateParam(department);

        //валидация на заплата

        if (salary < 0) {
            throw new Error('Invalid input!');

        }

        //откриване на референция към оттфела по дадено име

        let current = this.departments.find(data => data.name === department);

        //ако отдела не съществува, да се създаде

        if (current === undefined) {
            current = {
                name: department,
                employees: []
            };
            this.departments.push(current);
        }
        //добавяме работника към отдела

        current.employees.push({
            username,
            salary,
            position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }
    bestDepartment() {
        //сортираме отделите по средна заплата
        const departments = this.departments.map(d => {
            // const depCopy = Object.assign({}, d);
            // depCopy.averageSalary = d.employees.reduce((param, curr, index, array) => param + curr.salary, 0) / d.employees.length

            const depCopy = {
                name: d.name,
                employees: d.employees.slice()
            };
            let total = 0;
            for (let employee of depCopy.employees) {
                total += employee.salary;
            }
            depCopy.averageSalary = total / depCopy.employees.length
            return depCopy;
        });

        //взимаме първия


        departments.sort((a, b) => b.averageSalary - a.averageSalary);

        const best = departments[0];
        if (best !== undefined) {
            //сортираме масива работници по име и заплата
            best.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))

            //връщаме оформения низ
            const result = [
                `Best Department is: ${best.name}`,
                `Average salary: ${best.averageSalary.toFixed(2)}`
            ]
            best.employees.forEach(element => {
                result.push(`${element.username} ${element.salary} ${element.position}`)
            });
            return result.join('\n')
        }
    }
    validateParam(param) {
        if (param === '' || param === undefined || param === null) {
            throw new Error('Invalid input!')
        }

    }

}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// class Company {
//     constructor() {
//         this.departments = [];
//     }

//     addEmployee(username, salary, position, department) {
//         for (let arg of[username, salary, position, department]) {
//             this.validate(arg);
//         }

//         if (!this.departments[department]) {
//             this.departments[department] = [];
//         }

//         this.departments[department].push({ username, salary, position });

//         return `New employee is hired. Name: ${username}. Position: ${position}`;
//     }

//     bestDepartment() {
//         //department - avg salary
//         let departments = {};
//         Object.entries(this.departments).forEach(([department, employees]) => {
//             let totalSalary = employees
//                 .map((e) => e.salary)
//                 .reduce((acc, curr) => (acc += curr));

//             departments[department] = totalSalary / employees.length;
//         });

//         let maxSalary = 0;
//         let bestDepartment;
//         Object.entries(departments).forEach(([department, avgSalary]) => {
//             if (avgSalary > maxSalary) {
//                 maxSalary = avgSalary;
//                 bestDepartment = department;
//             }
//         });

//         let output = `Best Department is: ${bestDepartment}\nAverage salary: ${departments[
//       bestDepartment
//     ].toFixed(2)}\n`;

//         this.departments[bestDepartment]
//             .sort(
//                 (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
//             )
//             .forEach((e) => {
//                 output += `${e.username} ${e.salary} ${e.position}\n`;
//             });

//         return output.trim();
//     }

//     validate(value) {
//         if (!value || value < 0) {
//             throw new Error("Invalid input!");
//         }
//     }
// }