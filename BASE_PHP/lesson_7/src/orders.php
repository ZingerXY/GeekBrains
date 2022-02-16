<?php

if ($isAdmin = isAdmin()) {
	ordersAction($mysqli);
}

ordersUserAction($mysqli);

$customerInfo = getCustomerInfo($mysqli);
$customerId = $customerInfo['id'];
$orderResult = '';

if (isset($_POST['addorder'])) {
	foreach ($_POST as $key => $value) {
		$_POST[$key] = addslashes(strip_tags($value));
	}
	list('fullName' => $fullName, 'phoneNumber' => $phoneNumber, 'address' => $address) = $_POST;
	$userId = $_SESSION['user']['id'] ?? 0;
	if (!$customerId) {
		$addCustomerQuery = "INSERT INTO `customers` (`full_name`, `phone_number`, `address`, `user_id`) VALUES ('$fullName', '$phoneNumber', '$address', '$userId')";
	} else {
		$addCustomerQuery = "UPDATE `customers` SET `full_name` = '$fullName', `phone_number` = '$phoneNumber', `address` = '$address', `user_id` = '$userId' WHERE `id` = $customerId";
	}
	$mysqli->query($addCustomerQuery);
	$customerId = $customerId ? $customerId : $mysqli->insert_id;
	
	$totalPrice = 0;
	foreach ($_SESSION['cart'] as $item) {
		$totalPrice += $item['sumPrice'];
	}

	if ($totalPrice) {
		$addOrderQuery = "INSERT INTO `orders` (`customer_id`, `total_price`) VALUES ('$customerId', '$totalPrice')";
		$mysqli->query($addOrderQuery);
		$orderId = $mysqli->insert_id;

		foreach ($_SESSION['cart'] as $item) { //id	order_id	name	price	count	goods_id
			list('id' => $goods_id, 'name' => $name, 'price' => $price, 'count' => $count) = $item;
			$addOrderItemQuery = "INSERT INTO `order_items` (`order_id`, `name`, `price`, `count`, `goods_id`) VALUES ('$orderId', '$name', '$price', '$count', '$goods_id')";
			$mysqli->query($addOrderItemQuery);
		}

		$_SESSION['cart'] = [];
		$orderResult .= 'Заказ успешно добавлен';
	} else {
		$orderResult .= 'В заказе нет товаров';
	}
}

if (isset($_SESSION['cart']) && $_SESSION['cart']) {
	$orderResult .= template('add_order', $customerInfo);
}

$ordersResult = '';
if (isLogin() && $customerId) {
	$ordersInfoQuery = "SELECT o.id, c.full_name, c.address, c.phone_number, o.date, o.status, o.total_price FROM `orders` as o, `customers` as c WHERE o.`customer_id` = c.`id` AND c.`id` = $customerId";
	if ($isAdmin) {
		$ordersInfoQuery = "SELECT o.id, c.full_name, c.address, c.phone_number, o.date, o.status, o.total_price FROM `orders` as o, `customers` as c WHERE o.`customer_id` = c.`id`";
	}

	$resultOrdersInfo = $mysqli->query($ordersInfoQuery);
	$countOrders = $resultOrdersInfo->num_rows;
	while ($order = $resultOrdersInfo->fetch_assoc()) {
		$orderId = $order['id'];
		$itemsOrderQuery = "SELECT * FROM `order_items` WHERE order_id = $orderId";
		$resultItemsOrder = $mysqli->query($itemsOrderQuery);
		$orderItems = '';
		while ($item = $resultItemsOrder->fetch_assoc()) {
			$item['summ'] = $item['price'] * $item['count'];
			$orderItems .= template('order_item', $item);
		}
		$order['order_items'] = $orderItems;
		if ($isAdmin) {
			$order['edit_order'] = template('admin_edit_order', $order);
		} else {
			$order['edit_order'] = template('edit_order', $order);
		}
		$ordersResult .= template('order_info', $order);
	}
	$ordersResult = template('orders', ['orders' => $ordersResult]);
}

function getCustomerInfo($mysqli) {
	$customerInfo = ['id' => 0, 'full_name' => '', 'phone_number' => '', 'address' => ''];
	$userId = $_SESSION['user']['id'] ?? 0;
	if (!$userId) {
		return $customerInfo;
	}
	$getCustomerInfoQuery = "SELECT * FROM `customers` WHERE user_id = $userId";
	$resultCustomerInfo = $mysqli->query($getCustomerInfoQuery);
	if ($resultInfo = $resultCustomerInfo->fetch_assoc()) {
		return $resultInfo;
	}
	return $customerInfo;
}

function ordersAction($mysqli) {
	if (!isset($_GET['action'])) {
		return;
	}

	$args = json_decode(file_get_contents('php://input'), true);
	switch ($_GET['action']) {
		case 'changeorderstatus':
			$updateOrderStatusId = (int) $args['id'];
			$orderStatus = (int) $args['val'];
			$actionQuery = "UPDATE `orders` SET `status` = $orderStatus WHERE `id` = $updateOrderStatusId";
			break;
		case 'deleteorder':
			$deleteOrderId = (int) $args['id'];
			$deleteOrderItems = "DELETE FROM `order_items` WHERE `order_id` = $deleteOrderId";
			$mysqli->query($deleteOrderItems);
			$actionQuery = "DELETE FROM `orders` WHERE `id` = $deleteOrderId";
			break;
		case 'deleteitem':
			$deleteItemId = (int) $args['id'];
			$updateOrederQuery = "UPDATE `orders` SET `total_price` = (SELECT SUM(price * count) FROM `order_items` WHERE id != $deleteItemId) WHERE `id` = (SELECT order_id FROM `order_items` WHERE id = $deleteItemId)";
			$mysqli->query($updateOrederQuery);
			$actionQuery = "DELETE FROM `order_items` WHERE `id` = $deleteItemId";
			break;
		default:
			return;
	}

	if ($mysqli->query($actionQuery)) {
		sendJson(json_encode(['result' => 'ok']));
	} else {
		sendJson(json_encode(['result' => 'error']));
	}
}


function ordersUserAction($mysqli) {
	if (!isset($_GET['action'])) {
		return;
	}

	$args = json_decode(file_get_contents('php://input'), true);
	switch ($_GET['action']) {
		case 'deleteuseritem':
			$deleteItemId = (int) $args['id'];
			$updateOrederQuery = "UPDATE `orders` SET `total_price` = (SELECT SUM(price * count) FROM `order_items` WHERE id != $deleteItemId AND order_id = (SELECT order_id FROM `order_items` WHERE id = $deleteItemId)) WHERE `id` = (SELECT order_id FROM `order_items` WHERE id = $deleteItemId)";
			$mysqli->query($updateOrederQuery);
			$actionQuery = "DELETE FROM `order_items` WHERE `id` = $deleteItemId";
			break;
		default:
			return;
	}

	if ($mysqli->query($actionQuery)) {
		sendJson(json_encode(['result' => 'ok']));
	} else {
		sendJson(json_encode(['result' => 'error']));
	}
}