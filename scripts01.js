// Задание 1
// Напишите функцию randomInteger(min, max) для генерации 
// случайного целого числа между min и max, включая min,max 
// как возможные значения.
var num1 = parseInt(prompt("Enter min number")),
	num2 = parseInt(prompt("Enter max number"));

function randomInteger(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

var result = randomInteger(num1, num2);
console.log("Random number between " + num1 + " and " + 
				num2 + " is: " + result);
