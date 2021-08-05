'use strict';

Vue.component('cart-good', {
	template: `
		<tr>
			<td>{{ goodCart.name }} <i class="fa fa-trash fa-lg remove" v-on:click.stop.prevent="removeGood"></i></td>
			<td>{{ goodCart.count }} шт.</td>
			<td>$ {{ goodCart.cost }}</td>
			<td>$ {{ (goodCart.cost * goodCart.count).toFixed(2) }}</td>
		</tr>`,
	props: ['goodCart'],
	methods: {
		removeGood() {
			this.$emit('remove', this.goodCart.id);
		},
	}
});

Vue.component('cart-show', {
	data() {
		return {
			showCart: false,
		}
	},
	template: `
		<div class="right__cart menu">
			<img class="pointer" src="img/cart.svg" alt="cart" v-on:click.stop.prevent="visibleCart">
			<div class="right__cart-inCart pointer" v-if="sumCount" v-on:click.stop.prevent="visibleCart">{{ sumCount }}</div>
			<div class="right__cart-table" v-if="showCart && sumCount">
				<table>
					<tr><th>Название</th><th>Колличество</th><th>Цена за шт.</th><th>Итог</th></tr>
					<cart-good v-bind:key="good.id" v-for="good of goods_cart" v-bind:goodCart="good" v-on:remove="removeGood"></cart-good>
					<tr><td colspan="3" class="total">Итого:</td><td>$ {{ totalSum }}</td></tr>
				</table>
				<button class="clear" v-on:click.stop.prevent="clearCart">Очистить корзину</button>
				<a href="cart.html" class="clear">В корзину</a>
			</div>
		</div>`,
	props: ['goods_cart'],
	computed: {
		sumCount() {
			return this.goods_cart.length;
		},
		totalSum() {
			return this.goods_cart.reduce((a, good) => a + (good.cost * good.count), 0).toFixed(2);
		}
	},
	methods: {
		visibleCart() {
			this.showCart = !this.showCart;
		},
		clearCart() {
			this.$emit('update:goods_cart', []);
		},
		removeGood(id) {
			this.$emit('update:goods_cart', this.goods_cart.filter(good => good.id != id));
		},
		addHandler(good) {
			// const good = this.goods.find(good => good.id === id)
			// this.cart.push(good);
			console.log(good);
		}
	}
});