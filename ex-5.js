// TASK: Implement linear search.

function linearSearch(list, item) {
  res = null;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return list[i];
    }
  }
  return "not found";
}

console.log(linearSearch([2, 6, 7, 90, 103], 90));
