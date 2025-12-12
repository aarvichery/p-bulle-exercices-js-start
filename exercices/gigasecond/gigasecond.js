//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Aide sur : https://exercism.org/tracks/javascript/exercises/gigasecond/solutions

export const gigasecond = (date) => {
  return new Date(date.getTime() + 1e12);
};
