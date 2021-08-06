const vue = new Vue({
	el: "#app",
	data() {
		return {
			catalog: [],
			cart: []
		}
	},
	methods: {
		addHandler(good) {
			const check = this.cart.find(goods => goods.id === good.id);
			if (check) {
				check.count++;
			} else {
				this.cart.push(good);
			}
			fetch('/cart', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(good)
			});
		},
		removeHandler(good) {
			this.cart = this.cart.filter(goods => goods.id != good.id);
			fetch('/cart', {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(good)
			});
		}

	},
	mounted() {
		fetch('/catalog')
			.then((response) => {
				return response.json();
			})
			.then(data => {
				this.catalog = data;
			});
		fetch('/cart')
			.then((response) => {
				return response.json();
			})
			.then(data => {
				this.cart = data;
			});
		
	}
})