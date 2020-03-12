// Function Composition
// http://www.codewars.com/kata/function-composition


function compose(f, g) {
    a = (...args) => f(g(...args));
    return a;
}