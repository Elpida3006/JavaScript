// function jsonHtml(arrayWithJSONS) {
//     console.log(`<table>`);

//     function createRow(person) {
//         return [
//             '\t<tr>',
//             `\t\t<td>${person.name}</td>`,
//             `\t\t<td>${person.position}</td>`,
//             `\t\t<td>${person.salary}</td>`,
//             '\t</tr>'
//         ].join('\n')
//     }

//     const rows = []
//     for (let line of arrayWithJSONS) {
//         const person = JSON.parse(line);
//         // console.log(person['name']);
//         rows.push(createRow(person))
//     }

//     console.log(rows.join('\n'));
//     console.log(`</table>`);


// }
jsonHtml(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])

function jsonHtml(arrayWithJSONS) {

    return `<table>\n` + arrayWithJSONS.map(line => JSON.parse(line))
        .map(person => `\t<tr>\n\t\t<td>${person.name}</td>\n\t\t<td>${person.position}</td>\n\t\t<td>${person.salary}</td>\n\t</tr>`)
        .join('\n') + `\n</table>`
}
console.log(jsonHtml(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));