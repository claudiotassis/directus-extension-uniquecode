import getFirsts from "./assets/first";
import getSeconds from "./assets/second";
import getThirds from "./assets/third";
import getFourths from "./assets/fourth";
import getFifths from "./assets/fifth";

const firsts = getFirsts();
const seconds = getSeconds();
const thirds = getThirds();
const fourths = getFourths();
const fifths = getFifths();


function _getRandom(items) {
    return items[Math.floor(Math.random()*items.length)];
}

/**
 * Generate a random id 
 * @param {string} [delim] character to use as the delimiter
 * @returns random id
 */
function generate() {
    const first = _getRandom(firsts);
    const second = _getRandom(seconds);
    const third = _getRandom(thirds);
    const fourth = _getRandom(fourths);
    const fifth = _getRandom(fifths);

    return [first+second+third+fourth+fifth].join();
}


export { firsts, seconds, thirds, fourths, fifths, generate };