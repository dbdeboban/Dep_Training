// Let's make a Cat constructor!
// http://www.codewars.com/kata/using-closures-to-share-class-state

function Cat(name, weight) {
    if (name == undefined || weight == undefined) {
        throw new Error("name and weight not defined");
    }
    if (Cat.counter) {
        Cat.counter++;
    } else {
        Cat.counter = 1;
    }
    if (Cat.Sum) {
        Cat.Sum += weight;
    } else {
        Cat.Sum = weight;
    }
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(newName) {
            name = newName;
        },

    });
    Object.defineProperty(this, "weight", {
        get: function() {
            return weight;
        },
        set: function(newWeight) {
            Cat.Sum -= weight;
            weight = newWeight;
            Cat.Sum += weight;
        },

    });


}

Object.defineProperty(Cat, "averageWeight", {
    value: function() { return Cat.Sum / Cat.counter }
});