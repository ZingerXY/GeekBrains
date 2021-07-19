'use strict';

window.addEventListener('load', () => {
	fetch('catalog.json')
	// fetch('https://zingery.ru/catalog.php')
		.then((response) => {
			return response.json()
		})
		.then((response) => {
			const catalog = new Catalog(response);
			catalog.render();
			const cart = new Cart(catalog);
			cart.init();
		})
		.catch((err) => {
			console.log(err)
		})
});
