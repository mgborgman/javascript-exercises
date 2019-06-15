const sumAll = function(num1, num2) {
    var start = 0;
    var stop = 0;
    var total = 0;
    if ((typeof(num1) != 'number') ||
        (typeof(num2) != 'number') || 
        (num1.isArray) ||
        (num2.isArray) ||
        (num1 < 0) ||
        (num2 < 0)) {
            return 'ERROR';
        }
    else {
        if(num1 < num2) {
            start = num1;
            stop = num2;
        } else {
            start = num2;
            stop = num1;
        }

        var i = start;
        for (i; i <= stop; i++) {
            total += i;
        }
    }
    return total;
}

module.exports = sumAll
