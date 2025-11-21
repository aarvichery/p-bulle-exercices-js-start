/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {number} minuteur
 */
export function cookingStatus(minuteur) {
  if (minuteur > 0) {
    return "Not done, please wait.";
  } else if (minuteur == 0) {
    return "Lasagna is done.";
  } else if (minuteur === undefined) {
    return "You forgot to set the timer.";
  }
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 *
 * @param {string} layers
 * @param {number} totalTime
 * @returns {number}
 */

export function preparationTime(layers, totalTime) {
  if (totalTime === undefined) {
    totalTime = 2;
  }
  return layers.length * totalTime;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string[]} layers
 * @returns {object}
 */
export function quantities(layers) {
  let nbnoodle = 0;
  let nbsauce = 0;

  layers.forEach((element) => {
    if (element == "noodles") {
      nbnoodle += 50;
    }
    if (element == "sauce") {
      nbsauce += 0.2;
    }
  });

  let obj = {
    noodles: nbnoodle,
    sauce: nbsauce,
  };
  return obj;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  let secretingredient = "";

  secretingredient += friendsList[friendsList.length - 1];

  myList.push(secretingredient);
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {object} recipe
 * @param {number} portions
 * @returns {object}
 */
export function scaleRecipe(recipe, portions) {
  let nbportions = portions / 2;
  const obj = { ...recipe };
  Object.keys(obj).forEach((item) => {
    Object(obj)[item] = Object(obj)[item] * nbportions;
  });

  return obj;
}
