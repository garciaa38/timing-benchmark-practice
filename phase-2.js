const [addNums, addManyNums] = require('./phase-1');

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let newArr = [];

  let num = increment;

  for (let i = 0; i < 10; i++) {
    newArr.push(addNums(num));
    num += increment;
  }
  return newArr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let newArr = [];
  let num = increment;
  console.time('addManyNums10');
  for (let i = 0; i < 10; i++) {
    newArr.push(addManyNums(num));
    num += increment;
  }
  console.timeEnd('addManyNums10');
  return newArr;
}

// addManyNums10(10000);

module.exports = [addNums10, addManyNums10];
