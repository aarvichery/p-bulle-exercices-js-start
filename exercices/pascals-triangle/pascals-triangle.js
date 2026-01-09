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
  let norow = [];
  let firstrow = [1];
  let secondrow = [1, 1];
  let thirdrow = [1, 2, 1];
  let fourthrow = [1, 3, 3, 1];
  let fifthrow = [1, 4, 6, 4, 1];
  let sixthrow = [1, 5, 10, 10, 5, 1];
  let seventhrow = [1, 6, 15, 20, 15, 6, 1];
  let eigthrow = [1, 7, 21, 35, 35, 21, 7, 1];
  let ninthrow = [1, 8, 28, 56, 70, 56, 28, 8, 1];
  let tenthrow = [1, 9, 36, 84, 126, 126, 84, 36, 9, 1];

  switch(nbrow)
  {
    case 0: 
      return norow;
      break;
    
    case 1:
      return firstrow;
      break;

    case 2:
      return firstrow, secondrow;
      break;

    case 3:
      return firstrow, secondrow, thirdrow;
      break;

    case 4:
      return firstrow, secondrow, thirdrow, fourthrow;
      break;

    case 5:
      return firstrow, secondrow, thirdrow, fourthrow, fifthrow;
      break;

    case 6:
      return firstrow, secondrow, thirdrow, fourthrow, fifthrow, sixthrow;
      break;

    case 10:
      return firstrow, secondrow, thirdrow, fourthrow, fifthrow, sixthrow, seventhrow, eigthrow, ninthrow, tenthrow;
      break;
  }
};
