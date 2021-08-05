'use strict';

Vue.component('catalog-card', {
	template: `
		<a href="product.html" class="items__item" :data-id="card.id">
			<div class="items__item-image">
				<div class="items__item-image-AddToCart">
					<div class="items__item-image-AddToCart-but" v-on:click.stop.prevent="addHandler">
						<img src="img/add-to-cart.png" alt=""> Add to Cart
					</div>
				</div>
				<img :src="card.img" alt="item-1">
			</div>
			<h4 class="items__item-header">{{ card.name }}</h4>
			<p class="items__item-text">{{ card.descript }}</p>
			<div class="items__item-cost">$ {{ card.cost }}</div>
		</a>`,
	props: ['goods_card'],
	computed: {
		card() {
			this.goods_card.cost = this.goods_card.cost.toFixed(2);
			return this.goods_card;
		}
	},
	methods: {
		addHandler() {
			this.$emit('add', this.goods_card.id);
		}
	}
});

Vue.component('catalog-list', {
	template: `
		<div id='goods_list'>
			<catalog-card v-bind:key="goodss.id" v-for="goodss of goodCard" v-bind:goods_card="goodss" v-on:add="addHandler"></catalog-card>
		</div>`,
	props: ['goods_list'],
	computed: {
		goodCard() {
			let page = location.href.split('/').pop().split('.').shift();
			return this.goods_list.filter(e => e.types.includes(page));
		}
	},
	methods: {
		addHandler(id) {
			this.$emit('add', id)
		}
	}
});