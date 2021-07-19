'use strict';

class Catalog {
	constructor(allProducts) {
		this.allProducts = allProducts.map(item => new Product(item.id, item.name, item.descript, item.img, item.cost, item.types));
	}

	/**
	 * Возвращает товар по его идетификатору
	 * @param {Number} id идетификатор товара
	 * @returns {Product}
	 */
	getProductById(id) {
		for (const prod of this.allProducts) {
			if (prod.id == id) {
				return prod;
			}
		}
	}

	/**
	 * Отображает товары в каталоге
	 */
	render() {
		let page = location.href.split('/').pop().split('.').shift();
		let nowGoods = this.allProducts.filter(e => e.types.includes(page));
		let $goodsList = document.querySelector('#goods_list');
		if ($goodsList) {
			let goodsList = nowGoods.map(item => item.renderToCatalog()).join('');
			$goodsList.innerHTML = goodsList;
		}
	}
}
