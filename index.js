//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

// inp= [1,5,2,1] //=> output: [1,2,5]
inp= [4,2,2,3,2,2,2] //=> output: [2,3,4]

const uniqSort = function(arr) {
  const breadcrumbs = {};
  result= [];

  for(let i= 0; i < arr.length; i++){
    if(!breadcrumbs[arr[i]]){
      breadcrumbs[arr[i]]= true;
      result.push(arr[i]);
    }
  }

  return result.sort((a, b) => a - b);
};

console.log(uniqSort(inp)); // => [2,3,4]
