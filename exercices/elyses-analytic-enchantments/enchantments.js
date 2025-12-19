// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
export function getCardPosition(stack, card) {
  let idx = -1;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] == card) {
      idx += i + 1;
    } else {
      continue;
    }
  }
  return idx;
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
  let idx = -1;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] == card) {
      idx += i + 1;
    } else {
      continue;
    }
  }
  return !(idx == -1);
}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
  let even = 0;
  stack.forEach((element) => {
    if (element % 2 == 0) {
      even++;
    }
  });

  return even == stack.length;
}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
  let odd = 0;
  stack.forEach((element) => {
    if (element % 2 == 0) {
      odd++;
    }
  });

  return !(odd == stack.length);
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number | undefined} the first odd value
 */
export function getFirstOddCard(stack) {
  let odd = 0;
  let nbr;
  stack.forEach((element) => {
    if (!(element % 2 == 0) && odd == 0) {
      odd++;
      nbr = 0;
      nbr += element;
    }
  });

  return nbr;
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
  let idx = -1;
  let even = 0;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] % 2 == 0 && even == 0) {
      idx += i + 1;
      even++;
    }
  }

  return idx;
}
