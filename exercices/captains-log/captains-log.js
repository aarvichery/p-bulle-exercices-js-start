// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return "NCC-" + 1000 + Math.floor(Math.random() * 8999);
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let number = 41000 + Math.random() * 999;
  return number;
}

/**
 * Generates a random planet class.
 *k
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planet = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  let number = Math.floor(Math.random() * 10);

  return planet[number];
}
