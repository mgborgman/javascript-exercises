const leapYears = function(year) {
    var isLeapYear = false;
    if((year % 100 === 0 && year % 400 === 0) ||
        (year % 4 === 0 && year % 100 !== 0)) isLeapYear = true;
    return isLeapYear;
}

module.exports = leapYears
