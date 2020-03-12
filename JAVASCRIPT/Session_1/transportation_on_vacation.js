//Transportation on vacation 
// http://www.codewars.com/kata/transportation-on-vacation


function rentalCarCost(days) {
    var total = 0;
    return (days >= 7) ? (days * 40) - 50 : (days >= 3) ? (days * 40) - 20 : days * 40;
}