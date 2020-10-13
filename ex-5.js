// TASK: Implement linear search.

function linearSearch(list, item) {
  // *** for loop method ***
  // res = null;
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i] === item) {
  //     return list[i];
  //   }
  // }
  // return "not found";

  // *** filter method ***
  // res= list.filter(ele => {
  //   return ele === item;
  // })
  // return res.length ? res : 'not found';

  // *** foreach method ***
  let ind = -1;
  list.forEach((ele, i) => {
    if (ele === item) {
      ind = i;
    }
  });
  return ind;
}

console.log(linearSearch([2, 6, 7, 90, 103], 90));
