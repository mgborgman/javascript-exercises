const getTheTitles = function(books) {
    var result = [];
    books.forEach(function(book){
        result.push(book['title']);
    });
    return result;
}

module.exports = getTheTitles;
