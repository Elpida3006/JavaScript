function flowers(input) {
    let magnoliqNUM = Number(input.shift());
    let zumbulNum = Number(input.shift());
    let roseNum= Number(input.shift());
    let kaktusNum = Number(input.shift());
    let priceGift = Number(input.shift());


    let flowerSum = (magnoliqNUM * 3.25 + zumbulNum * 4.00 + roseNum * 3.50 + kaktusNum * 8) * 0.95;

    if (flowerSum >= priceGift) {
        console.log(`She is left with ${Math.floor(flowerSum - priceGift)} leva.`);
    }
    else 
    {
        console.log(`She will have to borrow ${Math.ceil(priceGift - flowerSum)} leva.`);
    }
}