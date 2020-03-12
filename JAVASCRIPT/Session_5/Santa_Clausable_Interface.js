//  SantaClausable Interface
//  http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
    // TODO
    if (typeof obj.sayHoHoHo === "function" && typeof obj.distributeGifts === "function" && typeof obj.goDownTheChimney === "function") {

        return true;
    }
    if (typeof obj.say_ho_ho_ho === "function" && typeof obj.distribute_gifts === "function" && typeof obj.go_down_the_chimney === "function") {
        return true;
    }
    return false;
}