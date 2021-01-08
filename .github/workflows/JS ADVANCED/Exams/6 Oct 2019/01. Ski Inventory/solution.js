function solve() {

    //Avaliable Products Section 
    let ulAvaliableProducts = document.querySelector('#products > ul')
    let filter = document.getElementById('filter')
    let btnFilter = document.querySelector('.filter > button')

    //Add Product Section - Form
    let name = document.querySelector('#add-new').querySelectorAll('input').item(0)
    let quantity = document.querySelector('#add-new').querySelectorAll('input').item(1)
    let price = document.querySelector('#add-new').querySelectorAll('input').item(2)
    let addButton = document.querySelector('#add-new > button')

    let totalPrice = document.querySelector('body').querySelectorAll('h1').item(1)

    let total = 0;

    //My Products section
    let myProductsUl = document.querySelector('#myProducts > ul')
    let btnBuy = document.querySelector('#myProducts > button')

    addButton.addEventListener('click', (e) => {
        e.preventDefault()

        let nameValue = name.value
        let quantityValue = quantity.value;
        let priceValue = Number(price.value)

        //и това не го пише в условието, ама е тъпо да няма валидация

        //   if (!(nameValue && quantityValue && priceValue)) { return; }

        let li = document.createElement('li')
        ulAvaliableProducts.appendChild(li)

        let span = document.createElement('span')
        li.appendChild(span)
        span.textContent = nameValue

        let strong = document.createElement('strong')
        li.appendChild(strong)
        strong.textContent = `Available: ${quantityValue}`


        let div = document.createElement('div')
        li.appendChild(div)

        let strongDiv = document.createElement('strong')
        div.appendChild(strongDiv)
        strongDiv.textContent = priceValue.toFixed(2)

        let addToClientListBTN = document.createElement('button')
        div.appendChild(addToClientListBTN)
        addToClientListBTN.textContent = `Add to Client's List`

        //това не го пише в условието, но ме дразни
        //   name.value = ""
        //   quantity.value = ""
        //   price.value = ""


        btnFilter.addEventListener('click', (e) => {
            let keyFilter = filter.value
            if (!keyFilter) { return; }

            let products = Array.from(ulAvaliableProducts.querySelectorAll('li'))
            ulAvaliableProducts.innerHTML = ""

            products.forEach(string => {
                if (!(string.firstElementChild.textContent.includes(keyFilter))) {
                    string.style.display = 'none'

                }
                ulAvaliableProducts.appendChild(string)
            });

        });

        addToClientListBTN.addEventListener('click', (e) => {
            if (quantityValue == 1) {
                //remove ptoduct
                li.remove()
            }
            quantityValue--
            strong.textContent = `Available: ${quantityValue}`

            let product = document.createElement('li');
            product.innerHTML = `${nameValue}<strong>${(priceValue.toFixed(2))}</strong>`

            let currentPrice = Number(totalPrice.textContent.split(' ')[2]);

            currentPrice += Number(priceValue.toFixed(2))

            totalPrice.textContent = `Total Price: ${currentPrice.toFixed(2)}`

            myProductsUl.appendChild(product)
        });

        btnBuy.addEventListener('click', (e) => {
            myProductsUl.innerHTML = '';
            totalPrice.textContent = `Total Price: 0.00`;
        });

    });

}
// Short link: https://git.io/JfjFL
//simeon tsvetanov
// function solve() {
//     // Available Products:
//     let availableProductS = document.querySelector('#products');
//     let availableProductSUL = document.querySelector('#products > ul');
//     let availableProductSFilterInputField = document.querySelector('#filter');
//     let availableProductFilterBtn = document.querySelector('.filter > button');
//     availableProductFilterBtn.addEventListener('click', filterUL);

//     // Add Products:
//     let addProductS = document.querySelector('#add-new');
//     let addNameField = addProductS.querySelectorAll('input').item(0);
//     let addQuantityField = addProductS.querySelectorAll('input').item(1);
//     let addPriceField = addProductS.querySelectorAll('input').item(2);
//     let addButton = addProductS.querySelector('button');
//     addButton.addEventListener('click', addItem);

//     // Total Price:
//     let totalPriceH1 = document.querySelectorAll('h1').item(1);

//     // My Products:
//     let myProductsS = document.querySelector('#myProducts');
//     let myProductsSUL = document.querySelector('#myProducts > ul');
//     let myProductsSBtn = document.querySelector('#myProducts > button');
//     myProductsSBtn.addEventListener('click', buyAll);

//     function addItem(e) {
//         e.preventDefault();
//         let name = addNameField.value;
//         let quantity = addQuantityField.value;
//         let price = Number(addPriceField.value);
//         if (!(name && quantity && price)) { return; }

//         // Create the product
//         let product = document.createElement('li');
//         product.innerHTML = ` < span > $ { name } < /span><strong>Available: ${quantity}</strong > < div > < strong > $ { price.toFixed(2) } < /strong><button>Add to Client's List</button > < /div>`
//             // Set the Event Listener:
//         product.addEventListener('click', clickedOnProduct);

//         // Append the product
//         availableProductSUL.appendChild(product);

//         // Clean the form
//         addNameField.value = '';
//         addQuantityField.value = '';
//         addPriceField.value = '';
//     }

//     function clickedOnProduct(e) {
//         if (!(e.target.textContent === `Add to Client's List`)) { return; }
//         let product = e.target.parentElement.parentElement;
//         let name = product.firstElementChild.textContent;

//         let availableField = product.querySelectorAll('strong').item(0);
//         let available = Number(availableField.textContent.split(' ')[1]);

//         let price = Number(product.querySelectorAll('strong').item(1).textContent);
//         let current = Number(totalPriceH1.textContent.split(' ')[2]);
//         let total = price + current;
//         totalPriceH1.textContent = `Total Price: ${total.toFixed(2)}`;

//         let boughtProduct = document.createElement('li');
//         boughtProduct.innerHTML = `${name}<strong>${price.toFixed(2)}</strong>`;
//         myProductsSUL.appendChild(boughtProduct);

//         available -= 1;
//         if (available === 0) {
//             product.parentElement.removeChild(product);
//         } else {
//             availableField.textContent = `Available: ${available}`;
//         }
//     }

//     function filterUL(e) {
//         let criteria = availableProductSFilterInputField.value;
//         if (!criteria) { return; }

//         let items = Array.from(availableProductSUL.querySelectorAll('li'));
//         availableProductSUL.innerHTML = '';
//         items.forEach(item => {
//             if (!(item.firstElementChild.textContent.includes(criteria))) {
//                 item.style.display = 'none';
//             }
//             availableProductSUL.appendChild(item);
//         })
//     }

//     function buyAll(e) {
//         myProductsSUL.innerHTML = '';
//         totalPriceH1.textContent = `Total Price: 0.00`;
//     }
// }