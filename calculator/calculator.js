function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (listOfNums) {
	var total = 0;
	for(var i = 0; i < listOfNums.length; i++) {
		total += listOfNums[i];
	}
	return total;
}

function multiply (listOfNums) {
	var total = listOfNums[0];
	for(var i = 1; i <listOfNums.length; i++) {
		total *= listOfNums[i];
	}
	return total;
}

function power(num, power) {
	return Math.pow(num, power);
}

function factorial(num) {
	var result = num;
	if (result == 0) return 1;
	for(var i = num - 1; i > 0; i--) {
		result *= i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}