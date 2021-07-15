'use strict';

class Product {
	constructor(id, name, descript, img, cost, types, count) {
		this.id = id;
		this.name = name;
		this.descript = descript;
		this.img = img;
		this.cost = cost;
		this.types = types;
		this.count = count || 1;
	}

	addCount() {
		this.count++;
	}

	renderToCatalog() {
		let html = '';
		html += `<a href="product.html" class="items__item" data-id="${this.id}">`;
		html += '<div class="items__item-image">';
		html += '<div class="items__item-image-AddToCart">';
		html += '<div class="items__item-image-AddToCart-but"><img src="img/add-to-cart.png" alt=""> Add to Cart</div>';
		html += '</div>';
		html += `<img src="${this.img}" alt="item-1">`;
		html += '</div>';
		html += `<h4 class="items__item-header">${this.name}</h4>`;
		html += `<p class="items__item-text">${this.descript}</p>`;
		html += `<div class="items__item-cost">$${this.cost.toFixed(2)}</div>`;
		html += '</a>';
		return html;
	}

	renderToCart() {
		return `<tr><td>${this.name}</td><td>${this.count} шт.</td><td>$${this.cost}</td><td>$${this.calcSum()}</td></tr>`;
	}

	calcSum() {
		return this.count * this.cost;
	}
}
