<?php

include_once 'uploadFile.php';

if (isset($_POST['editgoods']) && isAdmin()) {
	foreach ($_POST as $key => $value) {
		$_POST[$key] = addslashes(strip_tags($value));
	}
	$goodsId = (int) $_POST['id'];
	list('name' => $name, 'price' => $price, 'description' => $description) = $_POST;
	list('message' => $message, 'fileName' => $imageName) = uploadFile($_FILES['image']);
	$editGoodsQuery = "UPDATE `goods` SET `name` = '$name', `price` = '$price', " . ($imageName ? "`image` = '$imageName'" : '') . " `description` = '$description' WHERE `id` = $goodsId";
	$mysqli->query($editGoodsQuery);
}

$queryGoods = "SELECT * FROM `goods`";
$templateName = "goods_list";

if (isset($_GET['goodsId'])) {
	$goodsId = (int) $_GET['goodsId'];
	$queryGoods = "SELECT * FROM `goods` WHERE id = $goodsId";
	$templateName = "goods";
}

$result = $mysqli->query($queryGoods);
$goodsResult = '';

while ($row = $result->fetch_assoc()) {
	$row['goods_edit'] = '';
	if (isAdmin()) {
		$row['goods_edit'] = template('goods_edit', $row);
	}
	$goodsResult .= template($templateName, $row);
}

$goodsResult = template('market', ['goods'=> $goodsResult]);

if (isset($_POST['addgoods']) && isAdmin()) {
	foreach ($_POST as $key => $value) {
		$_POST[$key] = addslashes(strip_tags($value));
	}
	list('name' => $name, 'price' => $price, 'description' => $description) = $_POST;
	list('message' => $message, 'fileName' => $imageName) = uploadFile($_FILES['image']);
	$goodsResult .= $imageName . ' ' . $message;
	$addGoodsQuery = "INSERT INTO `goods` (`name`, `price`, `image`, `description`) VALUES ('$name', '$price', '$imageName', '$description')";
	if (!$mysqli->query($addGoodsQuery)) {
		$goodsResult .= $addImageQuery . '<br>';
		$goodsResult .= $mysqli->error;
	};
}
