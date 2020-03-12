// Get the Middle Character
// http://www.codewars.com/kata/get-the-middle-character

function getMiddle(inputStr) {
    return inputStr.length % 2 == 0 ? inputStr.substring(inputStr.length / 2 - 1, inputStr.length / 2 + 1) : inputStr[parseInt(inputStr.length / 2)]
}