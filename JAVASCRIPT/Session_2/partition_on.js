//Partition On
//http://www.codewars.com/kata/partition-on


function partitionOn(pred, items) {
    var trueArr = [];
    var falseArr = [];
    for (item in items) {
        if (pred(items[i])) {
            trueArr.push(items[item]);
        } else {
            falseArr.push(items[item]);
        }
    }
    items.length = 0;
    for (item in falseArr) {
        items.push(falseArr[item]);
    }
    for (item in trueArr) {
        items.push(trueArr[item]);
    }
    return falseArr.length;
}