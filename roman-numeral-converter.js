const chars = [[1,'I'], [5,'V'], [10,'X'], [50,'L'], [100,'C'], [500,'D'], [1000,'M']];
function convertToRoman(num) {
  var result="";
  
  var m = Math.floor(num/1000);
  num -= m*1000;
  result+=loopForChar(m, 1000);

  if(Math.floor(num/900)<1){
    var d = Math.floor(num/500);
    num -= d*500;
    result+=loopForChar(d, 500);
  }

  var c = Math.floor(num/100);
  num -= c*100;
  result+=loopForChar(c, 100);

  if(Math.floor(num/90)<1){
    var l = Math.floor(num/50);
    num -= l*50;  
    result+=loopForChar(l, 50);
  }

  var x = Math.floor(num/10);
  num -= x*10;
  result+=loopForChar(x, 10);

  if(Math.floor(num/9)<1){
    var v = Math.floor(num/5);
    num -= v*5;
    result+=loopForChar(v, 5);
  }

  var i = Math.floor(num/1);
  num -= i*1;
  result+=loopForChar(i, 1);

  console.log("result", result);
  return result;
}

function loopForChar(count, val){
  if(count<1)
    return "";
  var str = "";
  var indx = chars.indexOf(chars.filter(x=> x[0]==val)[0]);
  var chr = chars[indx][1];
  if(val!=1000 && count==9) {
    var chr2 = chars[indx+2][1];
    str += chr + chr2;
  } else if(val!=1000 && count==4){
    var chr2 = chars[indx+1][1];
    str += chr + chr2;
  } else {
    for(var i=0;i<count;i++){
      str+=chr;
    }
  }
  return str;
}

convertToRoman(9876);
