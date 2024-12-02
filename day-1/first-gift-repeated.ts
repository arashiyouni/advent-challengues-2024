function prepareGifts(gifts: number[]): number[] {
    return gifts.filter((item,index) => gifts.indexOf(item) === index).sort((a, b) => a - b);
}

console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5]))
console.log(prepareGifts([6, 5, 5, 5, 5]))
console.log(prepareGifts([]))