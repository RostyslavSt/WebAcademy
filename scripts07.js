// Задание 7
// Напишите код для вывода alert случайного значения из массива:

'use strict'
var arrNew = ['ipsum', 35, 78, 'lorem', 45];
var randomIndex;

function randomValue(arr) {
	var lengthArr = arr.length;
	return Math.round( Math.random() * (arr.length - 1) );
}
randomIndex = randomValue(arrNew);
console.log('Исходный массив: ' + arrNew);
console.log('Случайное значение из массива:');
console.log('Индекс - ' + randomIndex + '; ' + 'Значение: ' + arrNew[randomIndex]);