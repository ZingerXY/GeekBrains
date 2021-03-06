<?php

/* Отладка */
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

const IMAGES = './images/';
const IMAGES_MIN = './images/min/';

$calcResult = '';

$first = (int) isset($_GET['first']) ? $_GET['first'] : 0;
$second = (int) isset($_GET['second']) ? $_GET['second'] : 0;
$operation = isset($_GET['operation']) ? $_GET['operation'] : '';

if (isset($_GET['calc'])) {
	include_once 'src/mathFunctions.php';
	$calcResult = mathOperation($first, $second, $operation);
}

$reviews = '';

include_once 'src/config.php';
$mysqli = new mysqli(HOST, USER, PASSWORD, DB);


include_once 'src/template.php';
include_once 'src/review.php';
include_once 'src/goods.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lesson 6</title>
	<style type="text/css">
		.selected {
			border-color: red;
		}

		.date {
			font-size: 15px;
			font-weight: normal;
		}

		.goods_list {
			display: flex;
			flex-wrap: wrap;
		}

		.goods_img {
			max-height: 200px;
		}
	</style>
</head>

<body>
	<details>
		<summary>
			<h3>Задание 1</h3>
		</summary>
		<form action="index.php" method="get">
			<input type="text" name="first" size="6" value="<?= $first ?>">
			<select name="operation">
				<option value="sum" <?= $operation == 'sum' ? 'selected' : '' ?>>+</option>
				<option value="diff" <?= $operation == 'diff' ? 'selected' : '' ?>>-</option>
				<option value="div" <?= $operation == 'div' ? 'selected' : '' ?>>/</option>
				<option value="mult" <?= $operation == 'mult' ? 'selected' : '' ?>>*</option>
			</select>
			<input type="text" name="second" size="6" value="<?= $second ?>">
			<input type="submit" name="calc" value="=">
			<b><?= $calcResult ?></b>
		</form>
	</details>
	<hr>
	<details>
		<summary>
			<h3>Задание 2</h3>
		</summary>
		<form action="index.php" method="get">
			<input type="text" name="first" size="6" value="<?= $first ?>">
			<button name="operation" value="sum" class="<?= $operation == 'sum' ? 'selected' : '' ?>">+</button>
			<button name="operation" value="diff" class="<?= $operation == 'diff' ? 'selected' : '' ?>">-</button>
			<button name="operation" value="div" class="<?= $operation == 'div' ? 'selected' : '' ?>">/</button>
			<button name="operation" value="mult" class="<?= $operation == 'mult' ? 'selected' : '' ?>">*</button>
			<input type="text" name="second" size="6" value="<?= $second ?>">=<b><?= $calcResult ?></b>
			<input type="hidden" name="calc">
		</form>
	</details>
	<hr>
	<details>
		<summary>
			<h3>Задание 3 (Отзывы)</h3>
		</summary>
		<div>
			<?= $reviews ?>
		</div>
		<div>
			<form action="index.php" method="post">
				<input type="text" name='firstname' placeholder="Name"><br>
				<textarea name="review" id="" cols="50" rows="6" maxlength="300"></textarea><br>
				<input type="hidden" name="addReview">
				<input type="submit" value="Отправить">
			</form>
		</div>
	</details>
	<hr>
	<h3>Задание 4 (Страница каталога)</h3>
	<div>
		<a href="index.php">В каталог</a>
		<?= $goods ?>
		<?php if (isset($_GET['addGoods'])) : ?>
		<h3>Добавление товара:</h3>
		<form action="index.php" method="POST" enctype="multipart/form-data">
			<input type="text" name="name" placeholder="name"></br>
			<input type="text" name="price" placeholder="price"></br>
			<input type="file" name="image" accept="image/*"></br>
			<input type="text" name="description" placeholder="description"></br>
			<input type="hidden" name="addgoods">
			<input type="submit" value="Отправить">
		</form>
		<?php endif; ?>
	</div>
</body>

</html>