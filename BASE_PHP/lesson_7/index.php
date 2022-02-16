<?php

session_start();

/* Отладка */
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

const IMAGES = './images/';
const IMAGES_MIN = './images/min/';

$reviews = '';

include_once 'src/config.php';
$mysqli = new mysqli(HOST, USER, PASSWORD, DB);

include_once 'src/users.php';
include_once 'src/template.php';
include_once 'src/cart.php';
include_once 'src/orders.php';
include_once 'src/review.php';
include_once 'src/goods.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lesson 8</title>
	<style type="text/css">
		table {
			border-collapse: collapse;
		}

		th, td {
			border: 1px solid #888;
			padding: 2px 5px;
		}

		.noborder {
			border: none;
		}

		.tdspace {
			height: 2px;
		}

		.goods_list {
			display: flex;
			flex-wrap: wrap;
		}

		.goods_img {
			max-height: 200px;
		}

		.cart_list {
			list-style: none;
			padding-left: 20px;
		}

		.checkboxControl {
			cursor: pointer;
			text-decoration: underline;
			margin-top: 15px;
		}

		#hidelogin:checked~.login {
			display: none;
		}

		#hidelogin:checked~.reg {
			display: block;
		}

		#hidelogin:not(:checked)~.login {
			display: block;
		}

		#hidelogin:not(:checked)~.reg {
			display: none;
		}

		.editKey {
			text-decoration: underline;
			font-weight: bold;
			cursor: pointer;
		}

		.showEdit:checked~.editForm {
			display: block;
		}

		.showEdit:not(:checked)~.editForm {
			display: none;
		}

		#addOrder:checked~.addOrderForm {
			display: block;
		}

		#addOrder:not(:checked)~.addOrderForm {
			display: none;
		}

		.addOrder {
			text-decoration: underline;
			font-weight: bold;
			cursor: pointer;
		}
	</style>
</head>

<body>
	<h1>Магаз для Вас</h1>
	<hr>
	<?= $loginMessage ?>
	<?php if (isLogin()) : ?>
		<div>
			Здравсвтуйте, <?= isAdmin() ? 'господин' : '' ?> <?= $_SESSION['user']['login'] ?><br>
			<form method="POST">
				<input class="login" type="submit" name="do_logout" value="Выйти">
			</form>
		</div>
		<?php if ($countOrders) : ?>
			<div>
				<h3>Заказы</h3>
				<?= $ordersResult ?>
			</div>
		<?php endif; ?>
	<?php else : ?>
		<div>
			<form method="POST">
				<input style="display: none;" type="checkbox" id="hidelogin">
				<b class="login">Вход</b>
				<b class="reg">Регистрация</b>
				<input type="text" name="login" placeholder="Login" required><br>
				<input type="password" name="password" placeholder="Password" required>
				<input class="login" type="submit" name="do_login" value="Войти">
				<input class="reg" type="submit" name="do_registration" value="Регистрация">
				<label class='checkboxControl login' for="hidelogin">Зарегистрироваться</label>
				<label class='checkboxControl reg' for="hidelogin">Войти</label>
			</form>
		</div>
	<?php endif; ?>
	<hr>
	<h3>Корзина</h3>
	<?= $cartResult ?><br>
	<?= $orderResult ?>
	<hr>
	<h3>Каталог</h3>
	<div>
		<?php if (isset($_GET['goodsId'])) : ?>
			<a href="index.php">В каталог</a>
		<?php endif; ?>
		<?= $goodsResult ?>
		<?php if (isAdmin() && !isset($_GET['goodsId'])) : ?>
			<h3>Добавление товара:</h3>
			<form method="POST" enctype="multipart/form-data">
				<input type="text" name="name" placeholder="name"></br>
				<input type="text" name="price" placeholder="price"></br>
				<input type="file" name="image" accept="image/*"></br>
				<input type="text" name="description" placeholder="description"></br>
				<input type="submit" name="addgoods" value="Отправить">
			</form>
		<?php endif; ?>
	</div>
	<hr>
	<h3>Отзывы</h3>
	<div>
		<?= $reviews ?>
	</div>
	<div>
		<form method="post">
			<input type="text" name='firstname' placeholder="Name" value='<?= $_SESSION['user']['login'] ?? '' ?>'><br>
			<textarea name="review" id="" cols="50" rows="6" maxlength="300"></textarea><br>
			<input type="hidden" name="addReview">
			<input type="submit" value="Отправить">
		</form>
	</div>
	<script>isAdmin = <?= (isAdmin() ? 'true': 'false')?></script>
	<script type="text/javascript" src="js/app.js?<?= uniqid() ?>"></script>
</body>

</html>