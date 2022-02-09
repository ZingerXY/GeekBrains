<?php

$query = "SELECT * FROM `reviews` WHERE public = 1  ORDER BY `date` DESC";

$result = $mysqli->query($query);
$reviews = '';

while ($row = $result->fetch_assoc()) {
	$reviews .= template('review', $row);
}

$reviews = template('reviews', ['reviews' => $reviews]);

if (isset($_POST['addReview'])) {
	list('firstname' => $name, 'review' => $review) = $_POST;
	$name = addslashes(htmlspecialchars($name));
	$review = addslashes(htmlspecialchars($review));
	$addImageQuery = "INSERT INTO `reviews` (`name`, `review`) VALUES ('$name', '$review')";
	if (!$mysqli->query($addImageQuery)) {
		$reviews .= $addImageQuery . '<br>';
		$reviews .= $mysqli->error;
	};
}