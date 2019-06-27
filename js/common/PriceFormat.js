function PriceFormat() {}
PriceFormat.formatString = function(price) {
  var result = ''
  let minus = false
  if (price < 0) {
    minus = true
    price = -price
  }
  price = parseInt(price, 10)
  for (; price >= 1000; price = parseInt(price / 1000, 10)) {
    result = '.' + PriceFormat.format(price % 1000) + result
  }
  result = (price % 1000) + result
  return minus ? '-' + result : result
}

PriceFormat.formatTotal = function(price) {
  var result = ''
  let minus = false
  if (price < 0) {
    minus = true
    price = -price
  }
  price = parseInt(price, 10)
  for (; price >= 1000; price = parseInt(price / 1000, 10)) {
    result = '.' + PriceFormat.format(price % 1000) + result
  }
  result = (price % 1000) + result
  return minus ? '-' + result + ' đ' : result + ' đ'
}
PriceFormat.format = function(number) {
  number = '' + number
  switch (number.length) {
    case 1:
      number = '00' + number
      break
    case 2:
      number = '0' + number
      break
    default:
  }
  return number 
}
module.exports = PriceFormat
