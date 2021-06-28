const currencyValues = { "PENNY": 0.01, "NICKEL":0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};

function checkCashRegister(price, cash, cid) {
  var result = {
    status: 'INSUFFICIENT_FUNDS',
    change: []
  };
  var changeTotal = cash - price;
  var cidTotal=0;
  for(var i=cid.length-1; i>=0; i--) {
    cidTotal+=cid[i][1];
  }
  if(cidTotal==changeTotal) {
    result.status="CLOSED"
    result.change=cid;
    return result;
  }
  
  var change = [];
  for(var i=cid.length-1; i>=0; i--) {
    var currency = currencyValues[cid[i][0]];
    var quantity = cid[i][1]/currency;
    if(currency > changeTotal)
      continue;
    var quantityForChange = Math.floor(changeTotal/currency);
    quantityForChange = Math.min(quantity, quantityForChange);
    changeTotal -= currency * quantityForChange;
    changeTotal = changeTotal.toFixed(2);
    change.push([cid[i][0], currency * quantityForChange]);
  }

  if(changeTotal==0){
    result.status = "OPEN";
    result.change = change;
  }
  return result;
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
