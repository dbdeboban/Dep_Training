// Function Cache
// https://www.codewars.com/kata/function-cache

function cache(func) {
    var function_memory = {};
    return function() {
        var cache_key = JSON.stringify(arguments);
        if (cache_key in function_memory) return function_memory[cache_key];
        return function_memory[cache_key] = func.apply(this, arguments);
    };
}