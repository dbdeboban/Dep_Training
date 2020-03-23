//Closures and Scopes
// http://www.codewars.com/kata/closures-and-scopes/train/javascript

function createFunctions(FunctionCount) {
    var callbacks = [];

    for (let i = 0; i < FunctionCount; i++) {
        callbacks.push(()=> {
            return i;
        });
    }

    return callbacks;
}