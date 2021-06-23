function updateInventory(curInv, newInv) {
  for (let i = 0; i < newInv.length; i++) {
    let isNew = true;
    for (let j = 0; j < curInv.length; j++) {
      if (curInv[j][1] == newInv[i][1]) {
        curInv[j][0] += newInv[i][0];
        isNew = false;
        break;
      }
    }
    if (isNew) {
      let isAdded = false;
      for (let k = 0; k < curInv.length; k++) {
        if (curInv[k][1] > newInv[i][1]) {
          curInv.splice(k, 0, newInv[i]);
          isAdded = true;
          break;
        }
      }
      if (isAdded == false)
        curInv.push(newInv[i]);
    }
  }
  console.log(curInv);
  return curInv;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);