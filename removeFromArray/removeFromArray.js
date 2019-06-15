const removeFromArray = function(list) {
    var i, element, index;
    for (i = 1; i < arguments.length; i++) {
        element = arguments[i];
        if(list.includes(element)) {
            index = list.indexOf(element);
            list.splice(index, 1);
        }
    }
    return list;

}

module.exports = removeFromArray
