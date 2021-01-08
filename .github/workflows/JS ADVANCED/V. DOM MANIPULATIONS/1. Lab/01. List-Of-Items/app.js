function addItem() {
    const itemList = document.getElementById('items')
    const textInput = document.getElementById('newItemText')

    let textInputValue = textInput.value;

    if (!textInputValue) { return }
    const li = document.createElement('li');
    li.textContent = textInputValue;

    itemList.appendChild(li)

    textInput.value = ''
}