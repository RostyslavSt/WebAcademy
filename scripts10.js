// Задание 10
// Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и 
// возвращает новый массив, который содержит только числа из arr из диапазона от a до b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

'use strict'
let arr = [1, 34, 19, 45, 22, 89, 120, 89];

let filterRange = (arr, a, b) => {
	let arrResult = [];

	for (let i = 0; i < arr.length; i++) {
		if ( (arr[i] >= a) && (arr[i]) <= b ) {
			arrResult.push(arr[i]);
		}
	}

	return arrResult;
}

let result = filterRange(arr, 10, 50);
console.log(result);