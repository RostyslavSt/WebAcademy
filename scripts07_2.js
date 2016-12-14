
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
	
}

let zanussi = new Fridge(500);

zanussi.showLimitFood();
console.log('Остаток еды на начало: ' + zanussi.getFood());
console.log(zanussi.getFood());
console.log('------------------------');
zanussi.addFood('cutlet');

zanussi.enable();

zanussi.addFood('cutlet');
zanussi.addFood('green-stuff', 'pineapple');
zanussi.addFood('potatoes', 'cabbage');

console.log('------------------------');
console.log('Остаток еды на конец : ' + zanussi.getFood());
console.log(zanussi.getFood());


