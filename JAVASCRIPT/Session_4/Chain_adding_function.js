// A Chain adding function
// http://www.codewars.com/kata/a-chain-adding-function


function add(n) {
    var adder = (x) => {
        return add(n + x)
    };
    adder.toString = () => n;
    return adder;
}