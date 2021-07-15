class Hamburger {
	/**
	 * Создание гамбургера
	 * @param {string} size размер (большой, маленький)
	 * @param {string} stuffing начинка (сыр, салат, картофель)
	 */
	constructor(size, stuffing) {
		this.size = size;
		this.stuffing = stuffing;
		this.topping = [];
	}

	/**
	 * Проверка топинга
	 * @param {string} topping имя топинга
	 * @returns {boolean}
	 */
	checkTopping(topping) {
		if (!typeof topping == 'string') {
			console.error('Добавка должна быть строкой')
			return false;
		}

		if (!['приправа', 'мазик'].includes(topping)) {
			console.error('Такой добавки нет')
			return false;
		}

		return true;
	}

	/**
	 * Добавить добавку
	 * @param {string} topping имя добавки (мазик, приправа)
	 * @returns 
	 */
	addTopping(topping) { 
		if (!this.checkTopping(topping)) {
			return;
		}

		if (this.topping.includes(topping)) {
			console.error('Такая добавка уже есть')
			return;
		}

		this.topping.push(topping);
	}

	/**
	 * Убрать добавку
	 * @param {string} topping имя добавки (мазик, приправа)
	 * @returns 
	 */
	removeTopping(topping) { 
		if (!this.checkTopping(topping)) {
			return;
		}

		this.topping = this.topping.filter(e => e != topping);
	}

	/**
	 * Получить список добавок
	 * @returns {string}
	 */
	getToppings() { 
		return this.topping.join();
	}

	/**
	 * Узнать размер гамбургера
	 * @returns {string}
	 */
	getSize() { 
		return this.size;
	}

	/**
	 * Узнать начинку гамбургера
	 * @returns {string}
	 */
	getStuffing() { 
		return this.stuffing;
	}

	/**
	 * Узнать цену
	 * @returns {string}
	 */
	calculatePrice() { 
		let price = 0;
		switch (this.size) {
			case 'маленький':
				price += 50;
				break;
			case 'большой':
				price += 100;
				break;
		}

		switch (this.stuffing) {
			case 'сыр':
				price += 10;
				break;
			case 'салат':
				price += 20;
				break;
			case 'картофель':
				price += 15;
				break;
		}

		if (this.topping.includes('приправа')) {
			price += 15;
		}

		if (this.topping.includes('мазик')) {
			price += 20;
		}

		return price + ' рублей';
	}

	/**
	 * Узнать калорийность
	 * @returns {string}
	 */
	calculateCalories() { 
		let kkal = 0;
		switch (this.size) {
			case 'маленький':
				kkal += 20;
				break;
			case 'большой':
				kkal += 40;
				break;
		}

		switch (this.stuffing) {
			case 'сыр':
				kkal += 20;
				break;
			case 'салат':
				kkal += 5;
				break;
			case 'картофель':
				kkal += 10;
				break;
		}

		if (this.topping.includes('приправа')) {
			kkal += 0;
		}

		if (this.topping.includes('мазик')) {
			kkal += 5;
		}

		return kkal + ' калорий';
	}
}
