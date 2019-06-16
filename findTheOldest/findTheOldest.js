let findTheOldest = function(people) {
    var oldestAge = 0;
    var ageRange = [];
    var oldestPerson;
    var currentYear = new Date().getFullYear();

    people.forEach(function(person) {
        if(person.hasOwnProperty('yearOfDeath')) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            person.age = currentYear - person.yearOfBirth;
        }
        ageRange.push(person.age);
    });
    oldestAge = Math.max.apply(null,ageRange);
    
    people.forEach(function(person) {
        if(person.age == oldestAge) oldestPerson = person;
    });

    return oldestPerson
}

module.exports = findTheOldest
