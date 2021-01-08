function chochkoGamer(string) {

    let pattern = /\D+\d+/g
    let numberSymbolsRepeat = /\d+/g
    let fullmatch = ""
        // let letter = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'
    let unique = ""


    if (line = string[0].match(pattern)) {
        for (let el of line) {
            if (number = el.match(numberSymbolsRepeat)) {
                let charachters = el.slice(0, el.length - number[0].length);
                for (let i = 0; i < number[0]; i++) {
                    fullmatch += charachters.toUpperCase();
                    if (i < 1) {
                        unique += charachters.toUpperCase();
                    }
                }
            }
        }
    }
    let symbol = /\D/g
    let uniqueSet = new Set();
    if (res = unique.match(symbol))
        res.forEach(element => {
            uniqueSet.add(element)
        });
    console.log(`Unique symbols used: ${Array.from(uniqueSet).length}`);
    console.log(fullmatch);



}
chochkoGamer(['aSd2&5s@1'])
    // chochkoGamer(["e-!btIz=E:DMJUTvg VQ>YHYu~o%/%b.}a[=d^/pg.Ft{W`aD<l&$W&)*yFWLVWLVWLVWLVWLVWLVWLVWLVWLV($!$`e/{D'xi]-~ *%p"%|N>zq@ %xBD<Y(fHh`@gu#Z#p"Z<vfI]':\Iz.*W:\mwV`z-g@hUYE{_$~}+X%*nytkW"])