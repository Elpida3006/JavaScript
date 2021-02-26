function addItem() {
    const itemList = document.getElementById('items')
    const textInput = document.getElementById('newText')

    let textInputValue = textInput.value;

    if (!textInputValue) { return }

    const li = document.createElement('li');
    const a = document.createElement('a')

    const text = document.createTextNode(textInputValue)
        //do not work with createElement, have atTache  "a" tag-a and text inside, - correct is with textNode

    a.textContent = '[Delete]'
    a.href = '#'

    li.appendChild(text);
    li.appendChild(a);

    a.addEventListener('click', function(event) {
        // event.preventDefault();
        console.log(event);
        event.target.parentElement.remove()
    })
    itemList.appendChild(li)

    textInput.value = ''
}

// function addItem() {
//     let newItem = document.querySelector('#newText'); // Get the text field value
//     if (!newItem.value) { return; } // If it's Empty: Stop
//     let list = document.querySelector('#items'); // Get the list Element
//     let newItemList = document.createElement('li'); // Create the new list Element
//     newItemList.innerText = newItem.value; // Add the text to the new element
//     let deleteLink = document.createElement('a'); // Create the Delete Link
//     deleteLink.innerText = "[Delete]"; // Add the Delete link text
//     deleteLink.href = '#'; // Add the Delete link link itself
//     deleteLink.addEventListener('click', deleteItem); // Add the on click functionality
//     newItemList.appendChild(deleteLink); // Append the link to the element
//     list.appendChild(newItemList); // Append the element to the list
//     newItem.value = ''; // Clear the input field

//     function deleteItem(event) {
//         // This function will delete the item it's clicked on:
//         console.log(event)
//         newItemList.remove(); // --> This is F****G weird. HOW DOES IT KNOW WHICH iS THE ELEMENT >>>>
//         // My better solution is:
//         // event.target.parentElement.remove();
//     }
// }