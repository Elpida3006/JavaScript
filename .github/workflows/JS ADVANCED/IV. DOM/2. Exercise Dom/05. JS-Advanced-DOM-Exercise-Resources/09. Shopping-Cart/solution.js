solve = () => {
    let textArea = document.querySelector('body > div > textarea');
    let totalPrice = 0;
    let shoppingList = [];

    let addBtn = document.querySelectorAll('.add-product');

    let arrayAddBtn = Array.from(addBtn);

    arrayAddBtn.forEach((element, i, arrayAddBtn) => {


        arrayAddBtn[i].addEventListener('click', () => {
            let product = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
            let price = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;
            if (!shoppingList.includes(product)) {
                shoppingList.push(product);
            }
            let result = `Added ${product} for ${price} to the cart.\n`;
            totalPrice += Number(price);
            textArea.value += result;
        });
    });
    let checkOut = document.querySelector('.checkout');

    checkOut.addEventListener('click', () => {
        let finalSting = `You bought ${shoppingList.join(', ')} for ${totalPrice.toFixed(2)}.`;
        textArea.value += finalSting;
        disableButtons();
    });

    disableButtons = () => {
        let buttons = Array.from(document.querySelectorAll('button'));
        buttons.forEach(button => button.disabled = true);
    }
}