// Task 1: Without peeking, write your own recursive factorial method

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

// factorial: 5 * 4 * 3 * 2 * 1

const memoize= (fn) => {
  let cache= {};
  return (...args) => {
    let n= args[0];
    if(n in cache){
      return cache[n]
    }else{
      return cache[n]= fn(n);
    }
  }
}

const recurseFactorial = memoize((x) => {
  if(x === 0){
    return 1;
  }else{
    return x * recurseFactorial(x-1);
  }
});

console.log(recurseFactorial(10));
