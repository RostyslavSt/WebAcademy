// Задание 9
// Создайте функцию find(arr, value), которая ищет в массиве arr значение
// value и возвращает его номер, если найдено, или -1, если не найдено.

'use strict'
let arrNew = [34, 45, 77, 18, 32];

let find = (arr, value) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}
	return -1;
}

let printResult = (value, result) => {
	if (result >= 0) {
		console.log('Success! We find value: ' + value + ' .It\'s index: ' + result);
	} else {
		console.log('Sorry. We can\'t find it: ' + result)
	}

}
// let result = find(arrNew, 32);
// console.log(result);
printResult(32, find(arrNew, 77));
printResult(32, find(arrNew, 90));