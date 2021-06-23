function permAlone(str) {
    // Create a regex to match repeated consecutive characters.
    var regex = /(.)\1+/;
  
    // Split the string into an array of characters.
    let arr = str.split("");
    var permutations = [];
  
    // Return 0 if str contains same character.
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  
    // Function to swap variables' content.
    function swap(index1, index2) {
      if(index1 == index2)
        return;
      //console.log("swap: " + index1 + "<>" + index2);
      //console.log("swap_s: " + arr);
      let tmp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = tmp;
      //console.log("swap_e: " + arr + "\n")
    }
  
    // Generate arrays of permutations using the algorithm.
    function generate(int) {
      if (int === 1) {
        permutations.push(arr.join(""));
      } else {
        for (var i = 0; i != int; ++i) {
          generate(int - 1);
          swap(int % 2 ? 0 : i, int - 1);
        }
      }
    }
  
    generate(arr.length);
  
    // Filter the array of repeated permutations.
    var filtered = permutations.filter(function(string) {
      return !string.match(regex);
    });
  
    // Return how many have no repetitions.
    console.log(filtered.length);
    return filtered.length;
  }
  
  permAlone('abcd');