
function Machine(power) {
	this.power = power;
	this.enabled = false;
	this.enable = function() {
		this.enabled = true;
	}
	this.disable = function() {
		this.enabled = false;
	}
	this.isMashineEnabled = function() {
		return this.enabled;
	}
}


function Fridge(power) {
	Machine.apply(this, arguments);
	this._power = power;
	const limitFood = this._power / 100;
	this._food = ['apple', 'tomatto'];
	this.showLimitFood = function() {
		console.log('Лимит продуктов в единицах: ' + limitFood);
	}
	this.addFood = function() {
		if (this.isMashineEnabled() == true) {				//проверка вкл/выкл
			for (let i = 0; i < arguments.length; i++) {
				if (this._food.length === limitFood) {		//проверка на лимит продуток
					console.log('Sorry, fridge is empty');
					break;
				}
				this._food.push(arguments[i]);
			}
		} else {
			console.log('We can\'t add food! Please, turn on fridge');
			}
	};
	this.getFood = function() {
		let cloneFood = this._food.concat();
		return cloneFood;
	};

	this.filterFood = function(func) {
		
		let arr = this._food;
		let filterArr = [];
		
		for (let i = 0; i < arr.length; i++) {
			if ( func(arr[i]) ) {
				filterArr.push(arr[i]);
			}
		}
		return filterArr;
	}

	this.removeFood = function(item) {
		let arr = this._food;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].title === item) {
				arr.splice(i, 1);
			}
		}
	};

	//переопределяем disable
	// let parentDisable = this.disable;
	this.disable = function() {
		// parentDisable.call(this);
		if (this._food.length > 0) {
			return console.log('Sorry, we can not turn off the fridge because it contains food');
		} else this.enabled = false;
	}
	
} // FRIDGE

let fridge = new Fridge(500);

fridge.showLimitFood();
console.log('Остаток еды на начало: ' + fridge.getFood());
console.log(fridge.getFood());
console.log('------------------------');
fridge.addFood('cutlet');

fridge.enable();

fridge.addFood('cutlet');
fridge.addFood('green-stuff', 'pineapple');
fridge.addFood('potatoes', 'cabbage');

console.log('------------------------');
console.log('Остаток еды на конец : ' + fridge.getFood());
console.log(fridge.getFood());
console.log('------------------------');
console.log('----------Задание 7.3-----------');


//------------------Задание 7.3--------------------
fridge._food = []; // обнуляем массив еды
console.log('Остаток еды на начало: ' + fridge.getFood());
console.log(fridge.getFood());

//добавляем еду
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});
console.log('Количество еды : ' + fridge.getFood().length);

console.log('Остаток еды на конец : ' + fridge.getFood());
console.log(fridge.getFood());

console.log('------------------------');
fridge.removeFood('котлета');
console.log(fridge.getFood());
console.log('Количество еды : ' + fridge.getFood().length);


let dietItems = fridge.filterFood(function(item) {
	return item.calories < 50;
});

console.log('------------------------');
console.log('Отсортированный массив');
console.log(dietItems);

dietItems.forEach(function(item) {
  console.log( item.title ); // сок, зелень
  fridge.removeFood(item);
});

console.log('------------------------');
fridge.disable();
console.log(fridge.isMashineEnabled());



