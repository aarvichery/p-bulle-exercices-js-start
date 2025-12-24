//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {String} name name of the pizza to be made
 * @returns {string} the price of the pizza
 */
export const twoFer = (name) => {
  if (name !== undefined)
  {
    return "One for " + name + ", one for me."
  }
  else
  {
    return "One for you, one for me."
  }
};
