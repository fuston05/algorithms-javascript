//TASK: implement mergesort!
// protip: Split the array into halves and merge them recursively
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result

const mergeSort= (arr) => {
  // base case
  if(arr.length === 1){
    return arr;
  }

  const mid = Math.floor(arr.length/2);
  const left= arr.slice(0, mid);
  const right= arr.slice(mid);
  const leftSorted= mergeSort(left);
  const rightSorted= mergeSort(right);

  return merge(leftSorted, rightSorted);

}

const merge= (left, right) => {
  const res= [];
  let indexR= 0;
  let indexL= 0;

  while(indexL < left.length && indexR < right.length){
    if(left[indexL] < right[indexR]){
      res.push(left[indexL]);
      indexL++;
    }else{
      res.push(right[indexR]);
      indexR++;
    }
  }
  return res.concat(left.slice(indexL)).concat(right.slice(indexR));
}



// arr= [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
arr= [12, 7, 76, 3, 9, 1, 5, 98, 32, 0];

console.log(mergeSort(arr));