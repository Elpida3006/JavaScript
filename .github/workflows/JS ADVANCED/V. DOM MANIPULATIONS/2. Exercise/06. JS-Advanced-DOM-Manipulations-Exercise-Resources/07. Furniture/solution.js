//25???????????
// function solve() {
//     const table = document.querySelector('tbody')
//         //слагаме Listenners на двата бутона
//     const [generate, buy] = Array.from(document.querySelectorAll("button"));
//     const [input, output] = Array.from(document.querySelectorAll("textarea"));

//     generate.addEventListener('click', onGenerate);
//     buy.addEventListener('click', onBuy)

//     function onGenerate(e) {
//         // прочитаме и парсваме входа

//         const data = JSON.parse(input.value)
//             //за всеки елемент, създаваме ред, със съответното съдържание и добавяме към таблицата

//         for (let item of data) {
//             const tableRow = document.createElement('tr')
//             let html = `
//             <td><img src="${item.img}"></td>
//             <td><p>${item.name}</p></td>
//             <td><p>${item.price}</p></td>
//             <td><p>${item.decFactor}</p></td>
//             <td><input type="checkbox" /></td>`;

//             tableRow.innerHTML = html;
//             table.appendChild(tableRow)
//         }
//         input.value = "";

//     }

//     function onBuy(e) {

//         const bought = Array.from(document.querySelectorAll('input'))
//             .filter(i => i.checked)
//             .map(i => i.parentNode.parentNode)
//             .map(row => ({
//                 name: row.children[1].textContent.trim(),
//                 price: Number(row.children[2].textContent),
//                 decFactor: Number(row.children[3].textContent)

//             }));

//         const result = [
//             `Bought furniture: ${bought.map(i => i.name).join(', ')}`,
//             `Total price: ${(bought.reduce((acc, curr, index, array) => {
//               acc + curr.price
//             }, 0)).toFixed(2)}`
//             `Average decoration factor: ${bought.reduce((acc, curr, index, array) => acc + curr.decFactor, 0) / bought.length}`

//         ];

//         output.value = result.join('\n')
//     }

// }


//100
function solve() {
    let [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
    let [input, output] = Array.from(document.querySelectorAll("textarea"));
    let table = document.querySelector("tbody");

    generateBtn.addEventListener("click", generateData);
    buyBtn.addEventListener("click", buyProduct)

    function generateData(e) {
        let data = JSON.parse(input.value);

        for (let line of data) {
            let tableRow = document.createElement("tr");
            let html = `
            <td><img src="${line.img}"></td>
            <td><p>${line.name}</p></td>
            <td><p>${line.price}</p></td>
            <td><p>${line.decFactor}</p></td>
            <td><input type="checkbox" /></td>`;

            tableRow.innerHTML = html;
            table.appendChild(tableRow);
        }
        input.value = "";
    }

    function buyProduct(e) {

        let boughtItems = Array.from(document.querySelectorAll("input"))
            .filter(i => i.checked)
            .map(i => i.parentNode.parentNode)
            .map(row => ({
                name: row.children[1].textContent.trim(),
                price: Number(row.children[2].textContent),
                decFactor: Number(row.children[3].textContent)
            }))

        let result = [
            `Bought furniture: ${boughtItems.map(i => i.name).join(", ")}`,
            `Total price: ${(boughtItems.reduce((a, b) => a + b.price, 0)).toFixed(2)}`,
            `Average decoration factor: ${boughtItems.reduce((a, b) => a + b.decFactor, 0) / boughtItems.length}`
        ]

        output.value = result.join('\n')
    }

}
//25?????
// function solve() {
//     let [generate, buy] = [...document.querySelectorAll("button")];
//     let [input, output] = document.querySelectorAll("textarea");

//     generate.addEventListener("click", () => {
//         let products = JSON.parse(input.value);

//         products.forEach((product) => {
//             let { name, img, price, decFactor } = product;
//             let html = `<tr>\n
//         <td><img src="${img}"></td>\n
//         <td><p>${name}</p></td>\n
//         <td><p>${price}</p></td>\n
//         <td><p>${decFactor}</p></td>\n
//         <td><input type="checkbox" /></td>\n
//         </tr>`;

//             document
//                 .querySelectorAll("tbody")[0]
//                 .insertAdjacentHTML("beforeEnd", html)

//         });
//         input.value = ""

//     });
//     buy.addEventListener("click", () => {
//         let [product, prices, factors] = [
//             [],
//             [],
//             []
//         ];
//         [...document.querySelectorAll('tbody tr')].forEach(tr => {
//             if (tr.querySelectorAll('input')[0].checked) {
//                 let data = tr.querySelectorAll('p');
//                 product.push(data[0].textContent);
//                 prices.push(Number(data[1].textContent));
//                 factors.push(Number(data[2].textContent));
//             }
//         });
//         let totalPrice = prices.reduce((sum, num) => sum += num)
//         let avgFactor = factors.reduce((sum, num) => sum += num) / factors.length
//         output.textContent = `Bought furniture: ${products.join(", ")}\nTotal price: ${(totalPrice).toFixed(2)}\nAverage decoration factor: ${avgFactor}`

//     });
// }
//100??
function solve() {
    let [generate, buy] = [...document.querySelectorAll("button")];
    let [input, output] = document.querySelectorAll("textarea")
    generate.addEventListener("click", () => {
        let products = JSON.parse(input.value);

        products.forEach((product) => {
            let { name, img, price, decFactor } = product;
            let htmlString = `<tr>\n
        <td><img src="${img}"></td>\n
        <td><p>${name}</p></td>\n
        <td><p>${price}</p></td>\n
        <td><p>${decFactor}</p></td>\n
        <td><input type="checkbox" /></td>\n
        </tr>`;

            document
                .querySelectorAll("tbody")[0]
                .insertAdjacentHTML("beforeEnd", htmlString);
        });

        input.value = "";
    });

    buy.addEventListener("click", () => {
        let [products, prices, factors] = [
            [],
            [],
            []
        ];
        [...document.querySelectorAll('tbody tr')].forEach(tr => {
            if (tr.querySelectorAll('input')[0].checked) {
                let data = tr.querySelectorAll('p');
                products.push(data[0].textContent);
                prices.push(Number(data[1].textContent));
                factors.push(Number(data[2].textContent))
            }
        });

        let totalPrice = prices.reduce((sum, num) => sum += num);
        let avgFactor = factors.reduce((sum, num) => sum += num) / factors.length;
        output.textContent = `Bought furniture: ${products.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor}`;
    });
}