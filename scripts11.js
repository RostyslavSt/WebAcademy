// Задание 11
// Напишите функцию pow(x,n), которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.

'use strict'

let pow = (x,n) => {
	let fixedX = x;
	for (let i = 1; i < n; i++) {
		x *= fixedX;
	}
	return x;
}
console.log(pow(5,4));