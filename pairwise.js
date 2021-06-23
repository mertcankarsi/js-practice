function pairwise(arr, arg) {
  var result = 0;
  var pairs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == null || arr[j] == null)
        continue;
      if (arr[i] + arr[j] == arg) {
        arr[i] = null;
        arr[j] = null;
        pairs.push([i, j]);
        result += i + j;
      }
    }
  }
  return result;
}

pairwise([1, 3, 2, 4], 4);