/* 
Стрелочные функции
{
	const orig = function() {
		return 100;
	};

	console.log(orig())

	const arrow = (num) => {
		return 150 + num;
	}
	console.log(arrow(50))

	const arrow2 = (num) => 150 + num;
	const arrow3 = num => 150 + num;

	старый способо:
	const obj = {
		name: 'WFM',
		logName: function() {
			var that = this
			setTimeout(function() {
				console.log('name: ' + that.name)
			}, 1000)
		}
	}
	obj.logName()

	через стрелки

	const obj = {
		name: 'WFM',
		logName: function() {
			setTimeout(() => {
				console.log('name: ' + this.name)
			}, 1000)
		}
	}
	obj.logName() 
}

Параметры по умолчанию
{
	const c = 90;

	const c2 = () => 200;

	const func = (a = 20, b = a + c2()) => {

		return a + b;
	}

	console.log(func(30))
}

Работа с объектами
{
	const name = "WFM";
	const age = 20
	const obj = {
		name,
		age
	}

	const createPerson = (name, surname, fieldName, fieldPostfix) => {
		const fullname = name + " " + surname
		return {
			fullname, 
			name, 
			surname,
			getJob() {
				return 'Front End 1'
			},
			[fieldName + fieldPostfix]: 100
		};
	}
	const person = createPerson('WFM', 'WFM2', 'car', '-model')
	console.log(person)
}

Деструктуризация объекта:
{
	let obj = {
		name: 'WFM',
		age: 12
	}

	let {name: n, age: a} = obj;

	console.log(n, a)

	Деструктуризация массива:
	let array = ['MFU', 30, 'red'];

	let [name, , color] = array;

	console.log(name, ,color);
}

Rest & Spread
{
	//rest
	function longString(num, ...args) {
		console.log(num, args)
	}
	//spread
	let spreadArray = ["WFM", "WFM2", "WFM3"];
	longString(29, ...spreadArray)
}

Строки
{
	let name = "WFM";

	let str = `Hello ${name}, glad to see you! ${5+5}`

	console.log(str)
}

Цикл for of
{
	const array = [1,2,3,4,5,6,65];

	// array.forEach(function(item){
	// 	console.log(item)
	// })

	// for (let item of array) {
	// 	console.log("item: ", item)
	// }

	for (let item of 'ABCDFG') {
		console.log("item: ", item)
	}
}

Классы
{
	class Car {
		constructor(name) {
			console.log('Car constructor')
			this.name = name
		}

		logName() {
			console.log('Car name is ', this.name)
		}

	}

	class BMW extends Car {
		constructor(name) {
			super(name);

			console.log('BMW constructor')
		}

	}

	let bmw = new BMW('x6');
	bmw.logName();
}
*/