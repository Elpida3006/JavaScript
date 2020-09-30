// function chessBoard(n) {
//     const blackCell = '    <span class="black"></span>';
//     const whiteCell = '    <span class="white"></span>';

//     let oddRowElements = [];
//     let evenRowElements = [];

//     for (let col = 1; col <= n; col += 1) {
//         oddRowElements.push(col % 2 === 0 ? whiteCell : blackCell);
//         evenRowElements.push(col % 2 === 0 ? blackCell : whiteCell);
//     }

//     let oddRow = `  <div>\n${oddRowElements.join("\n")}\n  </div>`;
//     let evenRow = `  <div>\n${evenRowElements.join("\n")}\n  </div>`;

//     let rows = [];

//     for (let row = 1; row <= n; row += 1) {
//         rows.push(row % 2 === 0 ? evenRow : oddRow);
//     }

//     let board = `<div class="chessboard">\n${rows.join("\n")}\n</div>`;

//     console.log(board);
// }



function chessBoard(numberDivSpan) {
    let currentColor = 'black';
    // let whiteColour = ''
    console.log(`<div class="chessboard">`);
    for (let div = 1; div <= numberDivSpan; div++) {
        console.log(`   <div>`);

        for (let span = 1; span <= numberDivSpan; span++) {
            console.log(`       <span class="${currentColor}"></span>`);

            if (currentColor === "black") {
                currentColor = "white"
            } else {
                currentColor = "black"
            }
            // whiteColour = blackColour
            // blackColour = whiteColour === 'black' ? 'white' : 'black'
        }
        console.log(`   </div>`);
        // if (numberDivSpan % 2 === 0) {
        //     whiteColour = blackColour
        //     blackColour = whiteColour === 'black' ? 'white' : 'black'
        // }
        if (numberDivSpan % 2 === 0) {
            if (currentColor === "black") {
                currentColor = "white"
            } else {
                currentColor = "black"
            }
        }
    }
    console.log(`</div>`);
}
chessBoard(3);