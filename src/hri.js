import getNumbers from "./assets/numbers";
import getSymbols from "./assets/symbols";
import getLetters from "./assets/letters";

const numbers = getNumbers();
const symbols = getSymbols();
const letters = getLetters();


function _getRandom(items) {
    return items[Math.floor(Math.random()*items.length)];
}

/**
 * Generate a random id in the form of number-symbol-letter
 * @param {string} [delim] character to use as the delimiter
 * @returns random id
 */
function generate(delim='-') {
    const number = _getRandom(numbers);
    const symbol = _getRandom(symbols);
    const letter = _getRandom(letters);

    return [number,symbol,letter].join(delim);
}


export { numbers, symbols, letters, generate };