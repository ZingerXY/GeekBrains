'use strict';

Vue.component('search-input', {
	data() {
		return {
			showSearch: false,
			searchLine: '',
		}
	},
	template: `
		<div class="left__search">
			<input class="left__search-input" type="text" v-if="showSearch" v-model="searchLine">
			<img class="left__search-img" src="img/search.svg" alt="search" v-on:click="visibleSearch">
			<div class="left__search-drop" v-if="searchGoods.length && showSearch">
				<div class="left__search-drop-list">
					<div class="left__search-drop-list-item" v-for="good of searchGoods">{{ good.name }} $ {{ good.cost }}</div>
				</div>
			</div>
		</div>`,
	props: ['goods_list'],
	computed: {
		searchGoods() {
			return this.goods_list.filter(e => this.searchLine && e.name.includes(this.searchLine));
		}
	},
	methods: {
		visibleSearch() {
			this.searchLine = '';
			this.showSearch = !this.showSearch;
		},
	}
});

Vue.component('error-msg', {
	template: `
		<div class="error__msg">
			<strong>Ошибка! </strong>
			{{ msg }}
		</div>`,
	props: ['msg'],
});

const vue = new Vue({
	el: '#vue',
	data() {
		return {
			goods: [],
			sumCount: 0,
			showCart: false,
			cart: [],
			errorMsg: ''
		}
	},
	computed: {
	},
	methods: {
		addHandler(id) {
			const check = this.cart.find(good => good.id === id);
			if (check) {
				check.count++;
				this.updateGoods(this.cart);
				return;
			}
			const good = this.goods.find(good => good.id === id);
			this.cart.push(good);
			this.updateGoods(this.cart);
		},
		updateGoods(cart) {
			localStorage.setItem('basket', JSON.stringify(cart));
		}
	},
	mounted() {
		// fetch('catalog.json')
		fetch('https://zingery.ru/catalog.php')
			.then(response => response.json())
			.then(data => {
				this.goods = data;
			})
			.catch((err) => {
				this.errorMsg = err;
				console.log(err)
			});
		this.cart = JSON.parse(localStorage.getItem('basket', '[]'));
	}
});
