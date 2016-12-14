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
	this.giveFood = function(portion) { //дать продуктов
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

//horse
function Horse(color, typeFood, amountFood, helpingFood, kindHorse) {
	Animal.call(this, color, typeFood, amountFood, helpingFood, kindHorse);
	this.kindHorse = kindHorse;
	this.run = function () {
		this.eating();
	};
}

// bird
function Bird (color, typeFood, amountFood, helpingFood, 
				typeBird, migratoryBird) {
	Animal.call(this, color, typeFood, amountFood, helpingFood, 
				typeBird, migratoryBird);
	this.typeBird = typeBird;
	this.migratoryBird = migratoryBird;
}

horse = new Horse('black', 'oats', 100, 25, 'Mustang');
console.log(horse);

bird = new Bird('white', 'oats', 10, 5, 'sparrow', true);
console.log(bird);
