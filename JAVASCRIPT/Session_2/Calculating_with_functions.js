// Calculating with Functions
// http://www.codewars.com/kata/calculating-with-functions

function zero(arg) {
    return arg? arg(0):0;
}
function one(arg) {
    return arg? arg(1):1;
}

function two(arg) {
    return arg? arg(2):2;
}

function three(arg) {
    return arg? arg(3):3;
}

function four(arg) {
    return arg? arg(4):4;
}

function five(arg) {
    return arg? arg(5):5;
}

function six(arg) {
    return arg? arg(6):6;
}

function seven(arg) {
    return arg? arg(7):7;
}

function eight(arg) {
    return arg? arg(8):8;
}

function nine(arg) {
    return arg? arg(9):9;
}

function plus(arg) {
    return function() {
        return arguments[0] + arg;
    }
}

function minus(arg) {
    return function() {
        return arguments[0] - arg;
    }
}

function times(arg) {
    return function() {
        return arguments[0] * arg;
    }
}

function dividedBy(arg) {
    return function() {
        return parseInt(arguments[0] / arg);
    }
}