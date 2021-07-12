window.addEventListener('load', () => {
	if (typeof renderGoodsList == "function") {
		renderGoodsList(goods);
	}
	const cart = new Cart;
	cart.init();
});
