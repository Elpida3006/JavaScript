//   function focus() {
//       const selections = document.getElementsByTagName('input');


//       function focusedElement(event) {
//           event.target.parentNode.className = 'focused';
//       }

//       function unfocusedElement(event) {
//           event.target.parentNode.className = '';
//       }
//       for (let element of selections) {
//           element.addEventListener('focus', focusedElement);
//           element.addEventListener('blur', unfocusedElement);
//       }
//   }

function focus() {
    const selections = document.getElementsByTagName('input');


    function focusIn(event) {
        event.target.parentElement.classList.add('focused');
    }

    function focusOut(event) {
        event.target.parentElement.classList.remove('focused');
    }
    Array.from(selections).forEach(element => {
        element.addEventListener('focus', focusIn);
        element.addEventListener('blur', focusOut);
    });


}