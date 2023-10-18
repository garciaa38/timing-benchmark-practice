// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  // console.time('addNums');
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  // console.timeEnd('addNums');
  return total;
}

// addNums(100000);

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let total = 0;
  // console.time('addManyNums');
  for (let i = 0; i <= n; i++) {
    //o(n)
    total += addNums(i); //o(n) === o(n^2)
  }
  // console.timeEnd('addManyNums');
  return total;
}

// addManyNums(100000);

module.exports = [addNums, addManyNums];
