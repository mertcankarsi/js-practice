function palindrome(str) {
  // remove non-alphanumeric characters 
  str=str.replace(/[^A-Za-z0-9]/g, '');

  // turn everything into the same case
  str=str.toLowerCase();

  // remove mid
  if(str.length %2==1){
    str=str.split('');
    str.splice(Math.floor(str.length/2),1);
    str=str.join('');
  }
  
  // check
  var half=str.length/2;
  for(var i=1;i<half;i++){
    if(str[half-i]!=str[half+i-1])
      return false;
  }
  
  return true;
}

palindrome("A man, a plan, a canal. Panama");
