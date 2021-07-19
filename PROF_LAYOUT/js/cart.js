'use strict';

class Cart {
	products = [];
	sumCount = 0;

	constructor(catalog) {
		this.catalog = catalog;
	}

	/**
	 * Инициализирует элементы управления корзиной
	 */
	init() {
		let boxCart = document.querySelector('.right__cart');

		this.inCart = document.createElement('div');
		this.inCart.classList.add('right__cart-inCart');
		boxCart.append(this.inCart);

		this.tableBox = document.createElement('div');
		this.tableBox.classList.add('right__cart-table');
		this.tableBox.style.display = 'none';
		boxCart.append(this.tableBox);

		this.table = document.createElement('div');
		this.tableBox.append(this.table);

		this.clear = document.createElement('button');
		this.clear.classList.add('clear');
		this.clear.innerHTML = "Очистить корзину";
		this.tableBox.append(this.clear);

		boxCart.addEventListener('click', this.showCartTable.bind(this));
		this.clear.addEventListener('click', this.clearCart.bind(this));

		document.querySelectorAll('.items__item-image-AddToCart-but').forEach((but) => {
			but.addEventListener('click', this.add.bind(this));
		});

		this.loadCart();
		this.showCount();
	}

	/**
	 * Событие добавления товара в корзину
	 * @param {MouseEvent} event 
	 */
	add(event) {
		event.preventDefault();
		let productCard = event.target.closest('a');
		let id = productCard.dataset.id;
		let prod = this.catalog.getProductById(id);
		this.addProduct(new Product(prod.id, prod.name, prod.descript, prod.img, prod.cost));
	}

	/**
	 * Событие удаление товара из корзины
	 * @param {MouseEvent} event 
	 */
	remove(event) {
		let id = event.target.dataset.id;
		let prod = this.catalog.getProductById(id);
		this.removeProduct(prod);
		event.preventDefault();
		if (this.sumCount) {
			event.stopPropagation();
		}
	}

	/**
	 * Событие отображения товаров корзины
	 * @param {MouseEvent} event 
	 */
	showCartTable(event) {
		if (!this.tableBox.style.display || !this.sumCount) {
			this.tableBox.style.display = 'none';
		} else {
			this.tableBox.style.display = '';
		}

		if (this.sumCount) {
			event.preventDefault();
		}
	}

	/**
	 * Обновление таблицы с товарами в корзине
	 */
	updateTable() {
		let tableHTML = '<table><tr><th>Название</th><th>Колличество</th><th>Цена за шт.</th><th>Итог</th></tr>';
		let sumCost = 0;
		for (const prod of this.products) {
			tableHTML += prod.renderToCart();
			sumCost += prod.calcSum();
		}
		tableHTML += `<tr><td colspan="3" class='total'>Итого:</td><td>$${sumCost}</td></tr></table>`;
		this.table.innerHTML = tableHTML;

		this.table.querySelectorAll('.removeGoodsItem').forEach((but) => {
			but.addEventListener('click', this.remove.bind(this));
		});
	}

	/**
	 * Проверяет наличие товара в корзине
	 * @param {Product} product 
	 * @returns {Product|boolean} Возращает продукт или false
	 */
	checkProduct(product) {
		for (const prod of this.products) {
			if (prod.id == product.id) {
				return prod;
			}
		}
		return false;
	}

	/**
	 * Добавляет товар в корзину
	 * @param {Product} product 
	 */
	addProduct(product) {
		let prod = this.checkProduct(product);
		if (prod) {
			prod.addCount();
		} else {
			this.products.push(product);
		}
		this.calcSumCount();
		this.showCount();
		this.updateTable();
		this.saveCart();
	}

	/**
	 * Удаляет товар из корзины
	 * @param {Product} product 
	 */
	removeProduct(product) {
		this.products = this.products.filter(prod => prod.id != product.id);
		this.calcSumCount();
		this.showCount();
		this.updateTable();
		this.saveCart();
	}

	/**
	 * Отображает количество товара в корзине
	 * @returns 
	 */
	showCount() {
		if (!this.sumCount) {
			this.inCart.style.display = 'none';
			return;
		}
		this.inCart.style.display = '';
		this.inCart.innerHTML = this.sumCount;
	}

	/**
	 * Расчитывает количество товара в корзине
	 */
	calcSumCount() {
		this.sumCount = 0;
		for (const prod of this.products) {
			this.sumCount += prod.count;
		}
	}

	/**
	 * Событие очистки корзины
	 * @param {MouseEvent} event 
	 */
	clearCart(event) {
		this.sumCount = 0;
		this.products = [];
		this.updateTable();
		this.showCount();
		this.showCartTable(event);
		localStorage.removeItem('basket');
		event.stopPropagation();
		event.preventDefault();
	}

	/**
	 * Сохранение корзины
	 */
	saveCart() {
		localStorage.setItem('basket', JSON.stringify(this.products));
	}

	/**
	 * Загрузка корзины
	 * @returns 
	 */
	loadCart() {
		let products = localStorage.getItem('basket', false)
		if (!products) {
			return;
		}
		this.products = JSON.parse(products).map(e => new Product(e.id, e.name, e.descript, e.img, e.cost, e.types, e.count));
		this.calcSumCount();
		this.updateTable();
	}
}
