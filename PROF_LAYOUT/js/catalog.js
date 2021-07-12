const goods = [{
		name: 'Хипстерская борода',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-1.png",
		price: 101,
	},
	{
		name: 'Красная рубашка',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-2.png",
		price: 12,
	},
	{
		name: 'Белые шорты',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-3.png",
		price: 5,
	},
	{
		name: 'Супер хипстерская борода',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-4.png",
		price: 150,
	},
	{
		name: 'Виниры',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-5.png",
		price: 1500,
	},
	{
		name: 'Голубая кепка',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-6.png",
		price: 12,
	},
	{
		name: 'Кожаный ремень',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-7.png",
		price: 22,
	},
	{
		name: 'Ручной пудель',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-8.png",
		price: 122,
	},
	{
		name: 'Задумчивость',
		descript: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
		img: "img/item-men-9.png",
		price: 99,
	},
];

const renderGoodsItem = (name, descript, img, price) => {
	let html = '';
	html += '<a href="product.html" class="items__item">';
	html +=		'<div class="items__item-image">';
	html += 		'<div class="items__item-image-AddToCart">';
	html += 			'<div class="items__item-image-AddToCart-but"><img src="img/add-to-cart.png" alt=""> Add to Cart</div>';
	html += 		'</div>';
	html += 		`<img src="${img}" alt="item-1">`;
	html += 	'</div>';
	html += 	`<h4 class="items__item-header">${name}</h4>`;
	html += 	`<p class="items__item-text">${descript}</p>`;
	html += 	`<div class="items__item-cost">$${price.toFixed(2)}</div>`;
	html += '</a>';
	return html;
};

const renderGoodsList = (list) => {
	let $goodsList = document.querySelector('#goods_list');
	if ($goodsList) {
		let goodsList = list.map(item => renderGoodsItem(item.name, item.descript, item.img, item.price)).join('');
		$goodsList.innerHTML = goodsList;
	}
}
