const reverseString = function(str) {
    var str_arr = str.split('');
    var result = '';
    for (var i = str_arr.length - 1; i >= 0; i--) {
        result += str_arr[i];
    }
    return result;
}

module.exports = reverseString
