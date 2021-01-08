 scoreToHTML = (json) => {
     let array = JSON.parse(json);

     escapeChars = (str) => {
         return str.toString().replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#39;');
     }
     let table = "<table>\n";
     table += "  <tr><th>name</th><th>score</th></tr>\n"

     array.forEach(el => {
         table += " <tr>"
         Object.values(el).forEach(val => {
             table += `<td>${escapeChars(val)}</td>`
         });

         table += "</tr>\n"
     });

     table += "</table>\n";

     console.log(table);

 }
 scoreToHTML(['[{"name":"Pesho","score":479}, { "name": "Gosho", "score": 205 }]          '])