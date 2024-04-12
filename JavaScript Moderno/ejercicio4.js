let candles = [4, 4, 1, 3];

const countCandles = Math.max(...candles);

let numberOfCandles = 0;
let maxCandles = 0;

for (let i = 0; i < candles.length; i++) {
    const currentHeight = candles[i];

    if (currentHeight > maxCandles) {
        maxCandles = currentHeight;
        numberOfCandles = 1;
    } else if (currentHeight === maxCandles) {
        numberOfCandles++;
    }
}

console.log(numberOfCandles);