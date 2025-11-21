// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let text1 = "";
  let text2 = "";
  let chiffre1 = 0;
  let chiffre2 = 0;

  array1.forEach((element) => {
    text1 += element.toString();
  });

  array2.forEach((element) => {
    text2 += element.toString();
  });

  chiffre1 = parseInt(text1);
  chiffre2 = parseInt(text2);

  let total = chiffre1 + chiffre2;

  return total;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let text1 = "";
  let chiffre1 = 0;

  text1 = value.toString();
  return text1 == text1.split("").reverse().join("");
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  
}
