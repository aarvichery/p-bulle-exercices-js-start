//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (Color) => {
  let nbr = 0;

  for (let i = 0; i < COLORS.length; i++) {
    if (COLORS[i] == Color) {
      nbr += i;
    }
  }

  return nbr;
};

export const COLORS = [];
{
  COLORS.push(
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  );
}
