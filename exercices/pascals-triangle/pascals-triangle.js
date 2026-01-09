//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {Number} nbrow
 * @returns {Number[]}
 */

export const rows = (nbrow) => {
  let finaltable = [];
  let lasttable = [];
  let row = 1;
  for (let i = 0; i < nbrow; i++) {
    let table = [];
    if (i == 0) {
      table.unshift(1);
    } else {
      table.unshift(1, 1);
      if (i != 1) {
        for (let j = 0; j < row - 2; j++)
          table.splice(1, 0, lasttable[j] + lasttable[j + 1]);
      }
    }
    lasttable = table;
    finaltable.push(table);
    row++;
  }

  return finaltable;
};
