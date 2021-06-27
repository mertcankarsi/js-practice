// https://en.wikipedia.org/wiki/ROT13
function rot13(str) {
  // A=65 Z=90
  var result = "";
  for(var i=0; i<str.length;i++) {
    var chr = str.charAt(i)
    var charCode = str.charCodeAt(i);
    if(charCode >= 65 && charCode <= 90) {
      var shiftedCharCode=charCode+13;
      if(shiftedCharCode>90){
        shiftedCharCode = 64 + (shiftedCharCode-90);
      }
      chr =  String.fromCharCode(shiftedCharCode);
    }
    result += chr;
  }
  console.log(result);
  return result;
}

rot13("SERR PBQR PNZC");
