//TASK: Implement bubblesort!
const bubbleSort= (arr) => {
  let iterations= 1;
  while(iterations < arr.length){
    for(let i= 0; i < arr.length; i++){
      // compare ind and ind+1
      // if ind > ind+1: 
      if( arr[i] > arr[i+1] ){
        // swap: let temp= ind+1
        let temp= arr[i+1];
          // ind+1= ind
          arr[i+1]= arr[i]
          // ind = temp
          arr[i]= temp
      }
    }
    iterations+= 1;
  }
  return arr;
}

// arr= [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// arr= [12, 7, 76, 3, 9, 1, 5, 98, 32, 0];
console.log(bubbleSort(arr));