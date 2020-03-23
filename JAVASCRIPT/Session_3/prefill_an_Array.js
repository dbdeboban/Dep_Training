// Prefill an Array
// http://www.codewars.com/kata/prefill-an-array

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

function prefill(n, v) {
    if (n < 0 || n != parseInt(n, 10)) {
        throw new TypeError(n + ' is invalid')
    } else if (n == 0) {
        return [];
    } else {
        return Array(n).fill(v)
    }
}