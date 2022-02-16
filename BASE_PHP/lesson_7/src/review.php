<?php

if ($isAdmin = isAdmin()) {
	reviewAction($mysqli);
}

if (isset($_POST['addReview'])) {
	list('firstname' => $name, 'review' => $review) = $_POST;
	$name = addslashes(strip_tags($name));
	$review = addslashes(strip_tags($review));
	$addReviewQuery = "INSERT INTO `reviews` (`name`, `review`) VALUES ('$name', '$review')";
	if ($isAdmin) {
		$addReviewQuery = "INSERT INTO `reviews` (`name`, `review`, `public`) VALUES ('$name', '$review', '1')";
	}
	if (!$mysqli->query($addReviewQuery)) {
		$reviews .= $addImageQuery . '<br>';
		$reviews .= $mysqli->error;
	};
}

$getReviewsQuery = "SELECT * FROM `reviews` WHERE public = 1  ORDER BY `date` DESC";
if ($isAdmin) {
	$getReviewsQuery = "SELECT * FROM `reviews` ORDER BY `date` DESC";
}

$resultRevies = $mysqli->query($getReviewsQuery);
$reviews = '';

while ($reviewInfo = $resultRevies->fetch_assoc()) {
	$adminReview = '';
	if ($isAdmin) {
		$adminReview = template('admin_review', $reviewInfo);
	}
	$reviewInfo['admin_review'] = $adminReview;
	$reviews .= template('review', $reviewInfo);
}

$reviews = template('reviews', ['reviews' => $reviews]);

function reviewAction($mysqli) {
	if (!isset($_GET['action'])) {
		return;
	}

	$args = json_decode(file_get_contents('php://input'), true);
	switch ($_GET['action']) {
		case 'changereviewpublic':
			$updatePublicReviewId = (int) $args['id'];
			$publicReview = (int) $args['val'];
			$actionQuery = "UPDATE `reviews` SET `public` = $publicReview WHERE `id` = $updatePublicReviewId";
			break;
		case 'deletereview':
			$deleteReviewId = (int) $args['id'];
			$actionQuery = "DELETE FROM `reviews` WHERE `reviews`.`id` = $deleteReviewId";
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