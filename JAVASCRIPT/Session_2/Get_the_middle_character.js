// Get the Middle Character
// http://www.codewars.com/kata/get-the-middle-character

function getMiddle(inputStr) {
    let strLen = inputStr.length;
    return strLen % 2 == 0 ? inputStr.substring(strLen / 2 - 1, strLen / 2 + 1) : inputStr[parseInt(strLen / 2)]
}