// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
      return 1.5;
      break;
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      return 2.5;
      break;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limescut = 0;
  let isok = false;
  let idx = 0;
  for(let i = 0; i <= limes.length; i++)
  {
    if (i != limes.length && limescut < wedgesNeeded)
    {
      switch(limes[i])
      {
        case "small":
          limescut += 6;
          break;
        case "medium":
          limescut += 8;
          break;
        case "large":
          limescut += 10;
          break;
      }
    }
    else if (isok == false || i == limes.length && limescut < wedgesNeeded)
    {
      isok = true;
      idx += i;
    }
  }

  return idx;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let final = 0;
  let tablecomm = [];
  for(let i = 0; i < orders.length; i++)
  {
    if (final < timeLeft)
    {
      switch (orders[i]) {
    case "Pure Strawberry Joy":
      final += 0.5;
      break;
    case "Energizer": 
      final += 1.5;
      break;
    case "Green Garden":
      final += 1.5;
      break;
    case "Tropical Island":
      final += 3;
      break;
    case "All or Nothing":
      final += 5;
      break;
    default:
      final += 2.5;
      break;
      }
      
    }
    else
      {
        tablecomm.push(orders[i]);
      }
    
    }
    return tablecomm;
}
