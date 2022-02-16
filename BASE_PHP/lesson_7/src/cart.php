<?php

	if (!isset($_SESSION['cart'])) {
		$_SESSION['cart'] = [];
	}

	if (isset($_POST['addToCart'])) {
		$goodsId = (int) $_POST['goodsId'];
		$queryGoods = "SELECT * FROM `goods` WHERE id = $goodsId";
		$goods = $mysqli->query($queryGoods)->fetch_assoc();

		$count = 0;
		if (array_key_exists($goodsId, $_SESSION['cart'])) {
			$count = $_SESSION['cart'][$goodsId]['count'];
		}

		$goods['count'] = ++$count;
		$goods['sumPrice'] = $count * $goods['price'];
		$_SESSION['cart'][$goodsId] = $goods;
	}

	if (isset($_POST['delToCart'])) {
		$goodsId = (int) $_POST['goodsId'];
		unset($_SESSION['cart'][$goodsId]);
	}

	$cartResult = 'Пусто';

	if (!isset($_POST['addorder']) && count($_SESSION['cart'])) {
		$cart = $_SESSION['cart'];
		$totalPrice = 0;
		$cartResult = '';
		foreach ($cart as $key => $goods) {
			$totalPrice += $goods['sumPrice'];
			$cartResult .= template('goods_in_cart', $goods);
		}

		$cartResult = template('cart', ['goodsInCart' => $cartResult, 'totalPrice' => $totalPrice]);
	}



