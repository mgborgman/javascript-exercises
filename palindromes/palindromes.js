const palindromes = function(str) {
    var isPalindrome = false;
    str = str.toLowerCase();
    var strArray = str.split('');
    var justStrsArray = [];
    
    for(var i = 0; i < strArray.length; i++) {
        if(strArray[i].charCodeAt() >= 97 && strArray[i].charCodeAt() <=122) {
            justStrsArray.push(strArray[i]);
        }
    }

    var onlyLetters = justStrsArray.join('');
    var onlyLettersReverse = justStrsArray.reverse().join('');

    if (onlyLetters === onlyLettersReverse) isPalindrome = true;

    return isPalindrome;

}

module.exports = palindromes
