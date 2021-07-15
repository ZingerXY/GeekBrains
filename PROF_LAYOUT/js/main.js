'use strict';

window.addEventListener('load', () => {
	const catalog = new Catalog(goods);
	catalog.render();
	const cart = new Cart(catalog);
	cart.init();
});
