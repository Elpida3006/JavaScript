function solution(data) {
    const recProto = {
        width: 0,
        height: 0,
        area: function() { return this.width * this.height },
        // area: () =>{ return width * height },
        compareTo: function(other) { return other.area() - this.area() || other.width - this.width },
    };

    return data
        .map(([width, height]) =>
            Object.assign(Object.create(recProto), { width, height })
        )
        .sort((a, b) => a.compareTo(b));
}

function solution(input) {
    const result = input
        .map(([width, height]) => ({
            width,
            height,
            area: () =>
                width * height,

            compareTo(rect) {
                return rect.area() - this.area() || rect.width - this.width
            }
        }))
        .sort((a, b) => a.compareTo(b));
    return result;
}



// function solution(data) {
//     const recProto = {
//         area() {
//             return this.height * this.width;
//         },
//         compareTo(other) {
//             // const currRecArea = this.area()
//             // const otherReccArea = other.area()
//             return other.area() - this.area() || other.width - this.width;
//         }
//     };

//     function createRec(witdh, height) {
//         const result = Object.create(recProto);
//         result.width = witdh;
//         result.height = height;
//         return result;
//     }

//     return data.reduce(function(acc, [width, height]) {
//         return acc.concat(createRec(width, height));
//     }, []).sort((a, b) => {
//         return a.compareTo(b)
//     });

// }



console.log(solution([
    [10, 5],
    [5, 12]
]));
console.log(solution([
    [10, 5],
    [3, 20],
    [5, 12]
]))