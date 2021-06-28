function telephoneCheck(str) {
  var regex = new RegExp('^[1]?(\\s)?((\\(\\d{3}\\))|\\d{3})[ -]?\\d{3}[ -]?\\d{4}$');
  return regex.test(str);
}

telephoneCheck("555-555-5555");
