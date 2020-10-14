//TASK: implement mergesort!
// protip: Split the array into halves and merge them recursively
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result

const mergeSort= (arr) => {
  if(arr.length === 1){return arr;}

  const mid= Math.floor(arr.length / 2);

  const left= arr.slice(0, mid);
  const right= arr.slice(mid);

  const sortedLeft= mergeSort(left);
  const sortedRight= mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

const merge= (left, right) => {
  const res= [];
  let rightInd= 0;
  let leftInd= 0;

  while(leftInd < left.length && rightInd < right.length){
    if( left[leftInd] < right[rightInd] ){
      res.push(left[leftInd]);
      leftInd++;
    }else{
      res.push(right[rightInd]);
      rightInd++;
    }
  }
  return res.concat(left.slice(leftInd)).concat(right.slice(rightInd));
}



// arr= [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
arr= [12, 7, 76, 3, 9, 1, 5, 98, 32, 0];

console.log(mergeSort(arr));