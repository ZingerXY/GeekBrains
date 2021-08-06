const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const jsonParser = bodyParser.json();

/**
 * Директория статических файлов
 */
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('hello world!');
});

app.get('/catalog', (req, res) => {
	fs.readFile('./data/catalog.json', 'utf8', (err, text) => {
		res.send(text);
	});
});

app.get('/cart', (req, res) => {
	fs.readFile('./data/cart.json', 'utf8', (err, data) => {
		res.send(data);
	});
});

app.post('/cart', jsonParser, (req, res) => {
	fs.readFile('./data/cart.json', 'utf8', (err, data) => {
		const cart = JSON.parse(data);
		const check = cart.find(good => good.id === req.body.id);
		if (check) {
			check.count++;
		} else {
			cart.push(req.body);
		}
		writeStats({
			'action': 'add',
			'name': req.body.name,
			'time': Date.now()
		});
		fs.writeFile('./data/cart.json', JSON.stringify(cart), () => {
			res.end();
		});
	});
});

app.delete('/cart', jsonParser, (req, res) => {
	fs.readFile('./data/cart.json', 'utf8', (err, data) => {
		let cart = JSON.parse(data);
		const id = req.body.id;
		cart = cart.filter(good => good.id != id);
		writeStats({
			'action': 'delete',
			'name': req.body.name,
			'time': Date.now()
		});
		fs.writeFile('./data/cart.json', JSON.stringify(cart), () => {
			res.end();
		});
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}/`)
})

function writeStats(info) {
	fs.readFile('./data/stats.json', 'utf8', (err, data) => {
		let stats = JSON.parse(data);
		stats.push(info);
		fs.writeFile('./data/stats.json', JSON.stringify(stats), () => {});
	});
}