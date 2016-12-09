// Задание 4
// Есть объект salaries с зарплатами. Напишите код, который 
// выведет сумму всех зарплат. Если объект пустой, 
// то результат должен быть 0.

'use strict'
var salaries = {
	ivanov: 10000,
	petrov: 15000,
	sidorov: 15000
}
function sumSalary(obj) {
	if (Object.keys(obj) === 0) {
		return 0;
	}
	var sum = 0;
	for (var key in obj) {
		sum = sum + obj[key];
	}
	return sum;
}
console.log('Total salaries: ' + sumSalary(salaries) + '$');

salaries = {};
console.log('Total salaries: ' + sumSalary(salaries) + '$');
