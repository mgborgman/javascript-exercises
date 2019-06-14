const repeatString = function(str, num) {
    if(num == -1) {
        return 'ERROR'
    }
    else if(num == 0) {
        return ''
    }
    else {
        var result = '';
        for (var i = 0; i < num; i++) {
            result += str;
        }
        return result;
    }
}

module.exports = repeatString
