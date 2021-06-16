'use strict'

/**
 * 1.(это задание делайте по желанию) Написать функцию, преобразующую число в объект.Передавая на
 *  вход число в диапазоне[0, 999],	мы должны получить на выходе объект,
 *  в котором в соответствующих свойствах описаны разряды числа:
 * -единицы(в свойстве units) 
 * -десятки(в свойстве tens) 
 * -сотни(в свойстве hundereds)
 */

/**
 * Возвращает объект с разрядами числа
 * @param {number} number число
 * @returns 
 */
function numberToObject(number) {
	let obj = {};
	if (!Number.isInteger(number)) {
		console.log("Число не целое или не число");
		return obj;
	} else if (number < 0 || number > 999) {
		console.log("Число вне диапазона 0-999");
		return obj;
	}

	let arrNum = number.toString().split('');
	obj.hundereds = +(arrNum[arrNum.length - 3] ?? 0);
	obj.tens = +(arrNum[arrNum.length - 2] ?? 0);
	obj.units = +(arrNum[arrNum.length - 1] ?? 0);

	return obj;
}

/* Проверка */
console.log(numberToObject(123));

/**
 * 1.1(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6(по аналогии из дополнительных 
 * видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
 * и price, сохраните их как свойства объекта.Также объекты типа Product должны иметь метод 
 * make25PercentDiscount, который будет уменьшать цену в объекте на 25 % .Имейте в виду, что метод 
 * make25PercentDiscount не должен быть внутри функции - конструктора, и также не нужно создавать отдельный 
 * объект - прототип(как объект transport в уроке).
 */

/**
 * Стиль ES5
 */
function Product(name, price) {
	this.name = name;
	this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
	this.price = this.price - (this.price * 0.25);
};

/* Проверка */
let product = new Product('продукт ES5', 100);
console.log(product);
product.make25PercentDiscount();
console.log(product);

/**
 * Стиль ES6
 */
class Produсt {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	make25PercentDiscount() {
		this.price = this.price - (this.price * 0.25);
	}
}

/* Проверка */
let produсt = new Produсt('продукт ES6', 100);
console.log(produсt);
produсt.make25PercentDiscount();
console.log(produсt);


/**
 * 1.2(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6
 * (по аналогии из дополнительных видео - > 3 примеры наследования - > механика наследования),
 * а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта.
 * Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
 * б) конструктор AttachedPost, который принимает параметры author, text, date.Проинициализируйте эти свойства с
 * помощью конструктора Post, чтобы не дублировать код.Также в конструкторе AttachedPost должно создаваться
 * свойство highlighted со значением false.Унаследуйте в объектах типа AttachedPost методы из Post.
 * Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
 * highlighted значение true
 */

/**
 * Стиль ES5
 */
function Post(author, text, date) {
	this.author = author;
	this.text = text;
	this.date = date;
}

Post.prototype.edit = function(text) {
	this.text = text;
};

function AttachedPost(author, text, date) {
	Post.call(this, author, text, date);
	this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
	this.highlighted = true;
}

/* Проверка */
let post = new AttachedPost('Автор ES5', "текст текст", "16.06.2021");
console.log(post);
post.edit("Новый текст");
post.makeTextHighlighted();
console.log(post);

/**
 * Стиль ES6
 */
class Pоst {
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}

	edit(text) {
		this.text = text;
	}
}

class AttachedPоst extends Post {
	constructor(author, text, date) {
		super(author, text, date);
		this.highlighted = true;
	}

	makeTextHighlighted() {
		this.highlighted = true;
	}
}

/* Проверка */
let pоst = new AttachedPost('Автор ES6', "текст текст", "16.06.2021");
console.log(pоst);
pоst.edit("Новый текст");
pоst.makeTextHighlighted();
console.log(pоst);

