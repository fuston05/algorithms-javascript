//TASK: implement mergesort!
// protip: Split the array into halves and merge them recursively
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result

const mergeSort= (arr) => {
    // base case: arr.length === 1
    if(arr.length === 1){
      return arr;
    }

    let mid= Math.floor(arr.length/2);

    // let left= arr.slice(0, mid)
    const left= arr.slice(0, mid);
    // let right= arr.slice(mid)
    const right= arr.slice(mid);
    const sortedLeft= mergeSort(left);
    const sortedRight= mergeSort(right);


    return merge(sortedLeft, sortedRight);
}

const merge= (left, right) => {
  const res= [];
  let leftPointer= 0;
  let rightPointer= 0;

  // iterate and compare 1st in each arr,
  while(leftPointer < left.length && rightPointer < right.length){

    if(left[leftPointer] < right[rightPointer]){
      res.push(left[leftPointer]);
      leftPointer++;

    }else{
      res.push(right[rightPointer]);
      rightPointer++;
    }
  }
  return res.concat(left.slice(leftPointer)).concat(right.slice(rightPointer));
}



// arr= [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
arr= [12, 7, 76, 3, 9, 1, 5, 98, 32, 0];

console.log(mergeSort(arr));