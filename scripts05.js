// Задание 5
// Есть объект salaries с зарплатами. Напишите код,
// который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».

'use strict'
var salaries = {
	ivanov: 10000,
	petrov: 50000,
	sidorov: 18000,
}
var salariesNull = {};

//функция проверки на содержание свойств
function isEmpty(obj) {
	for (var key in obj) {
		return false;
	}
	return true;
}

//функция поиска максимальной зарплаты.
function maxSalary(obj) {
	var maxSalary = 0;

	//проверяем объект
	if (isEmpty(obj) === true) {
		return maxSalary = 'Sorry, there are no employees';
	}

	//ищем максимальное значение
	for (var key in obj) {
		if (obj[key] > maxSalary) {
			maxSalary = obj[key];
		} 
	}
	return maxSalary;
}

console.log('max salary is: ' + maxSalary(salaries));
console.log(maxSalary(salariesNull));