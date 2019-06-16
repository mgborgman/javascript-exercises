const fibonacci = function(seq) {
    var fibs = [1, 1];
    if(seq < 0) {
        return 'OOPS';
    }
    else {
        for(var i = fibs.length - 1; fibs.length < seq; i++) {
            var j = fibs.length - 2;
            fibs.push(fibs[i] + fibs[j]);
        }
    }
    return fibs.pop();
}

module.exports = fibonacci
