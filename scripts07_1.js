// Задание 7.1
// Опишите класс Machine у которого  свойство power в котором 
// будет хранится мощность, enabled - хранит состояние вкл/выкл,
//  методы enable и disable.
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

coffeeMachine = new Machine(500);
console.log(coffeeMachine.isMashineEnabled());
console.log(coffeeMachine.enable());
console.log(coffeeMachine.isMashineEnabled());
console.log(coffeeMachine.disable());
console.log(coffeeMachine.isMashineEnabled());

