<?php

include_once 'uploadFile.php';


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
	$goodsResult .= template($templateName, $row);
}

$goodsResult = template('market', ['goods'=> $goodsResult]);


if (isset($_POST['addgoods'])) {
	list('name' => $name, 'price' => $price, 'description' => $description) = $_POST;
	list('message' => $message, 'fileName' => $imageName) = uploadFile($_FILES['image']);
	$goodsResult .= $imageName . ' ' . $message;
	$addGoodsQuery = "INSERT INTO `goods` (`name`, `price`, `image`, `description`) VALUES ('$name', '$price', '$imageName', '$description')";
	if (!$mysqli->query($addGoodsQuery)) {
		$goodsResult .= $addImageQuery . '<br>';
		$goodsResult .= $mysqli->error;
	};
}
