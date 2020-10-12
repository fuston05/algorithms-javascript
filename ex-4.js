// Task 1: Without peeking, write your own recursive factorial method

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

// factorial: 5 * 4 * 3 * 2 * 1

const recurseFactorial = (n) => {
  // base case: if n === 0
  if (n === 0) {
    return 1;
  }else{
    return n * recurseFactorial(n-1);
  }
};

console.log(recurseFactorial(3));
