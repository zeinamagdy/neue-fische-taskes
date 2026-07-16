/*Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
*/
import { test } from "@/test.ts";

function findMissingLetter(input) {
  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i].charCodeAt(0);
    const nextChar = input[i + 1].charCodeAt(0);
    if (nextChar - currentChar !== 1)
      return String.fromCharCode(currentChar + 1);
  }
}

test(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
test(findMissingLetter(["O", "Q", "R", "S"]), "P");
