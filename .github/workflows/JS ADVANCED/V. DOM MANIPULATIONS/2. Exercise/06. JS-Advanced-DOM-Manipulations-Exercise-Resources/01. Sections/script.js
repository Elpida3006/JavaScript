//  create = (strings) => {
//  const content = document.querySelector("#content");

//  Array.from(strings).forEach(string => {

//      const div = document.createElement("div");
//      content.appendChild(div);

//      const p = document.createElement("p");
//      div.appendChild(p);

//      p.textContent = string;
//      p.style.display = "none";


//      div.addEventListener("click", function() {
//          p.style.display = "block";
//      });

//  });


create = (arrayOfStrings) => {

    const content = document.getElementById('content');

    arrayOfStrings.forEach(string => {
        const div = document.createElement('div')
        content.appendChild(div);
        const p = document.createElement('p');
        div.appendChild(p);

        p.textContent = string
        p.style.display = 'none'
        div.addEventListener('click', () => {
            p.style.display = 'block'
        })

    });



}