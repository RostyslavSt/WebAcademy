// Задание 3
// Создайте функцию isEmpty(obj), которая возвращает true, 
// если в объекте нет свойств и false – если хоть одно свойство есть.
'use strict'
var car = {
	model: "Mazda 6",
	color: "black",
	transmission: "auto"
};
var flat = {};

function isEmpty(obj) {
	// if (Object.keys(obj).length === 0) {
	// 	return true;
	// } else return false;
	for (var key in obj) {
		return false;
	} 
	return true;
}

//проверяем car
var checkResult = isEmpty(car);
console.log(checkResult);

//проверяем flat
checkResult = isEmpty(flat);
console.log(checkResult);