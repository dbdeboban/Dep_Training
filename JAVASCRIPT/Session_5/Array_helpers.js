// Array Helpers
// http://www.codewars.com/kata/array-helpers

Array.prototype.square = function() {
    var arr = []
    for (var i = 0; i < this.length; i++) {
        arr.push(this[i] * this[i]);
    }
    return arr;
}
Array.prototype.cube = function() {
    var arr = []
    for (var i = 0; i < this.length; i++) {
        arr.push(this[i] * this[i] * this[i]);
    }
    return arr;
}
Array.prototype.sum = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    return sum;
}
Array.prototype.average = function() {
    if (this.length === 0) { return NaN; }
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    return sum / this.length;
}
Array.prototype.even = function() {
    var arr = []
    for (var i = 0; i < this.length; i++) {
        if (this[i] % 2 == 0) {
            arr.push(this[i]);
        }
    }
    return arr;
}
Array.prototype.odd = function() {
    var arr = []
    for (var i = 0; i < this.length; i++) {
        if (this[i] % 2 != 0) {
            arr.push(this[i]);
        }
    }
    return arr;
}