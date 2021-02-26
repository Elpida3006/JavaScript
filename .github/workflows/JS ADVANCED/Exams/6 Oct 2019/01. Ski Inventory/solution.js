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