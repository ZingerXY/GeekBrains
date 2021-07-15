'use strict';

const goods = [{
		id: '1',
		name: 'Хипстерская борода',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-1.png",
		cost: 101,
		types: ['catalog', 'index'],
	},
	{
		id: '2',
		name: 'Красная рубашка',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-2.png",
		cost: 12,
		types: ['catalog'],
	},
	{
		id: '3',
		name: 'Белые шорты',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-3.png",
		cost: 5,
		types: ['catalog', 'index', 'product'],
	},
	{
		id: '4',
		name: 'Супер хипстерская борода',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-4.png",
		cost: 150,
		types: ['catalog', 'index', 'product'],
	},
	{
		id: '5',
		name: 'Виниры',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-5.png",
		cost: 1500,
		types: ['catalog'],
	},
	{
		id: '6',
		name: 'Голубая кепка',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-6.png",
		cost: 12,
		types: ['catalog'],
	},
	{
		id: '7',
		name: 'Кожаный ремень',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-7.png",
		cost: 22,
		types: ['catalog'],
	},
	{
		id: '8',
		name: 'Ручной пудель',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-8.png",
		cost: 122,
		types: ['catalog'],
	},
	{
		id: '9',
		name: 'Задумчивость',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-9.png",
		cost: 99,
		types: ['catalog'],
	},
	{
		id: '10',
		name: 'Модные туфли',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-2.png",
		cost: 33,
		types: ['index'],
	},
	{
		id: '11',
		name: 'Маникюр',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-5.png",
		cost: 33,
		types: ['index'],
	},
	{
		id: '12',
		name: 'Вкусный пончик',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-6.png",
		cost: 3,
		types: ['index', 'product'],
	},
];

class Catalog {
	constructor(allProducts) {
		this.allProducts = allProducts.map(item => new Product(item.id, item.name, item.descript, item.img, item.cost, item.types));
	}

	getProductById(id) {
		for (const prod of this.allProducts) {
			if (prod.id == id) {
				return prod;
			}
		}
	}

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
