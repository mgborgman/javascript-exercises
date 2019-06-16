const ftoc = function(deg) {
  var result = 0;
  result = (deg - 32) * (5/9);
  return (Math.round(result * 10) / 10);
}

const ctof = function(deg) {
  var result = 0;
  result = (deg * (9/5)) + 32;
  return (Math.round(result * 10) / 10);
}

module.exports = {
  ftoc,
  ctof
}
