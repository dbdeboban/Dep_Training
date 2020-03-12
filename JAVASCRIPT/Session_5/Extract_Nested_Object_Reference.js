// Extract Nested Object Reference
// http://www.codewars.com/kata/extract-nested-object-reference

Object.prototype.hash = function(string) {
    var prop_list = string.split('.');
    var obj = this;

    for (i = 0; i < prop_list.length; i++) {
        if (obj[prop_list[i]] != undefined) {
            obj = obj[prop_list[i]];
        } else {
            return undefined;
        }
    }
    return obj;
}