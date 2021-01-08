function jsonToHtml(stringJson) {
    let result = '<table>\n'

    const arr = JSON.parse(stringJson)
    const titlesSet = new Set(arr.map(i => Object.keys(i)).flat());
    //вади ключовете на всички обекти, и ги обединява в един set с flat
    let titlearray = Array.from(titlesSet)

    result += '<tr><th>' + titlearray.join('</th><th>') + '</th></tr>'

    result = arr.reduce((acc, currItem) => {
        let res = titlearray.reduce((titleacc, currtitle) => {
            currItem[currtitle] = currItem[currtitle] === undefined ? '' :
                currItem[currtitle].toString().replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');

            return titleacc + '<td>' + currItem[currtitle] + '</td>'

        }, '');
        if (res === '') { return acc; }
        return acc + '\n<tr>' + res + '</tr>'
    }, result);

    result = result + '\n</table>'
    return result
}
// function jsonToHtml(input) {
//     //Write your code here
//     function escapeChars(str) {
//         return str.toString().replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/"/g, '&quot;')
//             .replace(/'/g, '&#39;');
//     }

//     let ojbArray = JSON.parse(input);
//     let result = "<table>\n";
//     result += "   <tr>";
//     Object.keys(ojbArray[0]).forEach(element => {
//         result += `<th>${element}</th>`;
//     });
//     result += "</tr>\n";
//     ojbArray.forEach(element => {
//         result += "   <tr>"
//         Object.values(element).forEach(value => {
//             result += `<td>${escapeChars(value)}</td>`;
//         });
//         result += "</tr>\n"
//     });
//     result += "</table>";
//     console.log(result);
// }
console.log((jsonToHtml(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])))