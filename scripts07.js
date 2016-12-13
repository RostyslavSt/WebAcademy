// Задание 7
// Написать функцию конструктор Animal задать ей свойства и методы
// (на свое усматрение) которые общие для всех животных, 
// на основе конструкторах Animal  описать конструктор Horse и Bird которые 
// будут дополнять методы от Animal собственными методами и свойствами. 
// Задание творческое, методы и свойства которые нужно реализовать выберите сами.

function Animal(color, typeFood, amountFood, helpingFood) {
	this.color = color;
	this.typeFood = typeFood;
	this.amountFood = amountFood; //запас еды
	this.helpingFood = helpingFood; //порция продуктов
	this.giveFood = function (portion) { //дать продуктов
		amountFood += portion;
	}
	this.eating = function() { 				//кол-продуктов сьедаемых за 1 раз
		amountFood -= this.helpingFood;
	};
	this.foodBalance = function() {			//остаток продуктов
		return amountFood;
	}
}

randomAnimal = new Animal('white', 'hay', 20, 3);

// function Horse(kindHorse) {
// 	Animal.call(this);
// 	this.kindHorse = kindHorse;
// 	this.run = function () {
// 		this.eating();
// 	};
// }

// horse = new Horse('Mustang');
// horse.color = 'black';
// horse.typeFood = 'oats';
// horse.amountFood = 100;
// horse.helpingFood = 25;

// console.log(horse);