function pairwise(arr, arg) {
    var result = 0;
    for(let i=0; i<arr.length-1; i++) {
      for(let j=i; j<arr.length; j++) {
        if(arr[i] + arr[j] == arg)
          result += i + j;
      }
    }
    console.log(result);
    return result;
  }
  
  pairwise([1,4,2,3,0,5], 7);