// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let chiffre = ''
  let chiffre2 = ''
  array1.forEach(element => {
  String(element)
  chiffre += element
  Number(chiffre)
 });

   array2.forEach(element => {
  String(element)
  chiffre2 += element
  Number(chiffre2)
 });

 let total = chiffre + chiffre2

 String(total)
 return total
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  throw new Error('Remove this line and implement the function');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  throw new Error('Remove this line and implement the function');
}
