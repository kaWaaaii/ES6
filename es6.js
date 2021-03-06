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

Псевдо массивы Set/WeakSet
{
	let set = new Set().add(2).add(3);

	console.log('Set size: ', set.size)
	console.log('Set has: ', set.has(3))
	console.log('Set has: ', set.delete(3))
	console.log('Set size: ', set.size)
	console.log('Set clear: ', set.clear(3))
	console.log('Set size: ', set.size)

	let set1 = new WeakSet();
	let key = {};
	set1.add(key);
	console.log(set1.size)
	key = null
	console.log(set1.size)
}

Псевдо объекты
{
	let map = new Map();

	map.set('name', 'WFM');
	map.set('age', 22);

	let obj1 = {};
	let obj2 = {};

	map.set(obj1, 10);
	map.set(obj2, 50);

	console.log('size', map.size)
	console.log('Has', map.has(obj2))
	console.log('Delete', map.delete(obj2))
	console.log('size', map.size)
	console.log('Has', map.has(obj2))

	let map = new Map([
		['name', 'wfm'],
		['age', 20]
	])

	for (let entr of map.entries()) {
		console.log(`${entr[0]} - ${entr[1]}`)
	}

	let map = new WeakMap();
	let key = {};
	map.set(key, "key");
	console.log('Size: ', map.size)
	key = null
	console.log('Size: ', map.size)
}

Импорт/Экспорт
{
	import {name, age} from './extra.js'

	import func from './extra.js'

	console.log(name, age)
	func();
}

Символы
{
	let fib = {
		[Symbol.iterator]() {
			let pre = 0, cur = 1;
			return {
				next() {
					[pre, cur] = [cur, pre + cur];
					return {value: cur, done: false};
				}
			}
		}
	}

	for (let n of fib) {
		if (n > 1500) break;
		console.log(n)
	}
}

Генераторы
{
	function* getRange(start = 0, end = 100, step = 10) {
		while (start < end) {
			yield start;
			start += step;
		}
	}

	for (let n of getRange(10, 50)) {
		console.log(n)
	}



	let fib = {
		*[Symbol.iterator]() {
			let cur = 1, pre = 0;
			for (;;) {
					[cur,pre] = [cur + pre, cur];
					yield cur;
			}
		}
	}

	for (let n of fib) {
		if (n>3000) break;
		console.log(n)
	}
}

Новые методы
{
	//Метод у объектов
	// let obj1 = {a: 1};
	// let obj2 = {b: 2, c: 3};

	// let obj3 = Object.assign({}, obj1, obj2);

	// console.log(obj1)
	// console.log(obj2)
	// console.log(obj3)

	//Метод у массива
	// let findedItem = [1,2,3,4].find(x => x > 3);
	// console.log(findedItem)

	let str = 'Hello';

	console.log('Repeat: ', str.repeat(3)) //повторяет
	console.log('StartsWith: ', str.startsWith('Hel')) 
	console.log('Includes: ', str.includes('Hel')) //есть ли это значение в строке
}

Promise - end
{
	// function oldDelay(ms, func) {
	// 	setTimeout(function(){
	// 		func();
	// 	}, ms)
	// }

	function delay(ms = 1000) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				reject()
			}, ms)
		});
	}

	delay(4000)
		.then(() => {
			console.log('new delay passed');
		})
		.catch(() => {
			console.info('error')
		})
}
*/