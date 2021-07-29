'use strict';

const vue = new Vue({
	el: '.vue',
	data: {
		showSearch: false,
		goods: [],
		searchLine: '',
		sumCount: 0,
		showCart: false,
		goodsList: [],
	},
	computed: {
		searchGoods() {
			return this.goods.filter(e => this.searchLine && e.name.includes(this.searchLine));
		}
	},
	methods: {
		visibleSearch() {
			this.showSearch = !this.showSearch;
		},

	},
	mounted() {
		// fetch('catalog.json')
		fetch('https://zingery.ru/catalog.php')
			.then(response => response.json())
			.then(data => {
				this.goods = data;
				const catalog = new Catalog(data, this);
				catalog.render();
				const cart = new Cart(catalog, this);
				cart.init();
			})
			.catch((err) => {
				console.log(err)
			});
	}
});