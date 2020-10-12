// task: rewrite this function so it uses a loop rather than recursion

// function joinElements(array, joinString){

//   function recurse(index, resultSoFar){
//     resultSoFar+= array[index];

//     if(index === array.length -1){
//       return resultSoFar;
//     }else{
//       return recurse(index +1, resultSoFar + joinString);
//     }
//   }
//   return recurse(0, '');
// }

// console.log(joinElements([ 's', 'cr', 't cod', ' :) :)' ], 'e'));

function joinElements(array, joinString) {
  let resultSoFar = array[0];

  for (let i = 1; i < array.length - 1; i++) {
    resultSoFar += array[i] + joinString;
  }
  return resultSoFar;
}

console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));
