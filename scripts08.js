// Задание 8
// Напишите функцию которая:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, 
// не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива

'use strict'
//валидация введенного значения
let checkValue = (num) => {
	if  ((num === '') || (num === null)) {
		return true;
	}

	num = parseInt(num);

	if ( num === NaN ) {
		return true;
	}
}

//сумма всех элементов массива
function sumValueArray(arr) {
	let sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

//заполнение массива
function fillArray() {
	let arrNew = [],
		value,
		result,
		i = true;

	while (i) {
		value = prompt('Enter number');
		if (checkValue(value)) {break};
		value = parseInt(value);
		arrNew.push(value);
	}

	result = sumValueArray(arrNew);
	console.log('Сумма элементов массива равна: ' + result);
}

fillArray();