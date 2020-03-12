// Word Count
// http://www.codewars.com/kata/word-count

function countWords(str) {
    return str.trim().split(/\s+/).filter(Boolean).length;
}