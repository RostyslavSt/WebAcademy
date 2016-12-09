// Задание 6
// Создайте функцию multiplyNumeric, которая получает объект
//  и умножает все численные свойства на 2. 
'use strict'
var car = {
	model: 'nissan',
	newCar: false,
	cost: 7000,
	mileage: 25000,
	transmisson: 'auto',
	nummberDoors: 2
}
//функция печати ключ: значение
function printConsole(obj) {
	for (var key in obj) {
		console.log(key + ': ' + obj[key]);
	}
	console.log('---------------------')
}

//функция умножения
function multiplyNumeric(obj, multiplier) {
	for (var key in obj) {
		if (typeof(obj[key]) === 'number') {
			obj[key] *= multiplier;
		}
	}
}

printConsole(car);
multiplyNumeric(car, 2);
printConsole(car);