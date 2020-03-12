// A Chain adding function
// http://www.codewars.com/kata/a-chain-adding-function


function add(n) {
    var adder = function(x) {
        return add(n + x)
    };
    adder.toString = function() { return n; }

    return adder;
}